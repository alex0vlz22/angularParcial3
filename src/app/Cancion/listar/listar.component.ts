import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/Modelo/cancion';
import { ServiceService } from '../../Service/service.service';

import Swal from 'sweetalert2';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  canciones: Cancion[];

  constructor(private service: ServiceService, private router: Router, @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
    this.service.getCanciones()
      .subscribe(data => {
        this.canciones = data;
      })
  }

  edit(id: number) {
    localStorage.setItem("id", id.toString());
    this.router.navigateByUrl('editar');
  }

  delete(id: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Este cambio no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteCancion(id).subscribe(data => {
          this._document.defaultView.location.reload();
        }, (err) => {
          Swal.fire(
            'Error',
            'No se pudo eliminar la canción.',
            'error'
          );
          alert("Ocurrió un error eliminando la canción.");
          return;
        })
      }
    })
  }

}
