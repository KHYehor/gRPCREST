'use strict';

import { RouteSchema } from "fastify";

const options: RouteSchema = {
  response: {
    404: { type: 'string' },
  }
}

export default options;
