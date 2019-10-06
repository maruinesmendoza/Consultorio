import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from '../app/modules/pacientes/pacientes.component'

const routes: Routes = [
  { path: 'Pacientes', component: PacientesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
