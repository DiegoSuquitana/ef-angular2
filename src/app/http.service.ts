import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {CarritoService} from './carrito.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable()

export class HttpService {
subproducto: any[] = [];

  constructor(private http : Http, private carrito : CarritoService) { }

  getDatos(){
    return this.http.get('https://tienda-online-efnextu.firebaseio.com/producto/.json')
    .pipe(map((response: Response) => response.json()))
  }

  getDatosUser(){
    return this.http.get('https://tienda-online-efnextu.firebaseio.com/usuario/.json')
    .pipe(map((response: Response) => response.json()))
  }

  actualizarProductos(nombre){
      this.http.put('https://tienda-online-efnextu.firebaseio.com/producto/.json', JSON.stringify(this.subproducto)).subscribe(()=>{
      alert ("Compra Realizada");
      })
    
  }

}
