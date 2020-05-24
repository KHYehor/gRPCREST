'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../../controllers");
var matrix_mul_1 = __importDefault(require("./matrix-mul"));
var matrix_sum_1 = __importDefault(require("./matrix-sum"));
var setUpMatrixRoutes = function (app) {
    // /matrix/mul
    matrix_mul_1.default(app, controllers_1.MatrixController);
    // /matrix/sum
    matrix_sum_1.default(app, controllers_1.MatrixController);
};
exports.default = setUpMatrixRoutes;
//# sourceMappingURL=index.js.map