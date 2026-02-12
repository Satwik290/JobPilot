import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";
import multer from "multer";

/**
 * Global Error Handler
 * Must be last middleware in app.ts
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("🔥 ERROR:", err);

  // --------------------
  // ZOD Validation Error
  // --------------------
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: err.errors.map((e) => ({
        path: e.path.join("."),
        message: e.message,
      })),
    });
  }

  // --------------------
  // Multer Error
  // --------------------
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  // --------------------
  // JWT Error
  // --------------------
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Session expired",
    });
  }

  // --------------------
  // Mongoose Validation
  // --------------------
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      success: false,
      message: "Database validation error",
      errors: Object.values(err.errors).map((e: any) => e.message),
    });
  }

  // --------------------
  // Mongoose Cast Error
  // --------------------
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  // --------------------
  // Custom App Errors
  // --------------------
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // --------------------
  // Default (500)
  // --------------------
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
