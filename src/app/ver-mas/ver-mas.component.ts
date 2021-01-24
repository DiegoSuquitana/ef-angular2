import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VermasService} from '../vermas.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  ide = this.verMas.id;
  imagen = this.verMas.imagen;
  nombre = this.verMas.nombre;
  precio = this.verMas.precio;
  stock = this.verMas.stock;

  constructor(private router:Router, private verMas: VermasService) { }

  atras(){
    this.router.navigate(['/vista-principal']);
  }

  ngOnInit() {
  }

}
