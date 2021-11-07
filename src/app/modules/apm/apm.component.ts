import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service'
import { AmpModel } from 'src/app/models/ampModel';

@Component({
  selector: 'app-apm',
  templateUrl: './apm.component.html',
  styleUrls: ['./apm.component.scss']
})
export class ApmComponent implements OnInit {
  selector: 'app-apm';
  apiName : string = 'apm';
  list : AmpModel[];

  constructor(private service: Service) { }
  

  ngOnInit()
  {
  this.service.list<AmpModel>(this.apiName).subscribe(
    res => {
      console.log(res);
      this.list = res;
    },
    err => console.log(err)
  )
  }
}


