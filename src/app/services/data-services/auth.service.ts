import { Customer, User } from './../../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginCredentials } from '../../models/dtos/login-credentials';
import { DataService } from './data.service';
import { Role } from '../../models/role';
import { Roles } from '../../enums/roles.enum';
import { Router } from '@angular/router';
import { HelperService } from '../app-services/helper.service';
import { RegistrationData } from '../../models/dtos/registration-data';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  loggedInUserStorage = localStorage.getItem("loggedInUser")
  loggedInUserRoleStorage = localStorage.getItem("loggedInUserRole")

  loggedInUser: User | Customer | undefined = this.loggedInUserStorage ? JSON.parse(this.loggedInUserStorage) : undefined
  loggedInUserRole: Role | undefined = this.loggedInUserRoleStorage ? JSON.parse(this.loggedInUserRoleStorage) : undefined

  authenticated: Observable<boolean>;
  private $authenticated = new BehaviorSubject<boolean>(localStorage.getItem("loggedIn") !== null);

  constructor(
    private _dataService: DataService,
    private _router: Router,
  ) {
    this.authenticated = this.$authenticated.asObservable()
  }

  login(credentials: LoginCredentials) {
    this.loggedInUser = this.adminLogin(credentials) ?? this.customerLogin(credentials);

    localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser))
    localStorage.setItem("loggedInUserRole", JSON.stringify(this.loggedInUserRole))

    this.$authenticated.next(true);
    return this.authenticated;
  }

  logout(){
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("loggedInUserRole")

    this.$authenticated.next(false);

    this._router.navigate([]);
  }

  customerLogin(credentials: LoginCredentials) {
    let customer = this._dataService.customers.find(e => (e.user.email == credentials.email || e.phoneNumber == credentials.phoneNumber) && e.user.password == credentials.password)

    if (!customer)
      return undefined

    this.loggedInUserRole = this._dataService.roles.find(r => r.id === Roles.customer);
    return customer;
  }

  adminLogin(credentials: LoginCredentials) {
    let admin = this._dataService.admin;
    let valid = admin.email == credentials.email && admin.password == credentials.password;

    if (!valid)
      return undefined

    this.loggedInUserRole = this._dataService.roles.find(r => r.id === Roles.admin);
    return admin
  }
  
  register(registrationData: RegistrationData){
    let customer : Customer = {
      user:{
        id:HelperService.generators.guid(),
        creationDate:new Date(),
        email:registrationData.email,
        password:registrationData.password,
        roleId:Roles.customer
      },
      id : HelperService.generators.guid(),
      name:`${registrationData.firstName} ${registrationData.lastName}`,
      phoneNumber:registrationData.phoneNumber,
      cart:[]
    }
    let existingEmail = this._dataService.customers.find(c=>c.user.email == registrationData.email);
    if(existingEmail)
    {
      return false
    }
    this._dataService.customers.push(customer);
    this._dataService.commit();
    return true

  }
}
