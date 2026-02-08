import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../users/user.model';
import { env } from '../../config/env';
import { IRegisterInput, ILoginInput } from './auth.schema';
import { UserResponse } from '../../types/user.types';

export class AuthService {
  async register(data: IRegisterInput): Promise<string> {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) throw new Error('EMAIL_ALREADY_EXISTS');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    return this.generateToken(user._id.toString());
  }

  async login(data: ILoginInput): Promise<{ user: UserResponse; token: string }> {
    const user = await User.findOne({ email: data.email }).select('+password');
    if (!user) throw new Error('INVALID_CREDENTIALS');

    const isMatch = await bcrypt.compare(data.password, user.password as string);
    if (!isMatch) throw new Error('INVALID_CREDENTIALS');

    const token = this.generateToken(user._id.toString());
    
    const userObj = user.toObject() as UserResponse;
    delete (userObj as any).password;

    return { user: userObj, token };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ id: userId }, env.JWT_SECRET, { expiresIn: '1d' });
  }
}

export const authService = new AuthService();