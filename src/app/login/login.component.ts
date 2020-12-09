import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //providers: [DataService, LogService]
})
export class LoginComponent implements OnInit {
  usuarios : string[] = [];

  validacion = false;

  constructor(private httpService: HttpService, private logService: LogService, private dataService: DataService) { }

  iniciarSesion(usr:string, psw:string){
    if(usr != '' && psw != '')
    {
      this.httpService.getDatos().subscribe((data:Response) =>{
      this.validacion = true;
      
      for(let key in data){
        
        if(data[key].email == usr && data[key].pass == psw){
          alert('datos correctos')
          this.validacion = false;
          
        } 
      }
      if (this.validacion==true) {
        alert('Usuario y/o constraseña incorrectos')
      }
    });
    }
  }

  ngOnInit(){
    this.usuarios = this.dataService.getUsers();
  }

  onlog(valor){
    this.logService.escribirLog(valor);
  }

  //enviarForm(form){
  //  console.log(form)
  //}

}
