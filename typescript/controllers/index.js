'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixController = void 0;
var services_1 = require("../services");
var MatrixController_1 = __importDefault(require("./MatrixController"));
var MatrixController = MatrixController_1.default.getInstance(services_1.MatrixService);
exports.MatrixController = MatrixController;
//# sourceMappingURL=index.js.map