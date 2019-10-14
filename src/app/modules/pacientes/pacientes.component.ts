import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/models/personaModel';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  apiName : string = 'persona';
  list : PersonaModel[];

  constructor(private service: Service) { }
  ngOnInit() {
     this.service.list<PersonaModel>(this.apiName).subscribe(
      res => {
        console.log(res);
        this.list = res;
      },
      err => console.log(err)
    )
  }

}
