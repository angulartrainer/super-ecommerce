import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IDataGridColumn {
  columnName: string;
  header: string;
  cell(element: any): string;
}

@Component({
  selector: 'super-data-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  @Input() data: any[] = [{ id: 1 }];
  @Input() columns: IDataGridColumn[] = [
    { header: 'id', columnName: 'id', cell: (element) => `${element.id}` },
  ];
}
