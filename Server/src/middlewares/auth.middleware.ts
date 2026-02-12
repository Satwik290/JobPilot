import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/users/user.model";
import { env } from "../config/env";

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

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET) as DecodedToken;
    const user = await User.findById(decoded.id).select("_id email role name");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User belonging to this token no longer exists",
      });
    }

    req.user = user;
    next();
    
  } catch (error) {
      return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};