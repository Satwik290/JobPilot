import { Types } from "mongoose";

export interface IUserPayload {
  _id: Types.ObjectId;
  email: string;
  role?: string;
}
