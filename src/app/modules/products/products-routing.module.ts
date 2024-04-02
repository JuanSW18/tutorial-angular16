import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
