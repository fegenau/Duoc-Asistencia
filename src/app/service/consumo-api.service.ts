import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { usuario } from '../modelos/usuarios';
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

  public getUserRoles(): Observable<string[]> {
    // Implementa la lógica para obtener los roles del usuario desde la base de datos.
    // Puedes hacer una solicitud HTTP para obtener los roles.
    return this.http.get<string[]>(this.url + "/getRoles", this.httpOptions);
  }
}
