import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Service {

  API_URI = `${environment.apiUrl}`;

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

  save(model: any ,apiName: string) {
    return this.http.post(`${this.API_URI}/${apiName}`, model);
  }

  update(id: string|number, update: any ,apiName: string): Observable<any> {
    return this.http.put(`${this.API_URI}/${apiName}/${id}`, update);
  }
}