import { sendVerificationCode } from '../../middlewares/Email';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserIntoDB(user);
    await sendVerificationCode(user.email, user.verificationCode);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
});
const getUser = catchAsync(async (req, res, next) => {
  try {
    const userEmail = req.query.email;
    const email = { email: userEmail };
    const result = await UserServices.getUserFromDB(email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
});
const userEmailVerify = catchAsync(async (req, res, next) => {
  try {
    const verficationCode = req.body;
    const result =
      await UserServices.userEmailVerificationFromDB(verficationCode);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User email verification succesfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
});
export const UserControllers = {
  createUser,
  getUser,
  userEmailVerify,
};
