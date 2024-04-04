import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly API_BASE = 'http://api-will-env.eba-pfnn7qzp.us-east-1.elasticbeanstalk.com/countries';

  constructor(private network: HttpClient) { }

  getCountries() {
    const url = `${this.API_BASE}`;
    return this.network.get<ICountryResponse>(url);
  }
}
