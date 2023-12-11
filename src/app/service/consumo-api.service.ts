import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../modelos/usuarios';
import { asignatura } from '../modelos/asignatura';


@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:5000/api/persona';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  public login(usuario: string, contrasena: string): Observable<HttpResponse<usuario>> {
    const body = {
      usuario: usuario,
      password: contrasena,
    };
    return this.http.post<usuario>(`${this.url}/login`, body, { ...this.httpOptions, observe: 'response' });
  };

  // Método para consultar una asignatura por su sigla
  getAsignatura(sigla: string): Observable<any> {
    // Construye la URL completa con la sigla
    const url = `${this.url}/${sigla}`;

    // Realiza la solicitud GET a la API
  return this.http.get(url);
  };
  //metodo para registrar asistencia con nombre de alumno
  public registrarAsistenciaAlumno(nombre_alumno:string,sigla:string){
    const body = {
      nombre: nombre_alumno,
      sigla: sigla,
    };
    return this.http.post(`${this.url}/asistencia`, body, this.httpOptions);
  };

  //metodo para obtener asistencia
  public getAsistencia(sigla:string): Observable<any>{
    const url = `${this.url}/asistencia/${sigla}`;
    return this.http.get(url);
  };
};
  
