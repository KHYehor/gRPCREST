'use strict';

import grpcMatrix from './grpc';

import Matrix from './MatrixService';
const MatrixService: Matrix = Matrix.getInstance(grpcMatrix);

export {
  MatrixService
}
