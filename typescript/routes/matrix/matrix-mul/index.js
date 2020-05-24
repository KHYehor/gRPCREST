'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../../common");
var setUpMatrixMul = function (app, MatrixController) {
    var _a, _b;
    var options = {
        method: 'POST',
        url: '/matrix/mul',
        handler: MatrixController.getMatrixMul,
        schema: {
            body: {
                type: 'object',
                properties: {
                    matrix1: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                type: 'number'
                            },
                        }
                    },
                    matrix2: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                type: 'number'
                            },
                        }
                    }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: {
                            type: 'array',
                            items: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                            }
                        }
                    }
                }
            }
        }
    };
    Object.assign((_b = (_a = 
    // @ts-ignore
    options === null || 
    // @ts-ignore
    options === void 0 ? void 0 : 
    // @ts-ignore
    options.schema) === null || _a === void 0 ? void 0 : _a.response) !== null && _b !== void 0 ? _b : {}, common_1.invalidInputArgumets.response, common_1.internalServerError.response, common_1.notFound.response);
    app.route(options);
};
exports.default = setUpMatrixMul;
//# sourceMappingURL=index.js.map