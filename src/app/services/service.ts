import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  list<T>(apiName: string) {
    return this.http.get<T[]>(`${this.API_URI}/${apiName}`);
  }

  get(id: string,apiName: string) {
    return this.http.get(`${this.API_URI}/${apiName}/${id}`);
  }

  delete(id: string ,apiName: string) {
    return this.http.delete(`${this.API_URI}/${apiName}/${id}`);
  }

  save(game: any ,apiName: string) {
    return this.http.post(`${this.API_URI}/${apiName}`, game);
  }

  update(id: string|number, update: any ,apiName: string): Observable<any> {
    return this.http.put(`${this.API_URI}/${apiName}/${id}`, update);
  }

}
