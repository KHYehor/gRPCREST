'use strict';

import { App } from "../@types/app";
import {Reply} from "../@types/controllers";
import {FastifyReply, FastifyRequest} from "fastify";

type ValidationObject = {
  params: string,
  message: string,
}

const validationTransform = (validation: Array<ValidationObject>) =>
  validation.map((obj) => ({ params: obj.params, message: obj.message }));

const errorHandler = (err: Error, request: FastifyRequest, reply: FastifyReply<object>) => {
  // @ts-ignore
  const { name, stack, validation } = err;
  if (validation) {
    const transformedError = validationTransform(validation);
    return reply.code(400).send(transformedError);
  }
  console.error(err);
  reply
    .code(500)
    .send({
      name,
      // @ts-ignore
      stack: stack.split('\n')
    });
};

export default errorHandler;
