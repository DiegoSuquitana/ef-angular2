import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { VermasService } from '../vermas.service';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {
  
  productos: any[] = [];
  subproducto: any[] = this.httpService.subproducto;

  validacion = false;

  constructor(private verMas: VermasService, private httpService: HttpService, private router: Router, private carro: CarritoService) { }

  vermas(nombre) {

    for (var i = 0; i < this.subproducto.length; i++) {


      if (this.subproducto[i].nombre == nombre) {
        this.verMas.imagen = this.subproducto[i].imagen;
        this.verMas.nombre = this.subproducto[i].nombre;
        this.verMas.precio = this.subproducto[i].precio;
        this.verMas.stock = this.subproducto[i].stock;
      }
    }

    this.router.navigate(['/ver-mas']);
  }


  buscador(texto) {
    this.subproducto = [];
    for (var i = 0; i < this.httpService.subproducto.length; i++) {
      var cadena;
      cadena = this.httpService.subproducto[i].nombre.toLowerCase();

      if (cadena.indexOf(texto.toLowerCase()) != -1) {
        this.httpService.subproducto[i].vista = true
        this.subproducto.push(this.httpService.subproducto[i])
      } else {
        this.httpService.subproducto[i].vista = false
      }
    }
  }

  agregar(imagen, nombre, precio, stock) {
    var subtotal = precio * stock;
    var val = true;
    var pre, sub, num;
    //Actualizar stock
    for (var i = 0; i < this.subproducto.length; i++) {

      if (this.subproducto[i].nombre == nombre) {
        if (this.subproducto[i].stock <= 0) {
          alert("Producto sin Stock..");
          return (0);
        }
        this.subproducto[i].stock = this.subproducto[i].stock - stock;
      }
    }

    //Actualizar total carro    
    for (var x = 0; x < this.carro.carrito.length; x++) {

      if (this.carro.carrito[x].nombre == nombre) {

        pre = parseInt(this.carro.carrito[x].stock) + parseInt(stock)
        this.carro.carrito[x].stock = pre;
        num = this.carro.carrito[x].subtotal;
        sub = num + subtotal;
        this.carro.carrito[x].subtotal = sub;
        val = false;
        this.carro.total = this.carro.total + subtotal;
      }
    }

    if (val) {
      this.carro.carrito.push({ imagen, nombre, subtotal, stock })
      this.carro.total = this.carro.total + subtotal;
    }

  }

  ngOnInit() {

    this.httpService.getDatos().subscribe((data: Response) => {
      if (this.httpService.subproducto.length == 0) {
        for (let key in data) {
          if (data[key].tipo == 'producto' && data[key] != null) {
            //console.log(data[key])
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
