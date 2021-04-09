import { Component, OnInit } from '@angular/core';

//Importamos la conexion a la coleccion en Firebase 
//Uso de CRTL + ESPACIO para importar la clase que hemos de usar 
import {ConexionService} from '../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Creamos una variable que almacene todos los objetos que le pasemos
  items:any

  //Dentro del constructor llamaremos a nuestro servicio de la conexion 
  constructor(private con: ConexionService) {
      //le pasamos la funcion de retorno de items   
      this.con.retornaItems().subscribe(items=>{
        this.items=items;
        console.log(this.items);
      })
   }

  ngOnInit(): void {
  }

}
