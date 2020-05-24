'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var options = {
    response: {
        400: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    params: {
                        type: 'object',
                        properties: { missingProperty: { type: 'string' } },
                    },
                    message: { type: 'string' },
                },
            },
        }
    },
};
exports.default = options;
//# sourceMappingURL=400.js.map