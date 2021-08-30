import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { UserregisterComponent } from './components/userregister/userregister.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminregisterComponent},
  {path: 'user', component: UserregisterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
