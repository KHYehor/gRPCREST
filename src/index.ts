'use strict';

import { AppConfig } from "./@types/app";

import RESTServer from './app';

import setUpRoutes from "./routes";
import setUpMiddlewares from "./middlewares";

const { PORT, HOST } = process.env;

const config: AppConfig = {
  setUpRoutes,
  setUpMiddlewares,
};

const Application = new RESTServer(config);

Application
  .setUpApp()
// @ts-ignore
  .listen(PORT, HOST)
  .then(console.log)
  .catch(console.error);


