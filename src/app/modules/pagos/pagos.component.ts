import { Component, OnInit } from '@angular/core';
import  {FormControl} from '@angular/forms'
import  {Observable} from 'rxjs';

import { PagosModel } from 'src/app/models/PagosModel';
import{ Service } from '../../services/service'
import  {map,startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  PagosCtrl = new FormControl();
  apiNamePagos: string = 'pagos';
  listPagos : Observable<PagosModel[]>;
  pagos: PagosModel[];

  constructor(private service: Service) {
   
   }

  ngOnInit() {
    this.service.list<PagosModel>(this.apiNamePagos).subscribe(
      res => {
        this.pagos = res;
        this.listPagos = this.PagosCtrl.valueChanges
        .pipe(
        startWith(''),  
         map(item => item ? this._filterStates(item) : this.pagos.slice())
      );
      },
    err => console.log(err)
    )

  }
private _filterStates(value: string): PagosModel[] {
  const filterValue = value.toLowerCase();

  
  return this.pagos.filter(pagos =>pagos.observaciones.toLowerCase().indexOf(filterValue) === 0);

  }                                 
}
