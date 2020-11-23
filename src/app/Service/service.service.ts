import { Injectable } from '@angular/core';

// El importe HttpClient tuve que hacerlo a mano.
import { HttpClient } from '@angular/common/http';
import { Cancion } from '../Modelo/cancion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Para hacer la conexión al backend necesitamos hacer uso de la herramienta HttpClient.
  constructor(private http: HttpClient) { }

  url = 'http://localhost:1000/angularParcial3';

  getCanciones(){
    return this.http.get<Cancion[]>(this.url + '/canciones');
  }

  postCancion(cancion: Cancion){
    return this.http.post<Cancion>(this.url + '/add', cancion);
  }

  getCancion(id: number){
    return this.http.get<Cancion>(this.url + '/' + id);
  }

  putCancion(cancion: Cancion, id:number){
    return this.http.put<Cancion>(this.url + '/put/' + id, cancion);
  }

  deleteCancion(id: number){
    return this.http.delete<Cancion>(this.url + '/delete/' + id);
  }

}
