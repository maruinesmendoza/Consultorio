import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'
import{ Observable} from 'rxjs';

import { ConsultasModel } from 'src/app/models/consultasModels'
import { Service } from 'src/app/services/service';
import {map, startWith} from 'rxjs/operators';

    @Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
    })
  export class ConsultasComponent implements OnInit {
  ConsultasCtrl = new FormControl();
  apiNameconsultas : string = 'Consultas';
  listconsultas : Observable<ConsultasModel[]>;
  consultas : ConsultasModel[];

  constructor(private service: Service) {}


  ngOnInit() {
    this.service.list<ConsultasModel>(this.apiNameconsultas).subscribe(
      res => {
        this.consultas = res;
        this.listconsultas = this.ConsultasCtrl.valueChanges
        .pipe(
        startWith(''),
         map(item => item ? this._filterStates(item) : this.consultas.slice())
);
        },
    err => console.log(err)
)


}

private _filterStates(value: string): ConsultasModel[] {
  const filterValue = value.toLowerCase();

  
  return this.consultas.filter(Consultas =>Consultas.nombre_de_enfermedad.toLowerCase().indexOf(filterValue) === 0);

  }
}
