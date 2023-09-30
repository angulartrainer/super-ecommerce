import { Directive, Host, OnInit } from '@angular/core';
import { DataGridComponent } from '../shared/data-grid/data-grid.component';

@Directive({
  selector: '[superUserTable]',
  standalone: true,
})
export class UserTableDirective implements OnInit {
  constructor(@Host() private table: DataGridComponent) {
    
  }
  ngOnInit(): void {
    this.table.data = [
      { username: 'abc', age: 35 },
      { username: 'def', age: 23 },
      { username: 'xyz', age: 21 },
    ];

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
    ];
  }
}
