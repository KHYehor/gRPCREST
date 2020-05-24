'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixService = void 0;
var grpc_1 = __importDefault(require("./grpc"));
var MatrixService_1 = __importDefault(require("./MatrixService"));
var MatrixService = MatrixService_1.default.getInstance(grpc_1.default);
exports.MatrixService = MatrixService;
//# sourceMappingURL=index.js.map