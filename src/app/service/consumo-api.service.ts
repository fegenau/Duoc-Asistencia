import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { usuario } from '../modelos/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }

  constructor(private http:HttpClient) { }

  url:string = 'http://127.0.0.1:5000/api/persona/';

  public login(usuario:string, contraseña: string): Observable<HttpResponse<usuario>> {
    const body = {
      usuario: usuario,
      password : contraseña,
    };
    return this.http.post<usuario>(this.url + "login",body, {...this.httpOptions, observe: 'response'});
  }
  
}