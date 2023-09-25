import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SuperRequired } from 'src/app/validators/super-required';
import { CompareControls } from 'src/app/validators/compare-controls';
import { ValidateUsernameAsync } from 'src/app/validators/validate-username';
import { PersonalInfoFormComponent } from 'src/app/shared/personal-info-form/personal-info-form.component';
import { EmploymentInfoFormComponent } from 'src/app/shared/employment-info-form/employment-info-form.component';

@Component({
  selector: 'super-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonalInfoFormComponent,
    EmploymentInfoFormComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _user: UserService) {
    this.registerForm = this._fb.group({
      personal: [null],
      employment: [null],
    });
  }

  ngOnInit(): void {}

  registerUser() {
    const { confirmPassword, ...rest } = this.registerForm.value;
    this._user.register({ ...rest }).subscribe();
  }

  // removeCompare(){
  //   this.registerForm.get("username")?.removeValidators(Validators.required);
  // }
}
