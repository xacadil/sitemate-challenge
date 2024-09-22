"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm"); // Assuming TypeORM for database
const issuesRoutes_1 = __importDefault(require("./routes/issuesRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
(0, typeorm_1.createConnection)(); // Adjust based on your database setup
app.use('/issues', issuesRoutes_1.default);
exports.default = app;
