'use strict';

import { App } from '../@types/app';

import errorHandler from './errorHandler';

const setUpMiddlewares = (app: App) => {
  app.setErrorHandler(errorHandler);
  app.register(require('fastify-cors'), { origin: true });
};

export default setUpMiddlewares;
