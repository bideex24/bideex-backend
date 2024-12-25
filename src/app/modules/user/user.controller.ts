/* eslint-disable @typescript-eslint/no-explicit-any */
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
    // console.log(userEmail);
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
const updateUser = catchAsync(async (req, res, next) => {
  try {
    const image = req.file;
    const user = req.body;
    const data = {
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
      },
      email: user?.email,
      address: user?.address,
      city: user?.city,
      zipCode: user?.zipCode,
      state: user?.state,
      country: user?.country,
      phone: user?.phone,
      imagePath: image?.filename,
    };
    const result = await UserServices.updateUserIntoDB(data);
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
  updateUser,
  userEmailVerify,
};
