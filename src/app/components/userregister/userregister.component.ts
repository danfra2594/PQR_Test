import { Component, OnInit } from '@angular/core';
import { RegistercasoService } from '../../services/registercaso.service';
import { ToastrService } from 'ngx-toastr';
import { Caso } from '../../model/caso';
import { MatDialog } from '@angular/material/dialog';
import { ModalprocesoComponent } from '../../modal/modalproceso/modalproceso.component';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  lstCaso: any[];
  modalpro: any;
  constructor(private toastr: ToastrService, private registercasoService: RegistercasoService,
    public dialog: MatDialog) { }

    ngOnInit(): void {
      this.consultarCasos();
    }
  
    async consultarCasos(){
      await this.registercasoService.ConsultarCasos().then((data) => {
        this.lstCaso = JSON.parse(data);
      })
      .catch((error) => {
        this.toastr.error(error);
      });
    }
  
    verDetalle(id: number){
      let item = this.lstCaso.filter(x => x.id == id)[0];
      this.modalpro = this.dialog.open(ModalprocesoComponent, {
        width: '80%',
        height: '80%',
        data: { item: item, origen: 'USER' }
      });
  
    }

}
