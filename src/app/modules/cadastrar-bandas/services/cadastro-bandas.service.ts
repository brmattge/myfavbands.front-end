import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Bandas } from '../Models/cadastro-bandas.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CadastroBandasService {
  url = 'http://localhost:5001/api/CadastroBandas';

  constructor(private http: HttpClient) { }

  obterTodasBandas(): Observable<Bandas[]> {
    return this.http.get<Bandas[]>(`${this.url}`);
  }

  adicionarBanda(banda: Bandas): Observable<Bandas> {
    return this.http.post<Bandas>(`${this.url}`, banda, httpOptions);
  }
}