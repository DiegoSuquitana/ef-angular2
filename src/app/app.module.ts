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



@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent,
    VistaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService,HttpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
