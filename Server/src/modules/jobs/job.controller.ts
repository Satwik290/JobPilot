import { Request, Response } from 'express';
import { jobService } from './job.service';

export class JobController {
  // Create Job
  create = async (req: Request, res: Response) => {
    try {
      const job = await jobService.createJob(req.user!, req.body);
      res.status(201).json({ success: true, data: job });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  // Get All Jobs for User
  getAll = async (req: Request, res: Response) => {
    try {
      const jobs = await jobService.getJobs(req.user!);
      res.status(200).json({ success: true, count: jobs.length, data: jobs });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  // Update Job 
  update = async (req: Request, res: Response) => {
    try {
      const job = await jobService.updateJob(req.params.id, req.user!, req.body);
      if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
      
      res.status(200).json({ success: true, data: job });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  // Delete Job
  delete = async (req: Request, res: Response) => {
    try {
      const job = await jobService.deleteJob(req.params.id, req.user!);
      if (!job) return res.status(404).json({ success: false, message: 'Job not found' });

      res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
}

export const jobController = new JobController();