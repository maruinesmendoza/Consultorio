import { BaseController } from './baseController';
class PacienteController extends BaseController {
 constructor()
 {     
     super("Paciente");     
 }
}

const pacienteController = new PacienteController();
export default pacienteController;