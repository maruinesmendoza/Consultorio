import controller from '../controller/pacienteController';
import { BaseRoutes } from './baseRoutes';

class  PacienteRoutes extends BaseRoutes {
    constructor() {
        super(controller);
    }
}

export default new PacienteRoutes().router;