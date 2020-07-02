'use strict';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
// const {
//   GRPC_SERVICE,
// } = process.env;
const PROTO_PATH = __dirname + '/proto/calculate.proto';
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const grpcPackage = protoLoader.loadSync(PROTO_PATH, options);
const { CalculateMatrix } = grpc.loadPackageDefinition(grpcPackage).calculate;
// @ts-ignore
const grpcMatrix = new CalculateMatrix(
  '127.0.0.1:5000',
  grpc.credentials.createInsecure()
);

export default grpcMatrix;
