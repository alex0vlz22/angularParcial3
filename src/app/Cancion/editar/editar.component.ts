import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/Modelo/cancion';
import { ServiceService } from 'src/app/Service/service.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  id: String;
  cancion:Cancion = new Cancion();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.service.getCancion(+Number(this.id))
    .subscribe(data =>{
      this.cancion = data;
    })
  }

  modificar(form: NgForm){
    if(form.invalid){
      return;
    }
    this.service.putCancion(this.cancion, Number(this.id))
    .subscribe(data =>{
      Swal.fire(
        '¡Hecho!',
        'Los cambios han sido guardados.',
        'success'
      );
      localStorage.removeItem("id");
      this.router.navigateByUrl('listar');
    }, err => {
      Swal.fire(
        'Error',
        'Algo ocurrió modificando la canción.',
        'error'
      );
    })
  }

}
