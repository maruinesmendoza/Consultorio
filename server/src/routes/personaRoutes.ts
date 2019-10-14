import controller from '../controller/personaController';
import { BaseRoutes } from './baseRoutes';

class  PersonaRoutes extends BaseRoutes {
    constructor() {
        super(controller);
    }
}

export default new PersonaRoutes().router;