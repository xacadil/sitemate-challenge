"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIssue = void 0;
const joi_1 = __importDefault(require("joi"));
const issueSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    status: joi_1.default.string().valid('open', 'closed').required(),
});
const validateIssue = (req, res, next) => {
    const { error } = issueSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.validateIssue = validateIssue;
