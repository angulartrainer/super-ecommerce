import { Directive, Host, OnInit } from '@angular/core';
import { DataGridComponent } from '../shared/data-grid/data-grid.component';
import { CurrencyPipe } from '@angular/common';
import { PhonePipe } from '../shared/phone.pipe';
import { FormatNumberPipe } from '../shared/format-number.pipe';

@Directive({
  selector: '[superUserTable]',
  standalone: true,
})
export class UserTableDirective implements OnInit {
  data: any = [];

  constructor(@Host() private table: DataGridComponent) {}
  ngOnInit(): void {
    this.data = [
      {
        username: 'abc',
        age: 35,
        salary: new FormatNumberPipe().transform(500000),
        contact: new PhonePipe().transform("974927944234", "us"),
      },
      {
        username: 'def',
        age: 23,
        salary: new FormatNumberPipe().transform(32442433),
        contact: new PhonePipe().transform("432424234423"),
      },
      {
        username: 'xyz',
        age: 21,
        salary: new FormatNumberPipe().transform(4424242424),
        contact: new PhonePipe().transform("42343243242423"),
      },
    ];

    this.table.data = this.data;

    this.table.columns = [
      {
        columnName: 'name',
        header: 'Username',
        cell: (element: any) => `${element.username}`,
      },
      {
        columnName: 'age',
        header: 'Age',
        cell: (element: any) => `${element.age}`,
      },
      {
        columnName: 'salary',
        header: 'Salary',
        cell: (element: any) => `${element.salary}`,
      },
      {
        columnName: 'contact',
        header: 'Contact No',
        cell: (element: any) => `${element.contact}`,
      },
    ];

    this.table.onRowSelect = this.onRowSelect;
  }

  onRowSelect($event: any, row: any) {
    console.log(row);
  }
}
