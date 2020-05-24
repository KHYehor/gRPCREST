'use strict';

import { RouteSchema } from "fastify";

const options: RouteSchema = {
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

export default options;
