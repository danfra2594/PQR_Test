import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistercasoService } from '../../services/registercaso.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-modalproceso',
  templateUrl: './modalproceso.component.html',
})
export class ModalprocesoComponent  {

  respuestaAdmin: string;
  respuestaUser: string;
  lstResp: any[];
  areaAdmin = true;
  areaUser = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {item: any, origen: string}, private toastr: ToastrService,
  private registercasoService: RegistercasoService) { 
    console.log(this.data.origen);
    this.respuestaAdmin = '';
    this.respuestaUser = '';
    if(this.data.origen == 'ADMIN')
      this.areaAdmin = false;
    else if(this.data.origen == 'USER')
      this.areaUser = false;
    this.consularRespuestas();
  }

  async registrarRespuestaAdmin() {
    if(this.respuestaAdmin == null || this.respuestaAdmin == '')
      this.toastr.warning('Debe ingresar la respuesta del admin', 'Advertencia');
    else {
      const id = Math.floor(Math.random() * 999999) + 1;
      await this.registercasoService.RegisterRespuesta(id, this.data.item.id, true, false, this.respuestaAdmin).then((data) => {
        this.toastr.success('Se ha registrado la respuesta del administrador al caso', 'información');
        this.areaAdmin = true;
      })
      .catch((error) => {
        this.toastr.error(error);
      });
    }
  }

  async registrarRespuestaUser() {
    if(this.respuestaAdmin == null || this.respuestaAdmin == '') {
      this.toastr.warning('Aún no ha habiado respuesta del administrador o el tiempo no se ha cumplido para responder', 'Advertencia');
    } else{
      if(this.respuestaUser == null || this.respuestaUser == '')
        this.toastr.warning('Debe ingresar la respuesta del usuario', 'Advertencia');
      else {
        const id = Math.floor(Math.random() * 999999) + 1;
        await this.registercasoService.RegisterRespuesta(id, this.data.item.id, false, true, this.respuestaUser).then((data) => {
          this.toastr.success('Se ha registrado la respuesta de usuario al caso', 'información');
          this.areaUser = true;
        })
        .catch((error) => {
          this.toastr.error(error);
        });
      }
    }
  }

  async consularRespuestas(){
    this.toastr.info('Validando las respuestas del caso', 'Info');
    await this.registercasoService.ConsultarRespuestas(this.data.item.id).then((data) => {

      this.lstResp = JSON.parse(data);
      let itemRespAdmin = this.lstResp.filter(x => x.idRegister == this.data.item.id 
        && x.respuestaAdmin == true)[0];
      if(itemRespAdmin != null){
        this.respuestaAdmin = itemRespAdmin.mensaje;
        this.areaAdmin = true;
      }else {
        this.areaUser = true;
        this.toastr.warning('No hay respuesta del administrador aún', 'Info');
      }

      let itemRespUser = this.lstResp.filter(x => x.idRegister == this.data.item.id 
        && x.respuestaUser == true)[0];
      if(itemRespUser != null){
        this.respuestaUser = itemRespUser.mensaje;
        this.areaUser = true;
      }else
        this.toastr.warning('No hay respuesta del usuario aún', 'Info');
    })
    .catch((error) => {
      this.toastr.error(error);
    });

  }

}
