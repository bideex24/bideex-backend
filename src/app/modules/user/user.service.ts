/* eslint-disable @typescript-eslint/no-unused-expressions */
 
import { TUser } from './user.interfacr';
import { User } from './user.model';

const createuserIntoDB = async (userData: TUser) => {
  const result = User.create(userData);
  return result;
};
const userEmailVerificationFromDB = async (code: TUser) => {
  const user = await User.findOne(code);
  if (!user) {
    return 'Invalid Or Expired Code';
  }
  (user.isVerified = true), (user.verificationCode = ''), await user.save();
  return user;
};
export const UserServices = {
  createuserIntoDB,
  userEmailVerificationFromDB,
};
