"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = __importDefault(require("../controller/pacienteController"));
class PacienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pacienteController_1.default.list);
        this.router.get('/:id', pacienteController_1.default.get);
        this.router.post('/', pacienteController_1.default.post);
        this.router.put('/:id', pacienteController_1.default.put);
        this.router.delete('/:id', pacienteController_1.default.delete);
    }
}
exports.default = new PacienteRoutes().router;
