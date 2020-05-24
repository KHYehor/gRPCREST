'use strict';

import { App } from '../@types/app';

import errorHandler from './errorHandler';

const setUpMiddlewares = (app: App) => {
  app.setErrorHandler(errorHandler);
};

export default setUpMiddlewares;
