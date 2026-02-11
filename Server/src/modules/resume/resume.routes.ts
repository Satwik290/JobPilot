import express from "express";
import { resumeController } from "./resume.controller";
import { upload } from "../../config/cloudinary";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

// Upload Resume
router.post(
  "/upload",
  authMiddleware,        // FIRST
  upload.single("file"),// SECOND
  resumeController.uploadResume
);


// Get My Resumes
router.get(
  "/",
  authMiddleware,
  resumeController.getMyResumes
);

export default router;
