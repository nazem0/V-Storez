import { MatStepperModule } from '@angular/material/stepper';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { HelperService } from '../../../services/app-services/helper.service';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/data-services/auth.service';
import { RegistrationData } from '../../../models/dtos/registration-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  personal = this._formBuilder.group({
    firstName: [HelperService.dummyData.firstName, [Validators.required]],
    lastName: [HelperService.dummyData.lastName, [Validators.required]],
    phoneNumber: [HelperService.dummyData.phoneNumber, [Validators.required, Validators.pattern(HelperService.regEx.egPhoneNumberRegex)]],
  });

  credentails = this._formBuilder.group({
    email: [HelperService.dummyData.email, [Validators.required, Validators.email]],
    password: [HelperService.dummyData.password, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router:Router
  ) { }
  register() {
    if(this.personal.invalid || this.credentails.invalid){
      alert("Invalid Data");
      return;
    }
    let registrationData: RegistrationData = {
      firstName: this.personal.get("firstName")?.value!,
      lastName: this.personal.get("lastName")?.value!,
      phoneNumber: this.personal.get("phoneNumber")?.value!,
      email: this.credentails.get("email")?.value!,
      password: this.credentails.get("password")?.value!
    }
    if(this._authService.register(registrationData)){
      alert("Registerd")
      this._router.navigate(["/login"])
    }
    else{
      alert("Account already exists")
    }
  }
}