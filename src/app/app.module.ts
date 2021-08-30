import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistercasoService } from './services/registercaso.service';
import { ModalmensajeComponent } from './modal/modalmensaje/modalmensaje.component';
import { ModalconfirmacionComponent } from './modal/modalconfirmacion/modalconfirmacion.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { ModalprocesoComponent } from './modal/modalproceso/modalproceso.component';
import { UserregisterComponent } from './components/userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    ModalmensajeComponent,
    ModalconfirmacionComponent,
    AdminregisterComponent,
    ModalprocesoComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    HttpClientModule
  ],
  providers: [RegistercasoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
