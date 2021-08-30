import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Caso } from '../model/caso';
import { Respuesta } from '../model/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RegistercasoService {

  ulrRegisterCaso = "https://2a80rap084.execute-api.us-east-2.amazonaws.com/dev/PQR/api/v1/registarCaso";
  urlConsultarCasos = "https://2a80rap084.execute-api.us-east-2.amazonaws.com/dev/PQR/api/v1/listarCasos";
  ulrRegisterRespuesta = "https://2a80rap084.execute-api.us-east-2.amazonaws.com/dev/PQR/api/v1/registrarRespuesta";
  urlConsultarRespuesta = "https://2a80rap084.execute-api.us-east-2.amazonaws.com/dev/PQR/api/v1/listarRespuesta";

  constructor(private httpClient: HttpClient) { }

  async RegisterCaso(id, caso, identificacion, nombre, direccion, telefono, email, mensaje): Promise<any> {
    let request = new Caso(id, caso, identificacion, nombre, direccion, telefono, email, mensaje);
    return new Promise((resolve, reject) => {
      const promise = this.httpClient.post(this.ulrRegisterCaso, JSON.stringify(request), {headers: new HttpHeaders()
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

  async RegisterRespuesta(id, idRegister, respuestaAdmin, respuestaUser, mensaje): Promise<any> {
    let request = new Respuesta(id, idRegister, respuestaAdmin, respuestaUser, mensaje);
    return new Promise((resolve, reject) => {
      const promise = this.httpClient.post(this.ulrRegisterRespuesta, JSON.stringify(request), {headers: new HttpHeaders()
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

  async ConsultarCasos(): Promise<any> {
    return new Promise((resolve, reject) => {
      const promise = this.httpClient.get(this.urlConsultarCasos, {headers: new HttpHeaders()
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

  async ConsultarRespuestas(id: string): Promise<any> {
    let params = new HttpParams().set('IdRegister', id);
    return new Promise((resolve, reject) => {
      const promise = this.httpClient.get(this.urlConsultarRespuesta, { params: params })
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
