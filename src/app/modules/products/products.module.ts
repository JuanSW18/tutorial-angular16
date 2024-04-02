import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
