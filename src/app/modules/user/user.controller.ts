/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendVerificationCode } from '../../middlewares/Email';
import { uploadToFTP } from '../../middlewares/uploads';
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
const getAllUser = catchAsync(async (req, res, next) => {
  try {
    const result = await UserServices.getAllUserFromDB();
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
const updateUser = catchAsync(async (req: any, res, next) => {
  try {
    const image = req.file;
    const localFilePath = req.file.path;
    const remoteFileName = req.file.filename;
    // console.log(image);
    await uploadToFTP(localFilePath, remoteFileName);
    // const fileUrl = `https://bmw.bideex.com/public/uploads/${image?.filename}`;
    // console.log(fileUrl);
    const user = req.body;
    const dbUserId = user.id;
    const data = {
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
      },
      address: user?.address,
      city: user?.city,
      zipCode: user?.zipCode,
      state: user?.state,
      country: user?.country,
      phone: user?.phone,
      imagePath: image?.filename,
    };
    const result = await UserServices.updateUserIntoDB(data, dbUserId);
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
  getAllUser,
  updateUser,
  userEmailVerify,
};
