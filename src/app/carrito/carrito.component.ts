import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../carrito.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  car: any[]=[];
  public total;


  constructor(private carro: CarritoService, private router: Router) { }

  cancelar(){
    this.router.navigate(['/vista-principal']);
    this.carro.estado = 0;
  }

  pagar(){
    this.car = [];
    this.carro.carrito = [];
    this.router.navigate(['/vista-principal']);
    this.carro.estado = 0;
    this.carro.total=0;
  }

  ngOnInit() {
    this.car = this.carro.carrito;
    this.total = this.carro.total;
  }

}
