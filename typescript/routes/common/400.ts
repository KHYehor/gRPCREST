'use strict';

import { RouteSchema } from "fastify";

const options: RouteSchema = {
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

export default options;
