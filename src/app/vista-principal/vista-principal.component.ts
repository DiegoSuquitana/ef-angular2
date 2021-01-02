import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  productos: any[]=[];
  subproducto: any[] = this.httpService.subproducto;

  constructor(private router:Router, private httpService: HttpService) { }


  buscador(texto){
    this.subproducto = [];
    for(var i=0; i<this.httpService.subproducto.length; i++){
      var cadena;
      cadena = this.httpService.subproducto[i].nombre;
      
      if(cadena.indexOf(texto)!=-1){
        this.httpService.subproducto[i].vista = true
        this.subproducto.push(this.httpService.subproducto[i])
      }else{
        this.httpService.subproducto[i].vista = false
      }
    }
  }

  
  ngOnInit() {

    this.httpService.getDatos().subscribe((data: Response)=>{
     if(this.httpService.subproducto.length==0){
      for(let key in data){
        if(data[key].tipo == 'producto' && data[key]!=null){
          console.log(data[key])
          this.productos.push(data[key]);
          
        }
        
      }
        
        this.subproducto = this.productos;
        this.httpService.subproducto = this.subproducto;
        
      
      }
    }
    )
 
  }

}
