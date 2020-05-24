import { FastifyInstance } from "fastify";
declare type App = FastifyInstance;
interface AppConfig {
    setUpRoutes(app: App): void;
    setUpMiddlewares(app: App): void;
}
export { App, AppConfig, };
//# sourceMappingURL=index.d.ts.map