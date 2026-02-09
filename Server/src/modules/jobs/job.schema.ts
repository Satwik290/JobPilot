import { z } from 'zod';
import { JobStatus } from '../../types/job.types';

export const jobSchema = z.object({
  body: z.object({
    company: z.string().min(1, "Company name is required"),
    position: z.string().min(1, "Position is required"),
    status: z.nativeEnum(JobStatus).optional(),
    appliedDate: z.string().pipe(z.coerce.date()).optional(),
    salary: z.number().optional(),
    location: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const updateJobSchema = z.object({
  body: jobSchema.shape.body.partial(),
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Job ID format"),
  }),
});

export type IJobInput = z.infer<typeof jobSchema>['body'];