'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.internalServerError = exports.invalidInputArgumets = void 0;
var _400_1 = __importDefault(require("./400"));
exports.invalidInputArgumets = _400_1.default;
var _500_1 = __importDefault(require("./500"));
exports.internalServerError = _500_1.default;
var _404_1 = __importDefault(require("./404"));
exports.notFound = _404_1.default;
//# sourceMappingURL=index.js.map