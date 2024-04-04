import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class RegisterProductPresenter {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  createForm() {
    this.form =  this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      country: this.fb.control(null, [Validators.required]),
      category: this.fb.control(null, [Validators.required]),
      price: this.fb.control(null, [Validators.required]),
      stock: this.fb.control(null, [Validators.required]),
    })
  }

}