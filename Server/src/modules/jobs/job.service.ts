import { Job } from "./job.model";
import { IJobDocument } from "../../types/job.types";
import { promises } from "dns";

export class JobService {
    //create job
    createJob = async(userId: string, data:Partial<IJobDocument>): Promise<IJobDocument> => {
        return await Job.create({ ...data, user: userId });
    };

    //get jobs
    getJobs = async(userId: string): Promise<IJobDocument[]> =>{
        return await Job.find({ user: userId }).sort({ createdAt: -1 });
    };

    //update job
    updateJob = async (jobId: string, userId: string, data: Partial<IJobDocument>): Promise<IJobDocument | null> => {
    return await Job.findOneAndUpdate(
      { _id: jobId, user: userId },
      { $set: data },
      { new: true, runValidators: true }
    );
  };

  //delete job
  deleteJob = async(jobId:string, userId:string): Promise<IJobDocument| null>=>{
    return await Job.findByIdAndDelete(
        {_id: jobId, user: userId },
    );
  }

};

export const jobService = new JobService(); 