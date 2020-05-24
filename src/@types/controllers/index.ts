import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

type Reply = FastifyReply<ServerResponse>;
type Request = FastifyRequest;

export {
  Reply,
  Request,
}
