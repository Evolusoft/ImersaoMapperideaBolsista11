import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

const baseUrl = 'http://localhost:8080/api/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(baseUrl);
  }

  get(id: any): Observable<Pais> {
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

  findBySigla(sigla: any): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${baseUrl}?sigla=${sigla}`);
  }

  findByNome(nome: any): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${baseUrl}?nome=${nome}`);
  }
}
