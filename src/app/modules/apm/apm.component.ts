import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service'
import {FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { AmpModel } from 'src/app/models/ampModel';
import { LaboratorioModel } from 'src/app/models/LaboratorioModel';


@Component({
  selector: 'app-apm',
  templateUrl: './apm.component.html',
  styleUrls: ['./apm.component.scss']
})
export class ApmComponent implements OnInit {
  form: FormGroup;

  apiName : string = 'apm';
  apiNamelaboratorio: string= 'laboratorio';
  list : AmpModel[];
  listLaboratorio:LaboratorioModel[];
  ampmodel : AmpModel;
  get field() { return this.form.controls; }


  constructor(private formBuilder: FormBuilder,private service: Service) { }


  ngOnInit()
  {
    this.form = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required], 
      DNI: ['', Validators.required],
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
  

   this.service.list<LaboratorioModel>(this.apiNamelaboratorio).subscribe(
    res => {
      console.log(res);
      this.listLaboratorio = res;
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
    get DNI() {
    return this.form.value.DNI;
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
    Nombre: this.field.Nombre.value,
    Apellido: this.field.Apellido.value,
    DNI: this.field.DNI.value,
    Celular: this.field.Celular.value,
    Email: this.field.Email.value,
    Medicamento: this.field.Medicamento.value,
    Laboratorio: this.field.Laboratorio.value,
    }
 
    this.service.save(model,this.apiName ).subscribe(
      res => {
      console.log(res);
      this.Clear();
    },
    err => console.log(err)
  )
}
Clear()   
{
  this.field.Nombre.setValue(null);
  this.field.Apellido.setValue(null);
  this.field.DNI.setValue(null);
  this.field.Celular.setValue(null);
  this.field.Email.setValue(null);
  this.field.Medicamento.setValue(null);
  this.field.Laboratorio.setValue(null);
}
}
