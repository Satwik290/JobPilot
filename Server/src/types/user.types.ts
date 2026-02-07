import { Document, Types } from 'mongoose';

/**
 * Roles for authorization (Extensible for 2026 SaaS standards)
 */
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  PREMIUM = 'PREMIUM' // Useful if you add paid AI features later
}

/**
 * Base User interface defining the core data structure
 */
export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password?: string; // Optional because we often exclude it in responses
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface specifically for Mongoose Documents
 * Includes Mongoose-specific methods like .save() or .toObject()
 */
export interface IUserDocument extends IUser, Document {
  _id: Types.ObjectId;
}

/**
 * Sanitize User object for API responses 
 * (Omits sensitive data like password)
 */
export type UserResponse = Omit<IUser, 'password'>;