import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../../services/data-services/auth.service';
import { Roles } from '../../../enums/roles.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [
  //   SharedModule,
  //   FormsModule,
  //   ReactiveFormsModule,
  //   MatCheckboxModule,
  //   MatCardModule,
  // ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService:AuthService,
    private _router:Router
    ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', []]
    })
  }
  login(){
    console.log(this.loginForm.value)
    this._authService.login(this.loginForm.value)
    if (!this._authService.authenticated) {
      alert("Invalid Credentials")
      return;
    }

    else if (this._authService.loggedInUserRole?.id == Roles.admin)
      this._router.navigate(["/admin"]);

    else if (this._authService.loggedInUserRole?.id == Roles.customer)
      this._router.navigate(["/products"]);
  }
}
