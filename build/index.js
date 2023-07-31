"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const entity_1 = __importDefault(require("./entity"));
const routes = [entity_1.default];
const main = () => {
    new server_1.Server(3000).setConfig(routes).start();
};
main();
//# sourceMappingURL=index.js.map