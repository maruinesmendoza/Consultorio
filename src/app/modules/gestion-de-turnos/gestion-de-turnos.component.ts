import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms'
import { PersonaModel } from 'src/app/models/personaModel';
import { ObraSocialModel } from 'src/app/models/obraSocialModel'

import { Service } from 'src/app/services/service';


@Component({
  selector: 'app-gestion-de-turnos',
  templateUrl: './gestion-de-turnos.component.html',
  styleUrls: ['./gestion-de-turnos.component.scss']
})
export class GestionDeTurnosComponent implements OnInit {
  form: FormGroup;
  personasCtrl = new FormControl();
  apiNamePersonas : string = 'persona';
  list : Observable<PersonaModel[]>;
  personas : PersonaModel[];
  apiobrasocial : string = 'obrasocial';
  obrasocial : ObraSocialModel[];
  get field() { return this.form.controls; }
 
  
  constructor(private formBuilder: FormBuilder,private service: Service) { }
   ngOnInit() {
    this.service.list<PersonaModel>(this.apiNamePersonas).subscribe(
      res => {
        console.log(res);
        this.personas = res;
        this.list = this.personasCtrl.valueChanges
        .pipe(
          startWith(''),
          map(item => item ? this._filterStates(item) : this.personas.slice())
        );
      },
      err => console.log(err)

    )
    this.service.list<ObraSocialModel>(this.apiobrasocial).subscribe(
      res => {
        console.log(res);
        this.obrasocial = res;
      },
      err => console.log(err)
   
       
    )
  }


   private _filterStates(value: string): PersonaModel[] {
    const filterValue = value.toLowerCase();

    return this.personas.filter(persona => persona.Apellido.toLowerCase().indexOf(filterValue) === 0);
  

    

    }
      
    get GestionTurno(){
      return this.form.value.GestionTurno;
    }
    get ObraSocial (){
      return this.form.value.ObraSocial;
    }
    get Paciente()
    {
    return this.form.value.Paciente;
    }
    get fecha() 
    {
      return this.form.value.Fecha;
      }
   
    Save()
    {
    const model = 
    {
      IdGestionTurno: this.field.IdGestionTurno.value,
      IdObraSocial : this.field.IdObraSocial.value,
      IdPaciente:  this.field.IdPaciente.value,
      Fecha: this.field.Fecha.value,
   
    }
    this.service.save(model,this.apiNamePersonas).subscribe(
      res => {
        console.log(res);
        this.Clear();
      },
      err => console.log(err)
    )
    }
    Clear()
    {
      this.field.IdGestionTurno.setValue(null);
      this.field.IdObraSocial.setValue(null);
      this.field.IdPaciente.setValue(null);
      this.field.Fecha.setValue(null);
      }  
    }
  


