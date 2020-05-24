import { Matrix } from "../common";
interface IMatrixService {
    calculateMatrixSum(m1: Matrix, m2: Matrix): Promise<Matrix>;
    calculateMatrixMul(m1: Matrix, m2: Matrix): Promise<Matrix>;
}
export { IMatrixService, };
//# sourceMappingURL=index.d.ts.map