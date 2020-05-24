'use strict';
import { App } from '../../@types/app';

import { MatrixController } from '../../controllers';

import setUpMatrixMul from './matrix-mul';
import setUpMatrixSum from './matrix-sum';

const setUpMatrixRoutes = (app: App): void => {
  // /matrix/mul
  setUpMatrixMul(app, MatrixController);
  // /matrix/sum
  setUpMatrixSum(app, MatrixController);
};

export default setUpMatrixRoutes;
