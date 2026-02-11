import { Router } from "express";
import { jobController } from "./job.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import  validate  from "../../middlewares/validate.middleware";
import { jobSchema, updateJobSchema } from "./job.schema";

const router = Router();
router.use(authMiddleware);
router.route('/')
  .post(validate(jobSchema), jobController.create)
  .get(jobController.getAll);

router.route('/:id')
  .put(validate(updateJobSchema), jobController.update)
  .delete(jobController.delete);

export default router;