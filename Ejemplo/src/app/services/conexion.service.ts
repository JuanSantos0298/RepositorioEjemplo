import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//Observable nos ayuda a trabajar en tiempo real con la base de datos (colecciones)
import { Observable } from 'rxjs';
//Se agrega el import firebase ya que nos permite llamar a la base de datos 
import 'firebase/firestore';

//Importamos la interface de item
export interface Item { name: string; }


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  //revisara la coleccion items 
  private itemsCollection: AngularFirestoreCollection<Item>;
  //observable para los cambios en tiempo real 
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = 
    this.itemsCollection.valueChanges();
  }

    //retornaremos los items
    retornaItems(){
      return this.items;
    }

   /* 
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
  */

 
  
}
