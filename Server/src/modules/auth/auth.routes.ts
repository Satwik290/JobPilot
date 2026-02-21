import { Router } from 'express';
import { authController } from './auth.controller';
import  validate from '../../middlewares/validate.middleware';
import { registerSchema, loginSchema } from './auth.schema';
import { asyncHandler } from "../../utils/asyncHandler";


const router = Router();
router.post('/register', validate(registerSchema), asyncHandler(authController.register));
router.post('/login', validate(loginSchema), asyncHandler(authController.login));     
router.post('/logout', asyncHandler(authController.logout));

export default router;