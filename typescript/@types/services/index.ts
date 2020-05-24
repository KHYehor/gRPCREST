import {Matrix} from "../common";
import {ChannelCredentials, GrpcObject} from "grpc";

interface IMatrixService {
  calculateMatrixSum(m1: Matrix, m2: Matrix): Promise<Matrix>;
  calculateMatrixMul(m1: Matrix, m2: Matrix): Promise<Matrix>;
}

export {
  IMatrixService,
}
