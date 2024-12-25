export interface TUserName {
  firstName: string;
  lastName: string;
  userName: string;
  fullName: string;
}
export interface TUser {
  id: string;
  name: TUserName;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: number;
  country?: string;
  imagePath?: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  isDeleted: boolean;
  emailVerified: boolean;
  verificationCode: string;
}

// export interface UserModel extends Model<TUser> {
//     //instance methods for checking if the user exist
//     isUserExistsByCustomId(id: string): Promise<TUser>;
//     //instance methods for checking if passwords are matched
//     isPasswordMatched(
//       plainTextPassword: string,
//       hashedPassword: string,
//     ): Promise<boolean>;
//     isJWTIssuedBeforePasswordChanged(
//       passwordChangedTimestamp: Date,
//       jwtIssuedTimestamp: number,
//     ): boolean;
//   }
