import { sendVerificationCode } from '../../middlewares/Email';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  // console.log(user.email, user.verficationCode);
  const result = await UserServices.createuserIntoDB(user);
  sendVerificationCode(user.email, user.verificationCode);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});
const userEmailVerify = catchAsync(async (req) => {
  const user = req.body;
  console.log(user);
  // console.log(user.email, user.verficationCode);
  // const result = await UserServices.createuserIntoDB(user);
  // sendVerificationCode(user.email, user.verificationCode);
  // sendResponse(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: 'User is created succesfully',
  //   data: result,
  // });
});
export const UserControllers = {
  createUser,
  userEmailVerify,
};
