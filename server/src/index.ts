import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes  from './routes/indexRoutes';
import { Routes } from './routes/routes';
import { PacienteController } from './controller/pacienteController';
import { PersonaController } from './controller/personaController';
import { GestionTurnosController } from './controller/gestionTurnosController';
import { LaboratorioController } from './controller/laboratorioController';
import { ConsultaController } from './controller/consultaController';
import { PagosController } from './controller/pagosController';
import { ApmController } from './controller/ampController';
import { OrbaSocialController } from './controller/ObraSocialController';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    
    routes(): void 
    {
        this.app.use(indexRoutes);
        const route = new Routes();
        this.app.use('/api/apm', route.route(new ApmController()));
        this.app.use('/api/consulta', route.route(new ConsultaController()));
        this.app.use('/api/gestionTurnos', route.route(new GestionTurnosController()));
        this.app.use('/api/laboratorio', route.route(new LaboratorioController()));
        this.app.use('/api/obraSocial', route.route(new OrbaSocialController()));
        this.app.use('/api/paciente', route.route(new PacienteController()));
        this.app.use('/api/pagos', route.route(new PagosController()));
        this.app.use('/api/persona', route.route(new PersonaController()));
     }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port',this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();