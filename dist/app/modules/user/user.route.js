"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const uploads_1 = require("../../middlewares/uploads");
const router = express_1.default.Router();
router.post('/create-user', (0, validateRequest_1.default)(user_validation_1.UserValidation.userValidationSchema), user_controller_1.UserControllers.createUser);
router.put('/', uploads_1.upload.single('photo'), user_controller_1.UserControllers.updateUser);
// router.get('/', UserControllers.getAllUser);
router.get('/', user_controller_1.UserControllers.getUser);
router.post('/', user_controller_1.UserControllers.userEmailVerify);
exports.userRoutes = router;
