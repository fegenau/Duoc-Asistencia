import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { usuario } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  constructor(private http:HttpClient) { }

  url:string = 'http://127.0.0.1:5000/api/';

  public GetAllUser(){
    return this.http.get<usuario[]>(this.url+'persona/');
  }

  public GetOneUser(){
    return this.http.get<usuario [] >(this.url+usuario);
  }
}