import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bairro } from '../models/bairro.model';

const baseUrl = 'http://localhost:8080/api/bairros';

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bairro[]> {
    return this.http.get<Bairro[]>(baseUrl);
  }

  get(id: any): Observable<Bairro> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
