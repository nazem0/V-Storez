import { Customer } from '../../models/user';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[];
  constructor(private _dataService:DataService) {
    this.customers = this._dataService.customers
  }
  get(){
    return this.customers;
  }
}
