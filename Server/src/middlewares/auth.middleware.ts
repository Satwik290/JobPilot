import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/users/user.model";
import { env } from "../config/env";

// 1. Define the structure of your JWT payload for type safety
interface DecodedToken extends JwtPayload {
  id: string;
  email: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    // 2. Dual-Extraction Strategy:
    // Check Authorization Header first (Standard for APIs), then fallback to Cookies.
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }

    // 3. Fail Fast if no token found
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }

    // 4. Verify Token
    const decoded = jwt.verify(token, env.JWT_SECRET) as DecodedToken;

    // 5. Database Lookup (Optimized)
    // We explicitly select fields to keep the query light. 
    // We check if the user actually still exists in the DB.
    const user = await User.findById(decoded.id).select("_id email role name");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User belonging to this token no longer exists",
      });
    }

    // 6. Attach user to request object
    req.user = user;
    next();
    
  } catch (error) {
    // 7. Silent failure for security, but informative for debugging if needed
    // You typically don't want to expose specific JWT errors (like "expired") to the public
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};