import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Caso } from '../model/caso';

@Injectable({
  providedIn: 'root'
})
export class RegistercasoService {

  ulr = "https://2a80rap084.execute-api.us-east-2.amazonaws.com/dev/PQR/api/v1/registarCaso";
  constructor(private httpClient: HttpClient) { }

  async RegisterCaso(id, caso, identificacion, nombre, direccion, telefono, email, mensaje): Promise<any> {
    let request = new Caso(id, caso, identificacion, nombre, direccion, telefono, email, mensaje);
    return new Promise((resolve, reject) => {
      const promise = this.httpClient.post(this.ulr, JSON.stringify(request), {headers: new HttpHeaders()
        .set('Content-Type', 'application/json')})
        .toPromise()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
