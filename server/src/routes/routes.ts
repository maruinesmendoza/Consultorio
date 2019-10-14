import express, { Router } from 'express';
import { PacienteController } from '../controller/pacienteController';
import { PersonaController } from '../controller/personaController';


export class Routes {
    route(controller: any)
    {
        const router: Router =Router();
        router.get('/', controller.list);
        router.get('/:id', controller.get);
        router.post('/', controller.post);
        router.put('/:id', controller.put);
        router.delete('/:id', controller.delete);

        return router;
    }
}
