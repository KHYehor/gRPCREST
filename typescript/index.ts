'use strict';

import { AppConfig, App } from "./@types/app";

import RESTServer from './app';

import setUpRoutes from "./routes";
import setUpMiddlewares from "./middlewares";

const config: AppConfig = {
  setUpRoutes,
  setUpMiddlewares,
};

const Application = new RESTServer(config);

Application
  .setUpApp()
  .listen(3030, '127.0.0.1')
  .then(console.log)
  .catch(console.error);


