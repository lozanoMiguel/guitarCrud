import { Injectable } from '@angular/core';

//importamos modulos para trabajar con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//modelo
import { Guitars } from './guitars.model';

@Injectable({
  providedIn: 'root'
})
export class GuitarServiceService {

  constructor(private angularFirestore:AngularFirestore) { }

  getGuitars(){
    return this.angularFirestore
      .collection("guitars")
      .snapshotChanges();
  }

  getGuitarById(id){
    return this.angularFirestore
    .collection("guitars")
    .doc(id)
    .valueChanges()
  }

  createGuitar(guitar:Guitars){
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
      .collection("guitars")
      .add(guitar)
      .then((response) =>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  updateGuitar(guitar:Guitars, id){
    return this.angularFirestore
      .collection("guitars")
      .doc(id)
      .update({
        type: guitar.type,
        brand: guitar.brand,
        model: guitar.model
      })
  }

  deleteGuitar(guitar){
    return this.angularFirestore
      .collection("guitars")
      .doc(guitar)
      .delete()

  }
}
