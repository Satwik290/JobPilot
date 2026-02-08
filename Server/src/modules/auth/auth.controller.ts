import { Request, Response } from 'express';
import { authService } from './auth.service';

export class AuthController {
  register = async (req: Request, res: Response) => {
    try {
      const token = await authService.register(req.body);
      this.setTokenCookie(res, token); // Now works because of arrow function below
      res.status(201).json({ success: true, message: 'User registered' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { user, token } = await authService.login(req.body);
      this.setTokenCookie(res, token);
      res.status(200).json({ success: true, user });
    } catch (error: any) {
      res.status(401).json({ success: false, message: error.message });
    }
  };

  logout = (req: Request, res: Response) => {
    res.clearCookie('token');
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  };

  // FIXED: Changed to arrow function to preserve 'this'
  private setTokenCookie = (res: Response, token: string) => {
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
  };
}

export const authController = new AuthController();