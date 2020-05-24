'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var routes_1 = __importDefault(require("./routes"));
var middlewares_1 = __importDefault(require("./middlewares"));
var config = {
    setUpRoutes: routes_1.default,
    setUpMiddlewares: middlewares_1.default,
};
var Application = new app_1.default(config);
Application
    .setUpApp()
    .listen(3030, '127.0.0.1')
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=index.js.map