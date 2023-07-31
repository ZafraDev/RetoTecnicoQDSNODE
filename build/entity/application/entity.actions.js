"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixActions = void 0;
class MatrixActions {
    rotateAntiClockwise(matrix) {
        var _a;
        const newMatrix = []; // Nueva matríz a retornar
        const rows = matrix.length; // Cantidad filas
        const cols = ((_a = matrix === null || matrix === void 0 ? void 0 : matrix[0]) === null || _a === void 0 ? void 0 : _a.length) || 0; // Cantidad columnas
        let x = 0; // Nuevas filas de la matríz
        for (let j = (cols - 1); j >= 0; j--) { // Recorrer columnas desde la última, hasta la inicial
            for (let i = 0; i < rows; i++) { // Recorrer filas desde el inicio hasta la última
                if (!newMatrix[x]) { // Si no hay una fila, se añade
                    newMatrix[x] = [];
                }
                newMatrix[x].push(matrix[i][j]); // Se agrega en forma de fila una columna, eso es un giro antihorario de 90%
            }
            x++; // Se incrementa para pasar a una nueva fila de la nueva matríz
        }
        return newMatrix;
    }
}
exports.MatrixActions = MatrixActions;
//# sourceMappingURL=entity.actions.js.map