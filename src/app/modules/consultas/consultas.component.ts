import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'

import {FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { ConsultasModel } from 'src/app/models/consultasModels'
import { Service } from 'src/app/services/service';


    @Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']

    })
  export class ConsultasComponent implements OnInit {
    form: FormGroup;
  apiName : string = 'Consultas';
  list: ConsultasModel[];
  get field() { return this.form.controls; }


  constructor(private formBuilder: FormBuilder,private service: Service) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      Fecha: ['', Validators.required],
      Diagnostico: ['', Validators.required],
      Medicamento: ['', Validators.required],

    });
     
    this.service.list<ConsultasModel>(this.apiName).subscribe(
      res => {
        console.log(res);
        this.list=res;
      },
      err => console.log(err)
    )
  }


    get fecha() {
    return this.form.value.Fecha;
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
      fecha: this.field.Fecha.value,
      Diagnostico: this.field.Diagnostico.value,
      Medicamento: this.field.Medicamento.value,
    }
    
    this.service.save(model,this.apiName).subscribe(
      res => {
        console.log(res);
        this.Clear();
      },
      err => console.log(err)
    )
    }
   Clear()
    {
      this.field.fecha.setValue(null);
      this.field.Diagnostico.setValue(null);
      this.field.Medicamento.setValue(null);
      }  
    }
     