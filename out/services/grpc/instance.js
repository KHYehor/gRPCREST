'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
// const {
//   GRPC_SERVICE,
// } = process.env;
var PROTO_PATH = __dirname + '/proto/calculate.proto';
var options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};
var grpcPackage = protoLoader.loadSync(PROTO_PATH, options);
var CalculateMatrix = grpc.loadPackageDefinition(grpcPackage).calculate.CalculateMatrix;
// @ts-ignore
var grpcMatrix = new CalculateMatrix('127.0.0.1:50051', grpc.credentials.createInsecure());
exports.default = grpcMatrix;
//# sourceMappingURL=instance.js.map