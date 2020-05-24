import { Matrix } from "../@types/common";
import { IMatrixService } from "../@types/services";
export default class MatrixService implements IMatrixService {
    private static grpcMatrix;
    private static instance;
    constructor(grpcMatrix: object);
    static getInstance(grpcMatrix: any): MatrixService;
    /**
     *
     * @param matrix1
     * @param matrix2
     */
    calculateMatrixSum(matrix1: Matrix, matrix2: Matrix): Promise<Matrix>;
    /**
     *
     * @param matrix1
     * @param matrix2
     */
    calculateMatrixMul(matrix1: Matrix, matrix2: Matrix): Promise<Matrix>;
}
//# sourceMappingURL=MatrixService.d.ts.map