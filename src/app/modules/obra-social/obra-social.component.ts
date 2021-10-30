import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service'
import { ObraSocialModel } from 'src/app/models/obraSocialModel';

@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.scss']
})
export class ObraSocialComponent implements OnInit {

  apiName : string = 'obrasocial';
  list : ObraSocialModel[];

  constructor(private service: Service) { }
  ngOnInit() {
     this.service.list<ObraSocialModel>(this.apiName).subscribe(
      res => {
        console.log(res);
        this.list = res;
      },
      err => console.log(err)
    )
  }
}

