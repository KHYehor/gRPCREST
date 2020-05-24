'use strict';

import { MatrixService } from '../services';
import Matrix from './MatrixController'

const MatrixController: Matrix = Matrix.getInstance(MatrixService);

export {
  MatrixController
}
