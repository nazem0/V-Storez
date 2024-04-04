import { Injectable } from '@angular/core';
import { HelperService } from '../app-services/helper.service';
import { User } from '../../models/user';
import { Roles } from '../../enums/roles.enum';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: User;
  constructor(private _dataService:DataService) {
    this.admin = this._dataService.admin
  }
}
