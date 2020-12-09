import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {

  private usuario: string[] = [];

  constructor(private logService: LogService, private httpService : HttpService) { }

  //loginForm= this.fb.group({})

  getUsers(){
    this.httpService.getDatos()
    .subscribe(
      (data: Response) => console.log(data)
      /*(data: Response) => {
        for(let key in data){
          this.usuario.push(data[key].email);
          
        }
      }*/
    )
    return this.usuario;

  }

}
