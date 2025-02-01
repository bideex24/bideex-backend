"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Email_1 = require("../../middlewares/Email");
const uploads_1 = require("../../middlewares/uploads");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_service_1 = require("./user.service");
const http_status_1 = __importDefault(require("http-status"));
const createUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.UserServices.createUserIntoDB(user);
        yield (0, Email_1.sendVerificationCode)(user.email, user.verificationCode);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User is created succesfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}));
const getAllUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUserFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}));
const getUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.query.email;
        const email = { email: userEmail };
        const result = yield user_service_1.UserServices.getUserFromDB(email);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}));
const updateUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = req.file;
        const localFilePath = req.file.path;
        const remoteFileName = req.file.filename;
        // console.log(image);
        yield (0, uploads_1.uploadToFTP)(localFilePath, remoteFileName);
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
            address: user === null || user === void 0 ? void 0 : user.address,
            city: user === null || user === void 0 ? void 0 : user.city,
            zipCode: user === null || user === void 0 ? void 0 : user.zipCode,
            state: user === null || user === void 0 ? void 0 : user.state,
            country: user === null || user === void 0 ? void 0 : user.country,
            phone: user === null || user === void 0 ? void 0 : user.phone,
            imagePath: image === null || image === void 0 ? void 0 : image.filename,
        };
        const result = yield user_service_1.UserServices.updateUserIntoDB(data, dbUserId);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}));
const userEmailVerify = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verficationCode = req.body;
        const result = yield user_service_1.UserServices.userEmailVerificationFromDB(verficationCode);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User email verification succesfully!',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.UserControllers = {
    createUser,
    getUser,
    getAllUser,
    updateUser,
    userEmailVerify,
};
