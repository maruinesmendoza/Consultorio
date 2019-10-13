import { Router } from 'express';

class IndexRoutes
{

    public router: Router = Router();

    constructor()
    {

    }

    config():void 
    {
        this.router.get('/', (req,res) => res.send('Hola'));

    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router;
