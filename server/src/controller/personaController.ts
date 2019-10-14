import { BaseController } from './baseController';
class PersonaController extends BaseController {
    constructor() {
        super("Persona");
    }
}

const personaController = new PersonaController();
export default personaController;