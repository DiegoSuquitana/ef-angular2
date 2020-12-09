import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';
@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://tienda-online-efnextu.firebaseio.com/.json')
    .pipe(map((response: Response) => response.json()))
  }

}