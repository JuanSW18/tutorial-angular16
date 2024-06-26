import { Component, OnInit } from '@angular/core';
import { RegisterProductPresenter } from './register-product.presenter';
import { CountryService } from 'src/app/shared/services/country.service';
import { ICountryItem } from 'src/app/shared/interfaces/country.interface';
import { CivilStatusService } from 'src/app/shared/services/civil-status.service';
import { ICivilStatus } from 'src/app/shared/interfaces/civil-status.interface';
import { forkJoin } from 'rxjs';
import { CustomerService } from '../../services/customer.service';
import { ICustomerRequest } from '../../interfaces/customer-request.interface';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss'],
  providers: [ RegisterProductPresenter ]
})
export class RegisterProductComponent implements OnInit {

  countryList: ICountryItem[];
  civilStatusList: ICivilStatus[];

  constructor (public presenter: RegisterProductPresenter,
    private _countryService: CountryService,
    private _civilStatusService: CivilStatusService,
    private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.presenter.createForm();
    this.getData();
    // this.getCountries();
    // this.getCivilStatus();
  }

  getData() {
    const observable = forkJoin({
      countries: this._countryService.getCountries(),
      civilStatus: this._civilStatusService.getCivilStatus()
    })

    observable.subscribe({
      next: (response) => {
        this.countryList = response.countries.data;
        this.civilStatusList = response.civilStatus;
      },
      error: () => {}
    })
  }

  // getCountries() {
  //   this._countryService.getCountries().subscribe({
  //     next: (data) => {
  //       this.countryList = data.data;
  //     },
  //     error: (err) => {}
  //   });
  // }

  // getCivilStatus() {
  //   this._civilStatusService.getCivilStatus().subscribe({
  //     next: (response) => {
  //       this.civilStatusList = response;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   })
  // }

  onProcessForm() {
    console.log(this.presenter.form.value);
    const payload: ICustomerRequest = {
      idCountry: (this.presenter.form.get('country')?.value as ICountryItem).id,
      idCivilStatus: (this.presenter.form.get('civilStatus')?.value as ICivilStatus).id,
      dniCustomer: '41528590',
      firstName: this.presenter.form.get('name')?.value,
      lastName: 'ENERO',
      gender: 'F',
      email: 'suley@gmail.com',
      phoneNumber: '985247126',
      stateCustomer: true,
    };
    this._customerService.createCustomer(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
