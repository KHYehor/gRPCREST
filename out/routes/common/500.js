'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var options = {
    response: {
        500: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                stack: {
                    type: 'array',
                    items: { type: 'string' },
                },
            },
        },
    }
};
exports.default = options;
//# sourceMappingURL=500.js.map