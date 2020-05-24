/// <reference types="node" />
import { AppConfig } from './@types/app';
import { EventEmitter } from 'events';
export default class RESTServer extends EventEmitter {
    private readonly app;
    private config;
    constructor(config: AppConfig);
    setUpApp(): RESTServer;
    listen(PORT: number, HOST: string): Promise<string>;
}
//# sourceMappingURL=app.d.ts.map