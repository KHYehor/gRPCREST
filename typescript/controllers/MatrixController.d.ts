import { Request, Reply } from "../@types/controllers";
import { IMatrixService } from "../@types/services";
export default class MatrixController {
    private static instance;
    private static MatrixService;
    constructor(service: IMatrixService);
    static getInstance(service: IMatrixService): MatrixController;
    getMatrixSum(request: Request, reply: Reply): Promise<void>;
    getMatrixMul(request: Request, reply: Reply): Promise<void>;
}
//# sourceMappingURL=MatrixController.d.ts.map