import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {CarritoService} from './carrito.service';

@Injectable()

export class HttpService {
subproducto: any[] = [];

  constructor(private http : Http, private carrito : CarritoService) { }

  getDatos(){
    return this.http.get('https://tienda-online-efnextu.firebaseio.com/.json')
    .pipe(map((response: Response) => response.json()))
  }
/*
  actualizarProductos(nombre) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(nombre);
    //return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', nombre);
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', JSON.stringify({
      imagen:"./carpeta/imagen.jpg",
      nombre:"usuario1",
      precio:50,
      stock:40,
      tipo:"producto"
    }),{headers: headers}).map(res => res.json());

  }*/

  actualizarProductos(nombre) {

    console.log(nombre);
    //return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', nombre);
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', JSON.stringify({
      imagen: "./carpeta/imagen.jpg",
      nombre: "usuario1",
      precio: 50,
      stock: 40,
      tipo: "producto"
    }), {
      headers: new Headers({'Content-Type': 'application/json'})
    }).map(res => res.json());
/*
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', JSON.stringify(nombre), {
      headers: new Headers({'Content-Type': 'application/json'})
    }).map(res => res.json());
*/
  }
}
