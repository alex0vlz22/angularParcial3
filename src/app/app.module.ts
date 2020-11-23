import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BotonesComponent } from './Components/botones/botones.component';
import { ListarComponent } from './Cancion/listar/listar.component';
import { AgregarComponent } from './Cancion/agregar/agregar.component';
import { EditarComponent } from './Cancion/editar/editar.component';

import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BotonesComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
