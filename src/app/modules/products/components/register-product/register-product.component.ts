import { Component, OnInit } from '@angular/core';
import { RegisterProductPresenter } from './register-product.presenter';
import { CountryService } from 'src/app/shared/services/country.service';
import { ICountryItem } from 'src/app/shared/interfaces/country.interface';
import { CivilStatusService } from 'src/app/shared/services/civil-status.service';
import { ICivilStatus } from 'src/app/shared/interfaces/civil-status.interface';
import { forkJoin } from 'rxjs';

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
    private _civilStatusService: CivilStatusService) {
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
  }

}
