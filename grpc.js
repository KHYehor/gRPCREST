'use strict';

const grpc = require('grpc')
const matrix = grpc.load('./typescript/services/grpc/proto/calculate.proto')
const server = new grpc.Server()

server.addService(matrix.calculate.CalculateMatrix.service, {
  MatrixSum: (call, callback) => {
    const { matrix1, matrix2 } = call.request;
    console.log(matrix1);
    console.log(matrix2);
    callback(null, {
      matrix: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4,]
      ]
    });
  },
  MatrixMul: (call, callback) => {
    const { matrix1, matrix2 } = call.request;
    console.log(matrix1);
    console.log(matrix2);
    callback(null, {
      matrix: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4,]
      ]
    });
  },
})

server.bind(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure()
);
console.log('Server running at http://127.0.0.1:50051')
server.start()
