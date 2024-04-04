import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICivilStatus } from '../interfaces/civil-status.interface';

@Injectable({
  providedIn: 'root'
})
export class CivilStatusService {

  private readonly API_BASE = 'http://api-will-env.eba-pfnn7qzp.us-east-1.elasticbeanstalk.com/civil_status';

  constructor(private network: HttpClient) { }

  getCivilStatus() {
    const url = `${this.API_BASE}`;
    return this.network.get<ICivilStatus[]>(url);
  }
}
