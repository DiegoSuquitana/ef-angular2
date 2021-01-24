import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../carrito.service';
import {Router} from '@angular/router'
import { HttpService } from '../http.service';
import {VermasService} from '../vermas.service';
//import {FirebaseServiceService} from '../services/firebase-service.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  config : any;
  collection =  {count: 60, data:[]};

  public car: any[]=[];
  public total;

  constructor(private carro: CarritoService, 
    private router: Router, 
    private httpService: HttpService,  
    private verMas: VermasService
  //  private FirebaseService: FirebaseServiceService
    ) { }

  cancelar(){
    this.router.navigate(['/vista-principal']);
    this.carro.estado = 0;
  }

  pagar(nombre){
   
    this.car = [];
    this.carro.carrito = [];
    this.router.navigate(['/vista-principal']);
    this.carro.estado = 0;
    this.carro.total=0;
    console.log(nombre[0].nombre);
    console.log(nombre);
    
    this.httpService.actualizarProductos(nombre);
    //this.httpService.updateFood(nombre);
  }

  ngOnInit() {
    this.car = this.carro.carrito;
    this.total = this.carro.total;
  }

}
