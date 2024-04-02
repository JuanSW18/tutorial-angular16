import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from './core/data/paths.enum';

const routes: Routes = [
  {
    path: Paths.Products,
    loadChildren: () => import('./modules/products/products.module').then( m => m.ProductsModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
