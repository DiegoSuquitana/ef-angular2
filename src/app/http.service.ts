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
      console.log("subproductp");
      console.log(this.subproducto);
      

      //this.http.patch(`https://tienda-online-efnextu.firebaseio.com/producto1.json`,JSON.stringify(this.subproducto)).subscribe(()=>{
      this.http.put('https://tienda-online-efnextu.firebaseio.com/producto/.json', JSON.stringify(this.subproducto)).subscribe(()=>{

      
      alert ("actualizado");

      })
    
  }

/*
  actualizarProductos(data: any){
    const datos = JSON.stringify(data);
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/.json', datos).map((response:Response)=> response.json());

  }
*/
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


  /*
  actualizarProductos(nombre) {

    console.log(nombre[0].nombre);
    //return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', nombre);
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', JSON.stringify({
      id:3,
      imagen: "./carpeta/imagen.jpg",
      nombre: "usuario1",
      precio: 50,
      stock: 40,
      tipo: "producto"
    }), {
      headers: new Headers({'Content-Type': 'application/json'})
    }).map(res => res.json());

  }

*/

/*
    updateFood(nombre) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      //let body = JSON.stringify(nombre);
      let body = JSON.stringify({
        id:3,
        imagen: "./carpeta/imagen.jpg",
        nombre: "usuario1",
        precio: 50,
        stock: 40,
        tipo: "producto"
      });
      console.log(nombre);
      return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1', body, options ).map((res: Response) => res.json());
    }
*/

/*
    return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', JSON.stringify(nombre), {
      headers: new Headers({'Content-Type': 'application/json'})
    }).map(res => res.json());
*/

}
