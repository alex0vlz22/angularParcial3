import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Cancion/agregar/agregar.component';
import { EditarComponent } from './Cancion/editar/editar.component';
import { ListarComponent } from './Cancion/listar/listar.component';

const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path: 'add', component: AgregarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
