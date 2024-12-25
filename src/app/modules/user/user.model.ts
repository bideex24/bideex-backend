/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser, TUserName } from './user.interfacr';
// import bcrypt from 'bcrypt';
// import config from '../../config';
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
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  userName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  fullName: {
    type: String,
    trim: true,
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
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    country: {
      type: String,
    },
    imagePath: {
      type: String,
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
    emailVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
  },
  {
    timestamps: true,
  },
);

// userSchema.pre('save', async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });
// userNameSchema.post('save', function (doc: any, next) {
//   doc.password = '';
//   next();
// });
export const User = model<TUser>('User', userSchema);
