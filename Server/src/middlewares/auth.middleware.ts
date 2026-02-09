import { env } from "../config/env";
import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from "express";

const authmiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
    if(!token){
        return res.status(401).json({success: false , message : 'Unauthorized'});
    }
    try {
    const decodeed = jwt.verify(token , env.JWT_SECRET) as {id : string};
    (req as any).user = decodeed.id;
    next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token is invalid or expired' });
    }
};

export default authmiddleware;