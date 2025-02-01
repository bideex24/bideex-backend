/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { TUser } from './user.interfacr';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const email = userData.email;
  const existingUser = await User.findOne({ email });
  console.log(existingUser);
  if (existingUser) {
    throw new Error(`User already exists`);
  }
  const result = User.create(userData);
  return result;
};
const getUserFromDB = async (email: any) => {
  // const existingUser = await User.findOne({ email });
  const result = User.find(email);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const updateUserIntoDB = async (user: any, id: any) => {
  const isExistingUser = await User.findById(id);
  // console.log(isExistingUser);
  // check semester registration not exits
  if (!isExistingUser) {
    throw new Error(`User is not found`);
  }
  const result = await User.findByIdAndUpdate(id, user, {
    new: true,
    runValidators: true,
  });
  return result;
};
const userEmailVerificationFromDB = async (code: TUser) => {
  const user = await User.findOne(code);
  if (!user) {
    throw new Error('false');
  }
  (user.emailVerified = true), (user.verificationCode = ''), await user.save();
  return user;
};
export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  getAllUserFromDB,
  userEmailVerificationFromDB,
  updateUserIntoDB,
};
