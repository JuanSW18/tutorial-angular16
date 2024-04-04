import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerRequest } from '../interfaces/customer-request.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private readonly API_BASE = 'http://api-will-env.eba-pfnn7qzp.us-east-1.elasticbeanstalk.com/customers';

  constructor(private network: HttpClient) { }

  createCustomer(payload: ICustomerRequest) {
    const url = `${this.API_BASE}`;
    return this.network.post<unknown>(url, payload);
  }
}
