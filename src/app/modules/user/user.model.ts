import { model, Schema } from 'mongoose';
import { TUser, TUserName } from './user.interfacr';
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
  },
  {
    timestamps: true,
  },
);
export const User = model<TUser>('User', userSchema);
