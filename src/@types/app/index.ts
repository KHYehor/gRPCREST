import { FastifyInstance } from "fastify";

type App = FastifyInstance;

interface AppConfig {
  setUpRoutes(app: App): void;
  setUpMiddlewares(app: App): void;
}

export {
  App,
  AppConfig,
}
