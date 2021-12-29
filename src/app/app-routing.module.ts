import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
