'use strict';

import { Request, Reply } from "../@types/controllers";
import { IMatrixService } from "../@types/services";

export default class MatrixController {
  private static instance: MatrixController;
  private static MatrixService: IMatrixService;
  constructor(service: IMatrixService) {
    if (!MatrixController.MatrixService) {
      MatrixController.MatrixService = service;
    }
  }
  static getInstance(service: IMatrixService): MatrixController {
    if (MatrixController.instance) return MatrixController.instance;
    MatrixController.instance = new MatrixController(service);
    return MatrixController.instance;
  }

  public async getMatrixSum(request: Request, reply: Reply): Promise<void> {
    const { body } = request;
    const { matrix1, matrix2 } = body;
    console.log(body);
    const result = await MatrixController.MatrixService.calculateMatrixSum(matrix1, matrix2);
    console.log(result);
    reply.code(200).send({ matrix: result });
  }

  public async getMatrixMul(request: Request, reply: Reply): Promise<void> {
    const { body } = request;
    const { matrix1, matrix2 } = body;
    const result = await MatrixController.MatrixService.calculateMatrixSum(matrix1, matrix2);
    reply.code(200).send(result);
  }

}
