import { IUserPayload } from "../resume.types";

declare global {
  namespace Express {
    interface Request {
      user?: IUserPayload;
    }
  }
}

export {};
