import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: string; // This adds 'user' to the Request type globally
    }
  }
}