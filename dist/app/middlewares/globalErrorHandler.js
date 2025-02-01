"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || 'something went wrong';
    return res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandler;
