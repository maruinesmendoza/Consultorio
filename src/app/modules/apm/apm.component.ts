import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service'
import {FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { AmpModel } from 'src/app/models/ampModel';

@Component({
  selector: 'app-apm',
  templateUrl: './apm.component.html',
  styleUrls: ['./apm.component.scss']
})
export class ApmComponent implements OnInit {
  form: FormGroup;
  selector: 'app-apm';
  apiName : string = 'apm';
  list : AmpModel[];
  ampmodel : AmpModel;
  get field() { return this.form.controls; }

  constructor(private formBuilder: FormBuilder,private service: Service) { }
  

  ngOnInit()
  {
    this.form = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Direccion: ['', Validators.required],
      Celular:['', Validators.required],
      Email:['', Validators.required],
      Medicamento:['', Validators.required],
      Laboratorio:['', Validators.required],
    });

  this.service.list<AmpModel>(this.apiName).subscribe(
    res => {
      console.log(res);
      this.list = res;
    },
    err => console.log(err)
  )
  }

    get Nombre() {
    return this.form.value.Nombre;
    }

    get Apellido() {
    return this.form.value.Apellido;
    }
    get Direccion() {
    return this.form.value.Direccion;
    }
    get Celular() {
    return this.form.value.Celular;
    }

  get Email() {
  return this.form.value.Email;
  }
  get Medicamento() {
  return this.form.value.Medicamento;
  }
  get Laboratorio(){
    return this.form.value.Laboratorio;
  }

Save()
{
  const model = 
  {
    Nombre: this.field.nombre.value,
    Apellido: this.field.Apellido.value,
    Direccion: this.field.Direccion.value,
    celular: this.field.celular.value,
    Email: this.field.Email.value,
    Medicamento: this.field.Medicamento.value,
    Laboratorio: this.field.Laboratorio.value,
  }
 
  this.service.save(model,this.apiName ).subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  )
}
}
