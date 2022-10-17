import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from '../models/cidade.model';

const baseUrl = 'http://localhost:8080/api/cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(baseUrl);
  }

  get(id: any): Observable<Cidade> {
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

  findByUf(uf: any): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${baseUrl}?uf=${uf}`);
  }

  findByNome(nome: any): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${baseUrl}?nome=${nome}`);
  }
}
