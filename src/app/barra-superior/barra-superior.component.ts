import { Component, OnInit } from '@angular/core';
import {CarritoService} from'../carrito.service';

@Component({
  selector: 't-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private carro: CarritoService) { }

  invisible(){
    this.carro.estado = 1;
  }

  visible(){
    this.carro.estado = 0;
  }
  
  ngOnInit() {
  }

}
