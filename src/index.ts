'use strict';

import { AppConfig } from "./@types/app";

import RESTServer from './app';

import setUpRoutes from "./routes";
import setUpMiddlewares from "./middlewares";

// const { PORT, HOST } = process.env;

const config: AppConfig = {
  setUpRoutes,
  setUpMiddlewares,
};

const Application = new RESTServer(config);

Application
  .setUpApp()
// @ts-ignore
  .listen(3030, '0.0.0.0')
  .then(console.log)
  .catch(console.error);


