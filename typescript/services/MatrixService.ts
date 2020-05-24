'use strict';

import { Matrix } from "../@types/common";
import { IMatrixService } from "../@types/services";

export default class MatrixService implements IMatrixService {
  private static grpcMatrix: any;
  private static instance: MatrixService;
  constructor(grpcMatrix: object) {
    if (!MatrixService.grpcMatrix) {
      MatrixService.grpcMatrix = grpcMatrix;
    }
  }
  // Add interface
  public static getInstance(grpcMatrix: any): MatrixService {
    if (MatrixService.instance) return MatrixService.instance;
    MatrixService.instance = new MatrixService(grpcMatrix);
    return MatrixService.instance;
  }

  /**
   *
   * @param matrix1
   * @param matrix2
   */
  public async calculateMatrixSum(matrix1: Matrix, matrix2: Matrix): Promise<Matrix> {
    return new Promise((resolve, reject) => {
      const callback = (err: Error, res: any) => {
        if (err) {
          reject (err);
          return;
        }
        const resultMatrix: Matrix = [];
        res.matrix.forEach((obj: any) => resultMatrix.push(obj?.digit));
        resolve(resultMatrix);
      }
      MatrixService.grpcMatrix.MatrixSum({ matrix1, matrix2 }, callback);
    });
  }

  /**
   *
   * @param matrix1
   * @param matrix2
   */
  public async calculateMatrixMul(matrix1: Matrix, matrix2: Matrix): Promise<Matrix> {
    const result: any = await MatrixService.grpcMatrix.MatrixMul(matrix1, matrix2);
    return matrix2;
  }
}
