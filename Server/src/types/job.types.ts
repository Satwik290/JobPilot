import { Document, Types } from 'mongoose';

/**
 * Job Status Enum for consistency across the app
 */
export enum JobStatus {
  APPLIED = 'Applied',
  INTERVIEW = 'Interview',
  OFFER = 'Offer',
  REJECTED = 'Rejected'
}

/**
 * Core Job Interface
 */
export interface IJob {
  user: Types.ObjectId;
  company: string;
  position: string;
  status: JobStatus;
  appliedDate: Date;
  notes?: string;
  salary?: number;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose Document Interface
 */
export interface IJobDocument extends IJob, Document {
  _id: Types.ObjectId;
}