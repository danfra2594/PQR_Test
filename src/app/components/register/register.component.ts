import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalmensajeComponent } from 'src/app/modal/modalmensaje/modalmensaje.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalconfirmacionComponent } from '../../modal/modalconfirmacion/modalconfirmacion.component';
import { RegistercasoService } from '../../services/registercaso.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  opcion: string;
  numeroidentifiacion: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  mensaje: string;
  modalMen: any;
  modalConf: any;

  listaOpciones:string[] = [
    'Petición',
    'Queja',
    'Reclamo'
  ]
  constructor(private toastr: ToastrService, private registercasoService: RegistercasoService, 
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  async registrar(){
    if(this.opcion == null || this.opcion == '')
      this.toastr.warning('Debe seleccionar una opción para el caso', 'Advertencia');
    else if(this.numeroidentifiacion == null)
      this.toastr.warning('Debe ingresar un número de documento para el caso', 'Advertencia');
    else if(this.nombre == null || this.nombre == '')
      this.toastr.warning('Debe ingresar un nombre para el caso', 'Advertencia');
    else if(this.direccion == null || this.direccion == '')
      this.toastr.warning('Debe ingresar una dirección para el caso', 'Advertencia');
    else if(this.telefono == null || this.telefono == '')
      this.toastr.warning('Debe ingresar un teléfono para el caso', 'Advertencia');
    else if(this.email == null || this.email == '')
      this.toastr.warning('Debe ingresar un email para el caso', 'Advertencia');
    else if(this.mensaje == null || this.mensaje == '')
      this.toastr.warning('Debe ingresar detalle para el caso', 'Advertencia');
    else {
      const id = Math.floor(Math.random() * 99999) + 1;
      this.openDialog('Procesando información', 'MENSAJE');
      await this.registercasoService.RegisterCaso(id, this.opcion, this.numeroidentifiacion,
        this.nombre, this.direccion, this.telefono, this.email, this.mensaje).then((data) => {
          this.closedDialog('MENSAJE');
          this.limpiar();
          this.openDialog(id.toString(), 'CONFIRMACION');
      })
      .catch((error) => {
        this.closedDialog('MENSAJE');
        this.toastr.error(error);
      });
    }
  }

  openDialog(mensaje: string, opcion: string) {
    if(opcion == "MENSAJE"){
      this.modalMen = this.dialog.open(ModalmensajeComponent, {
        disableClose: true,
        panelClass: ['md:w-3/5', 'w-full'],
        maxHeight: '85vh',
        data: { mensaje: mensaje }
      });
    }
    else if(opcion == "CONFIRMACION"){
      this.modalConf = this.dialog.open(ModalconfirmacionComponent, {
        disableClose: true,
        panelClass: ['md:w-3/5', 'w-full'],
        maxHeight: '85vh',
        data: { mensaje: mensaje }
      });
    }
  }

  closedDialog(opcion: string){
    if(opcion == "MENSAJE"){
      this.modalMen.close();
    }
    else if(opcion == "CONFIRMACION"){
      this.modalConf.close();
    }   
  }

  limpiar(){
    this.opcion = '';
    this.numeroidentifiacion = null;
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.email = '';
    this.mensaje = '';
  }
}
