"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixController = void 0;
class MatrixController {
    constructor(matrixActions, matrixEntity) {
        MatrixController.matrixActions = matrixActions;
        MatrixController.matrixEntity = matrixEntity;
        console.log(matrixActions, matrixEntity);
    }
    rotateMatrix(request, response, next) {
        try {
            const reqMatrix = request.body;
            MatrixController.matrixEntity.setMatrix(reqMatrix);
            MatrixController.matrixEntity.validateMatrix();
            const newMatrix = MatrixController.matrixActions.rotateAntiClockwise(MatrixController.matrixEntity.getMatrix());
            response.status(200).json({
                success: true,
                data: newMatrix,
                message: 'Se ejecutó correctamente'
            });
        }
        catch (error) {
            response.status(400).json({
                success: false,
                data: null,
                message: error === null || error === void 0 ? void 0 : error.message
            });
        }
    }
}
exports.MatrixController = MatrixController;
//# sourceMappingURL=matrix.controller.js.map