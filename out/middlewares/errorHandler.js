'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var validationTransform = function (validation) {
    return validation.map(function (obj) { return ({ params: obj.params, message: obj.message }); });
};
var errorHandler = function (err, request, reply) {
    // @ts-ignore
    var name = err.name, stack = err.stack, validation = err.validation;
    if (validation) {
        var transformedError = validationTransform(validation);
        return reply.code(400).send(transformedError);
    }
    console.error(err);
    reply
        .code(500)
        .send({
        name: name,
        // @ts-ignore
        stack: stack.split('\n')
    });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map