import { Component } from '@angular/core';
//Importamos las librerias que seran necesarias para implementar Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'Ejemplo';
 //Se creara una tabla llamada items 
 items: Observable<any[]>;
 constructor(firestore: AngularFirestore) {
   this.items = firestore.collection('items').valueChanges();
 }
}
