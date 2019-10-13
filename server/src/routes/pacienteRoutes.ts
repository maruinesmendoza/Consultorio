import express, { Router } from 'express';

import controller from '../controller/pacienteController';

class PacienteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', controller.list);
        this.router.get('/:id', controller.get);
        this.router.post('/', controller.post);
        this.router.put('/:id', controller.put);
        this.router.delete('/:id', controller.delete);
    }

}

export default new PacienteRoutes().router;

