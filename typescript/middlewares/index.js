'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler_1 = __importDefault(require("./errorHandler"));
var setUpMiddlewares = function (app) {
    app.setErrorHandler(errorHandler_1.default);
};
exports.default = setUpMiddlewares;
//# sourceMappingURL=index.js.map