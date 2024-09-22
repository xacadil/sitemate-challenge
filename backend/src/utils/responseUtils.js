"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, statusCode, data, message) => {
    res.status(statusCode).json({ message, data });
};
exports.sendResponse = sendResponse;
