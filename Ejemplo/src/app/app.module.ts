import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';


//Aqui importaremos algunos paquetes de la libreria que nos ayudaran a la conexion de la base de datos
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//Importamos estas librerias para enviar la informacion a Google Analytics y la conexion de firestore para nuestra base en particular
//Son servicios 
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    AgregarComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //llamamos a las librerias que necesitamos de la importacion
    AngularFireModule.initializeApp(environment.firebase),
    //llamamos a las librerias de nuestros servicios 
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
