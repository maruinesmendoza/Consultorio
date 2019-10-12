import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule } from '@angular/material/core';
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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
