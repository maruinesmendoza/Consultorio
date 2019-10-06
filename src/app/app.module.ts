import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PacientesComponent } from './modules/pacientes/pacientes.component';
import { ConsultasComponent } from './modules/consultas/consultas.component';
import { ApmComponent } from './modules/apm/apm.component';
import { ReporteComponent } from './modules/reporte/reporte.component';
import { GestionDeTurnosComponent } from './modules/gestion-de-turnos/gestion-de-turnos.component';
import { PagosComponent } from './modules/pagos/pagos.component';
import { ObraSocialComponent } from './modules/obra-social/obra-social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacientesComponent,
    ConsultasComponent,
    ApmComponent,
    ReporteComponent,
    GestionDeTurnosComponent,
    PagosComponent,
    ObraSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
