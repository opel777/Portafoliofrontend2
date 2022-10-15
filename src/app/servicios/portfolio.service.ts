import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
    return this.http.get('assets/da/da.json');  // aqui se reemplaza el json por la url
  } 
}
