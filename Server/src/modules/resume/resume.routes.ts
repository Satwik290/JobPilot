import express from "express";
import { resumeController } from "./resume.controller";
import { upload } from "../../config/cloudinary";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { asyncHandler } from "../../utils/asyncHandler";


const router = express.Router();

// Upload Resume
router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  asyncHandler(resumeController.uploadResume)
);
// Get all Resumes
router.get(
  "/",
  authMiddleware,
  asyncHandler(resumeController.getMyResumes)
);

export default router;
