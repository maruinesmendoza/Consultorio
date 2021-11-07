import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtInterceptor, ErrorInterceptor,fakeBackendProvider } from './helpers';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PacientesComponent } from './modules/pacientes/pacientes.component';
import { ConsultasComponent } from './modules/consultas/consultas.component';
import { ApmComponent } from './modules/apm/apm.component';
import { GestionDeTurnosComponent } from './modules/gestion-de-turnos/gestion-de-turnos.component';
import { PagosComponent } from './modules/pagos/pagos.component';
import { ObraSocialComponent } from './modules/obra-social/obra-social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './modules/alert/alert.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';

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
import {OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatSelectModule} from '@angular/material/select'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import {CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacientesComponent,
    ConsultasComponent,
    ApmComponent,
    GestionDeTurnosComponent,
    PagosComponent,
    ObraSocialComponent,
    LoginComponent,
    MainComponent,
    AlertComponent
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
    OwlDateTimeModule, OwlNativeDateTimeModule,
    MatSelectModule, 
    MatSnackBarModule,  
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [MatDatepickerModule,MatCheckboxModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
