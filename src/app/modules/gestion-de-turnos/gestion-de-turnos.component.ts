import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { PersonaModel } from 'src/app/models/personaModel';
import { Service } from 'src/app/services/service';
@Component({
  selector: 'app-gestion-de-turnos',
  templateUrl: './gestion-de-turnos.component.html',
  styleUrls: ['./gestion-de-turnos.component.scss']
})
export class GestionDeTurnosComponent implements OnInit {

  personasCtrl = new FormControl();
  apiNamePersonas : string = 'persona';
  listPersonas : Observable<PersonaModel[]>;
  personas : PersonaModel[];
  constructor(private service: Service) { }
  ngOnInit() {
    this.service.list<PersonaModel>(this.apiNamePersonas).subscribe(
      res => {
        console.log(res);
        this.personas = res;
        this.listPersonas = this.personasCtrl.valueChanges
        .pipe(
          startWith(''),
          map(item => item ? this._filterStates(item) : this.personas.slice())
        );
      },
      err => console.log(err)
    )


  }


  private _filterStates(value: string): PersonaModel[] {
    const filterValue = value.toLowerCase();

    return this.personas.filter(persona => persona.Apellido.toLowerCase().indexOf(filterValue) === 0);
  }

}
