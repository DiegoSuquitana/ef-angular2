import { Injectable } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';

@Injectable()
export class FirebaseServiceService {

  constructor(
    //private firestore
  ) { }
/*
  getProductos(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  createProductos(producto:any){
    return this.firestore.collection('productos').add(producto);
  }

  updateProductos(id:any, producto:any){
    return this.firestore.collection('productos').doc(id).update(producto);
  }

  deleteProductos(id:any){
    return this.firestore.collection('productos').doc(id).delete();
  }
  */
}
