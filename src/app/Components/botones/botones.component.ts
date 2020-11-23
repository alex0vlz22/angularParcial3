import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor(private router: Router){
  }
  
  listar(){
    this.router.navigateByUrl('listar');
  }
  
  guardar(){
    this.router.navigateByUrl('add');
  }

  ngOnInit(): void {
  }

}
