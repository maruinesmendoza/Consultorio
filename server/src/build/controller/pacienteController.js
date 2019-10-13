"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = require("./baseController");
class PacienteController extends baseController_1.BaseController {
    constructor() {
        super("Paciente");
    }
}
const pacienteController = new PacienteController();
exports.default = pacienteController;
