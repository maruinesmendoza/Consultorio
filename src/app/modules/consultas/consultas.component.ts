import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'
import{ Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { ConsultasModel } from 'src/app/models/consultasModels'
import { Service } from 'src/app/services/service';
import {map, startWith} from 'rxjs/operators';

    @Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']

    })
  export class ConsultasComponent implements OnInit {
    form: FormGroup;
  ConsultasCtrl = new FormControl();
  apiNameconsultas : string = 'Consultas';
  listconsultas : Observable<ConsultasModel[]>;
  consultas : ConsultasModel[];
  consultasmodel : ConsultasModel;
  get field() { return this.form.controls; }


  constructor(private formBuilder: FormBuilder,private service: Service) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      fecha: ['', Validators.required],
      Diagnostico: ['', Validators.required],
      medicamento: ['', Validators.required],

    });
     
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
  get fecha() {
  return this.form.value.fecha;
  }

    get diagnostico() {
    return this.form.value.Diagnostico;
}
    get Medicamento() {
  return this.form.value.Medicamento;

}

  Save()
  {
    const model = 
    {
      fecha: this.field.fecha.value,
      Diagnostico: this.field.Diagnostico.value,
      Medicamento: this.field.Medicamento.value,
    }
    
    this.service.save(model,this.apiNameconsultas).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }



private _filterStates(value: string): ConsultasModel[] {
  const filterValue = value.toLowerCase();

  
  return this.consultas.filter(Consultas =>Consultas.nombre_de_enfermedad.toLowerCase().indexOf(filterValue) === 0);

  }
}
