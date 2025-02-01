import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
import { upload } from '../../middlewares/uploads';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);
router.put('/', upload.single('photo'), UserControllers.updateUser);
// router.get('/', UserControllers.getAllUser);
router.get('/', UserControllers.getUser);
router.post('/', UserControllers.userEmailVerify);
export const userRoutes = router;
