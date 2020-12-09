import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http.service';
import { LogService } from './log.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService,HttpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
