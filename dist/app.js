"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/test', (req, res) => {
    const a = 'bideex server test';
    res.send(a);
});
// application route
app.use('/api', routes_1.default);
app.use('/uploads', express_1.default.static('https://bmw.bideex.com/public'));
// app.use(globalErrorHandler);
app.get('/', (req, res) => {
    res.send('Welcome to bideex Sever!');
});
exports.default = app;
