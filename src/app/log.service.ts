/*
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

}
*/
export class LogService {

  escribirLog(mensaje: string){
    console.log(mensaje);
  }

}