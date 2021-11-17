import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../services/service'
import { ObraSocialModel } from 'src/app/models/obraSocialModel';

@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.scss']
})
export class ObraSocialComponent implements OnInit {
  form: FormGroup;
  apiName : string = 'obrasocial';

  list : ObraSocialModel[];
  get field() { return this.form.controls; }

  constructor(private formBuilder: FormBuilder,private service: Service){ }
  ngOnInit() {
    this.form = this.formBuilder.group({
    Fecha: ['', Validators.required],
    Diagnostico: ['', Validators.required],
    Medicamento: ['', Validators.required],
    }); 
      
    this.service.list<ObraSocialModel>(this.apiName).subscribe(
      res => {
        console.log(res);
        this.list = res;
      },
      err => console.log(err)
    )
  
    }
  get fecha() {
    return this.form.value.fecha;
  }
  
  get Diagnostico() {
  return this.form.value.Diagnostico;
  }
  get Medicamneto() {
  return this.form.value.Medicamento;
  }
  Save()
  {
    const model = 
    {
      Fecha: this.field.Fecha.value,
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
