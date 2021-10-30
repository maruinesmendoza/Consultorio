import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from '../app/modules/pacientes/pacientes.component'
import { ConsultasComponent } from '../app/modules/consultas/consultas.component'
import { ApmComponent } from '../app/modules/apm/apm.component'
import { GestionDeTurnosComponent }  from '../app/modules/gestion-de-turnos/gestion-de-turnos.component'
import { PagosComponent }  from '../app/modules/pagos/pagos.component'
import { ObraSocialComponent }  from '../app/modules/obra-social/obra-social.component'
import { HomeComponent} from '../app/modules/home/home.component'
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent},

  { path: 'Pacientes', component: PacientesComponent },
  { path: 'Consultas', component: ConsultasComponent },
  { path: 'APM', component: ApmComponent },
  
  { path: 'GestionTurnos', component: GestionDeTurnosComponent },
  { path: 'Pagos', component: PagosComponent },  
  { path: 'ObraSocial', component: ObraSocialComponent },
  { path: '',component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
