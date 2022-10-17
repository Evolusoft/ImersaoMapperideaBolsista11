import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadeFederativa } from '../models/unidade-federativa.model';

const baseUrl = 'http://localhost:8080/api/unidadesFederativa';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(baseUrl);
  }

  get(id: any): Observable<UnidadeFederativa> {
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
