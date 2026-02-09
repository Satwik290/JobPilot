import { Schema, model } from "mongoose";
import {  IJobDocument, JobStatus } from "../../types/job.types";

const jobSchema = new Schema<IJobDocument>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "job must belong to a user"],
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },
    position: {
        type: String,
        required: [true, "Position is required"],
        trim: true,
    },
    status: {
        type: String,
        enum: Object.values(JobStatus),
        default: JobStatus.APPLIED,
    },
    appliedDate: {
        type: Date,
        default: Date.now,
    },
    salary:{
        type: Number,
    },
    location:{
        type: String,
        trim: true,
    },
    notes:{
        type: String,
    }

},
{ timestamps: true }
);

jobSchema.index({ user: 1, createdAt: -1 });

export const Job = model<IJobDocument>('Job', jobSchema);