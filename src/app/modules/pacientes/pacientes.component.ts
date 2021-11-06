import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/models/personaModel';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  form: FormGroup;
  apiName : string = 'persona';
  list : PersonaModel[];
  personamodel : PersonaModel;
  get field() { return this.form.controls; }

  constructor(private formBuilder: FormBuilder,private service: Service) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Tel: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      DNI: ['', Validators.required],
      Direccion: ['', Validators.required],
      Email: ['', Validators.required],
      Celular: ['', Validators.required]
  });

     this.service.list<PersonaModel>(this.apiName).subscribe(
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
  get Tel() {
    return this.form.value.Tel;
  }
  get FechaNacimiento() {
    return this.form.value.FechaNacimiento;
  }
  get DNI() {
    return this.form.value.DNI;
  }
  get Direccion() {
    return this.form.value.Direccion;
  }
  get Email() {
    return this.form.value.Email;
  }
  get Celular() {
    return this.form.value.Celular;
  }
  
  Save()
  {
    const model = 
    {
      Nombre: this.field.Nombre.value,
      Apellido: this.field.Apellido.value,
      Tel: this.field.Tel.value,
      FechaNacimiento: this.field.FechaNacimiento.value,
      DNI: this.field.DNI.value,
      Direccion: this.field.Direccion.value,
      Email: this.field.Email.value,  
      Celular: this.field.Celular.value,  
    } 
    this.service.save(model,this.apiName).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
