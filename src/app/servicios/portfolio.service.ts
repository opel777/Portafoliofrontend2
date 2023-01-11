import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
    // return this.http.get('./assets/data/data.json'); 
    return this.http.get('https://backend-service-gustavo.onrender.com/ver/persona/1'); // aqui se reemplaza el json por la url
  } 
}


