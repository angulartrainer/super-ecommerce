import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SuperRequired } from 'src/app/validators/super-required';
import { ValidateUsernameAsync } from 'src/app/validators/validate-username';

@Component({
  selector: 'super-personal-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalInfoFormComponent),
      multi: true,
    },
  ],
})
export class PersonalInfoFormComponent implements ControlValueAccessor, OnInit {
  personal!: FormGroup;

  value = {};

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor(private _fb: FormBuilder) {
    this.personal = this._fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.personal.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.personal.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
}
