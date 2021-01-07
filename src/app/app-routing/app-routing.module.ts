import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { VistaPrincipalComponent } from '../vista-principal/vista-principal.component';
import { VerMasComponent } from 'app/ver-mas/ver-mas.component';
import { CarritoComponent } from '../carrito/carrito.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'vista-principal', component: VistaPrincipalComponent},
  {path: 'ver-mas', component: VerMasComponent},
  {path: 'carrito', component: CarritoComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
