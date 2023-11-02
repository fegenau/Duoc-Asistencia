import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { usuario } from '../modelos/usuarios';
import { asignatura } from '../modelos/asignatura';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }

  constructor(private http:HttpClient) { }

  url:string = 'http://127.0.0.1:5000/api/persona';

  public login(usuario:string, contrasena: string): Observable<HttpResponse<usuario>> {
    const body = {
      usuario: usuario,
      password : contrasena,
    };
    return this.http.post<usuario>(this.url + "/login",body, {...this.httpOptions, observe: 'response'});
  }

  public asignatura(id:string): Observable<HttpResponse<asignatura>> {
    const params = new HttpParams().set('id', id);
    return this.http.get<asignatura>(this.url + "/asignatura", { params, ...this.httpOptions, observe: 'response' });
  }
}