import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'super-number-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberSelectComponent),
      multi: true,
    },
  ],
})
export class NumberSelectComponent implements ControlValueAccessor {
  value: number = 0;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  decrease() {
    this.value = this.value - 1;
    this.onChange(this.value);
  }

  increase() {
    this.value = this.value + 1;
    this.onChange(this.value);
  }
}
