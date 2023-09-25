import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'super-employment-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employment-info-form.component.html',
  styleUrls: ['./employment-info-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmploymentInfoFormComponent),
      multi: true,
    },
  ],
})
export class EmploymentInfoFormComponent implements ControlValueAccessor, OnInit {
  employmentForm!: FormGroup;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor(private _fb: FormBuilder) {
    this.employmentForm = this._fb.group({
      experiences: new FormArray([]),
    });
    this.addNewExperience();
  }

  writeValue(value: any): void {
    if (value) {
      this.employmentForm.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.employmentForm.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  addNewExperience() {
    const experiences = this.employmentForm.get('experiences') as FormArray;
    experiences.push(
      new FormGroup({
        companyName: new FormControl('', [Validators.required]),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        isCurrentCompany: new FormControl(''),
      })
    );
  }

  get experiences() {
    return this.employmentForm.get('experiences') as FormArray;
  }
}
