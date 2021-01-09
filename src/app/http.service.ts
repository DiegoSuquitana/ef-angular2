import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Injectable()

export class HttpService {
subproducto: any[] = [];

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://tienda-online-efnextu.firebaseio.com/.json')
    .pipe(map((response: Response) => response.json()))
  }

  actualizarProductos() {
    return this.http.put(`https://tienda-online-efnextu.firebaseio.com/${0}.json`, {})

}
