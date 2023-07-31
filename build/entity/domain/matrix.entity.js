"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixEntity = void 0;
class MatrixEntity {
    constructor() {
        this.matrix = [];
    }
    setMatrix(rows) {
        this.matrix = rows || [];
    }
    getMatrix() {
        return this.matrix;
    }
    validateMatrix() {
        var _a, _b;
        const rows = this.matrix.length;
        const cols = ((_b = (_a = this.matrix) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.length) || 0;
        if (rows == 0)
            throw new Error("Debes proporcionar elementos en tu matriz");
        if (rows !== cols)
            throw new Error("La matriz debe ser NxN");
        for (let i = 0; i < rows; i++) {
            if (cols !== this.matrix[i].length)
                throw new Error(`La matriz debe contener filas de la misma longitud. Error en la fila ${i} de tu matriz.`);
            for (let j = 0; j < cols; j++) {
                if (!Number(this.matrix[i][j]))
                    throw new Error(`El elemento [${i},${j}] = ${this.matrix[i][j]} no es un número.`);
            }
        }
    }
}
exports.MatrixEntity = MatrixEntity;
//# sourceMappingURL=matrix.entity.js.map