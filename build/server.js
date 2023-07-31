"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port = 3000) {
        this.app = (0, express_1.default)();
        this.port = port;
    }
    setConfig(routes) {
        this.app.use(express_1.default.json());
        routes.forEach((route) => {
            this.app.use('/api', route);
        });
        return this;
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on PORT: ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map