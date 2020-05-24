import { FastifyReply, FastifyRequest } from "fastify";
declare const errorHandler: (err: Error, request: FastifyRequest, reply: FastifyReply<object>) => FastifyReply<object> | undefined;
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map