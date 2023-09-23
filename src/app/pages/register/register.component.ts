import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SuperRequired } from 'src/app/validators/super-required';
import { CompareControls } from 'src/app/validators/compare-controls';
import { ValidateUsernameAsync } from 'src/app/validators/validate-username';

@Component({
  selector: 'super-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

    registerForm!: FormGroup;

    constructor(private _fb: FormBuilder, private _user: UserService){}

    ngOnInit(): void {
      this.registerForm = this._fb.group({
          username: new FormControl("", [Validators.required], [ValidateUsernameAsync(this._user)]),
          email: new FormControl("", [Validators.required]),
          password: new FormControl("", [Validators.required, SuperRequired("india")]),
          confirmPassword: new FormControl("", [Validators.required]),
      }, { validators: [ CompareControls("password", "confirmPassword"), CompareControls("password", "username") ] })
    }

    registerUser(){
      const { confirmPassword, ...rest } = this.registerForm.value;
      this._user.register({ ...rest }).subscribe()
    }

    // removeCompare(){
    //   this.registerForm.get("username")?.removeValidators(Validators.required);
    // }

}
