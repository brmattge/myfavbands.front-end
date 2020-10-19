import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Bandas } from './cadastro-bandas.model'

@Injectable()
export class CadastroBandasService {

  url = 'https://localhost:5001/api/CadastroBandas';

  constructor(private http: HttpClient) { }

  obterTodasBandas(): Observable<Bandas[]> {  
    return this.http.get<Bandas[]>(`${this.url}`);  
  }  

  adicionarBanda(aluno: Bandas): Observable<Bandas> {  
    return this.http.post<Bandas>(`${this.url}`, aluno);  
  }  
}