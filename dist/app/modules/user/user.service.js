"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const email = userData.email;
    const existingUser = yield user_model_1.User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
        throw new Error(`User already exists`);
    }
    const result = user_model_1.User.create(userData);
    return result;
});
const getUserFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // const existingUser = await User.findOne({ email });
    const result = user_model_1.User.find(email);
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const updateUserIntoDB = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistingUser = yield user_model_1.User.findById(id);
    // console.log(isExistingUser);
    // check semester registration not exits
    if (!isExistingUser) {
        throw new Error(`User is not found`);
    }
    const result = yield user_model_1.User.findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
    });
    return result;
});
const userEmailVerificationFromDB = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne(code);
    if (!user) {
        throw new Error('false');
    }
    (user.emailVerified = true), (user.verificationCode = ''), yield user.save();
    return user;
});
exports.UserServices = {
    createUserIntoDB,
    getUserFromDB,
    getAllUserFromDB,
    userEmailVerificationFromDB,
    updateUserIntoDB,
};
