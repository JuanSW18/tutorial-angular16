import { Component, OnInit } from '@angular/core';
import { RegisterProductPresenter } from './register-product.presenter';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss'],
  providers: [ RegisterProductPresenter ]
})
export class RegisterProductComponent implements OnInit {

  constructor (public presenter: RegisterProductPresenter) {

  }

  ngOnInit(): void {
    this.presenter.createForm();
  }

  onProcessForm() {
    console.log(this.presenter.form.value);
  }

}
