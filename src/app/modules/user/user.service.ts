import { TUser } from './user.interfacr';
import { User } from './user.model';

const createuserIntoDB = async (userData: TUser) => {
  const result = User.create(userData);
  return result;
};
export const UserServices = {
  createuserIntoDB,
};
