import { Router } from "express";
import { jobController } from "./job.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import  validate  from "../../middlewares/validate.middleware";
import { jobSchema, updateJobSchema } from "./job.schema";
import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();
router.use(authMiddleware);
router.route('/')
  .post(validate(jobSchema), asyncHandler(jobController.create))
  .get(asyncHandler(jobController.getAll));

router.route('/:id')
  .put(validate(updateJobSchema), asyncHandler(jobController.update))
  .delete(asyncHandler(jobController.delete));

export default router;