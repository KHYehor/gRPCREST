'use strict';

import { App } from '../@types/app';

import setUpMatrixRoutes from './matrix';

const setUpRoutes = (app: App): void => {
  setUpMatrixRoutes(app);
};

export default setUpRoutes;
