import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modalmensaje',
  templateUrl: './modalmensaje.component.html'
})
export class ModalmensajeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {mensaje: string}) { }

}
