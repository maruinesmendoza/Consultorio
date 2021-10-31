import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './modules/pacientes/pacientes.component'
import { ConsultasComponent } from './modules/consultas/consultas.component'
import { ApmComponent } from './modules/apm/apm.component'
import { GestionDeTurnosComponent }  from './modules/gestion-de-turnos/gestion-de-turnos.component'
import { PagosComponent }  from './modules/pagos/pagos.component'
import { ObraSocialComponent }  from './modules/obra-social/obra-social.component'
import { HomeComponent} from './modules/home/home.component'
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent, canActivate: [AuthGuard] },

  { path: 'Pacientes', component: PacientesComponent, canActivate: [AuthGuard]  },
  { path: 'Consultas', component: ConsultasComponent , canActivate: [AuthGuard]  },
  { path: 'APM', component: ApmComponent , canActivate: [AuthGuard]  },
  
  { path: 'GestionTurnos', component: GestionDeTurnosComponent , canActivate: [AuthGuard] },
  { path: 'Pagos', component: PagosComponent , canActivate: [AuthGuard] },  
  { path: 'ObraSocial', component: ObraSocialComponent , canActivate: [AuthGuard]  },
  { path: '',component: HomeComponent, canActivate: [AuthGuard]   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
