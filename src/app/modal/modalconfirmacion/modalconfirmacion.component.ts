import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modalconfirmacion',
  templateUrl: './modalconfirmacion.component.html'
})
export class ModalconfirmacionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {mensaje: string}) { }

}
