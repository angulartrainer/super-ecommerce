import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SuperRequired } from 'src/app/validators/super-required';

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
          username: new FormControl("", [Validators.required]),
          email: new FormControl("", [Validators.required]),
          password: new FormControl("", [Validators.required, SuperRequired]),
          confirmPassword: new FormControl("", [Validators.required]),
      })
    }

    registerUser(){
      const { confirmPassword, ...rest } = this.registerForm.value;
      this._user.register({ ...rest }).subscribe()
    }

}