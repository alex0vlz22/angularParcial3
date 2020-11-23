import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/Modelo/cancion';
import {ServiceService} from '../../Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cancion: Cancion;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cancion = new Cancion();
  }

  guardar(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.service.postCancion(this.cancion)
    .subscribe(data=>{

      Swal.fire(
        '¡Hecho!',
        'La canción ha sido registrada exitósamente.',
        'success'
      )
      
      this.router.navigateByUrl('listar');
    })
  }

}
