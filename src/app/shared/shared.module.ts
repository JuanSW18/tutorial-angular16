import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const ANGULAR_MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
  ],
  exports: [
    ...ANGULAR_MATERIAL_COMPONENTS,
  ]
})
export class SharedModule { }
