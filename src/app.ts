'use strict';

import { App, AppConfig } from './@types/app';

import fastify from 'fastify';
import { EventEmitter } from 'events'

export default class RESTServer extends EventEmitter {
  private readonly app: App;
  private config: AppConfig;
  constructor(config: AppConfig) {
    super();
    this.config = config
    this.app = fastify();
  }

  public setUpApp(): RESTServer {
    this.config.setUpRoutes(this.app);
    this.config.setUpMiddlewares(this.app);
    return this;
  }

  public async listen(PORT: number): Promise<string> {
    return this.app.listen(PORT);
  }
}
