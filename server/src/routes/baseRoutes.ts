import express, { Router } from 'express';

import { BaseController } from '../controller/baseController';

var controller : BaseController;
export class BaseRoutes {
  
    router: Router = Router();

    constructor(currentController : BaseController) {
        controller = currentController;
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
