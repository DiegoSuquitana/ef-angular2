import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { LogService } from './log.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { VermasService } from './vermas.service';
import { CarritoService } from './carrito.service';
import { CarritoComponent } from './carrito/carrito.component';

//import { AngularFireModule } from '@angular/fire';
//import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent,
    VistaPrincipalComponent,
    VerMasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LogService,HttpService,DataService,VermasService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
