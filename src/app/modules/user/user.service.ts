/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { TUser } from './user.interfacr';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  // const existingUser = await User.findOne({ email });
  const result = User.create(userData);
  return result;
};
const getUserFromDB = async (email: any) => {
  // const existingUser = await User.findOne({ email });
  const result = User.find(email);
  return result;
};
const userEmailVerificationFromDB = async (code: TUser) => {
  const user = await User.findOne(code);
  if (!user) {
    throw new Error('false');
  }
  (user.isVerified = true), (user.verificationCode = ''), await user.save();
  return user;
};
export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  userEmailVerificationFromDB,
};
