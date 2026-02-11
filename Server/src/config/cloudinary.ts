import cloudinary from "cloudinary";
import multer from "multer";
import { env } from "./env";

const multerStorageCloudinary = require("multer-storage-cloudinary");

const CloudinaryStorage =
  multerStorageCloudinary.CloudinaryStorage ||
  multerStorageCloudinary.default ||
  multerStorageCloudinary;

// --------------------
// Cloudinary Config
// --------------------
cloudinary.v2.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

// --------------------
// Storage
// --------------------
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // IMPORTANT: full object

  params: {
    folder: "jobpilot_resumes",
    resource_type: "raw",
    use_filename: true,
    unique_filename: true,
  },
});

// --------------------
// Multer
// --------------------
export const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files allowed") as any, false);
    }
  },
});
