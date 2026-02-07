import { Schema, model } from 'mongoose';
import { IUserDocument, UserRole } from '../../types/user.types';

const userSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER }
}, { timestamps: true });


export const User = model<IUserDocument>('User', userSchema);