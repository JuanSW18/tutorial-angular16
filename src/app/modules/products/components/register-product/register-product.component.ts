import { Component, OnInit } from '@angular/core';
import { RegisterProductPresenter } from './register-product.presenter';
import { CountryService } from 'src/app/shared/services/country.service';
import { ICountryItem } from 'src/app/shared/interfaces/country.interface';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss'],
  providers: [ RegisterProductPresenter ]
})
export class RegisterProductComponent implements OnInit {

  countryList: ICountryItem[];

  constructor (public presenter: RegisterProductPresenter,
    private _countryService: CountryService) {
  }

  ngOnInit(): void {
    this.presenter.createForm();
    this.getCountries();
  }

  getCountries() {
    this._countryService.getCountries().subscribe({
      next: (data) => {
        this.countryList = data.data;
      },
      error: (err) => {}
    });
  }

  onProcessForm() {
    console.log(this.presenter.form.value);
  }

}
