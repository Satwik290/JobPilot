import { Request, Response } from "express";
import { resume } from "./resume.model";

export class ResumeController {
  uploadResume = async (req: any, res: any) => {
  try {
    console.log("FILE DATA:", req.file); // DEBUG

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Extract Cloudinary fields safely
    const fileUrl =
      req.file.path ||
      req.file.secure_url ||
      req.file.url;

    const publicId =
      req.file.filename ||
      req.file.public_id;

    const fileSize =
      req.file.bytes ||
      req.file.size;

    if (!fileUrl || !publicId || !fileSize) {
      console.error("Invalid file object:", req.file);

      return res.status(400).json({
        success: false,
        message: "Invalid file upload data",
      });
    }

    const newResume = await resume.create({
      user: req.user._id,

      fileName: req.file.originalname,

      fileUrl,
      publicId,
      fileSize,
    });

    return res.status(201).json({
      success: true,
      data: newResume,
    });

  } catch (error: any) {
    console.error("Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


  getMyResumes = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "User not authenticated",
        });
      }

      const resumes = await resume
        .find({ user: req.user._id })
        .sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        data: resumes,
      });

    } catch (error: any) {
      console.error("Fetch Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

export const resumeController = new ResumeController();
