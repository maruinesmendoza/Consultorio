import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PacientesComponent } from './modules/pacientes/pacientes.component';
import { ConsultasComponent } from './modules/consultas/consultas.component';
import { ApmComponent } from './modules/apm/apm.component';
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
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacientesComponent,
    ConsultasComponent,
    ApmComponent,
    GestionDeTurnosComponent,
    PagosComponent,
    ObraSocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule,
    MatListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    OwlDateTimeModule, OwlNativeDateTimeModule

  ],
  providers: [MatDatepickerModule,MatCheckboxModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
