import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
const router = express.Router();
router.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);
router.get('/', UserControllers.getUser);
router.post('/', UserControllers.userEmailVerify);
export const userRoutes = router;
