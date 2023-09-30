import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() data: any[] = [];
  @Input() columns: IDataGridColumn[] = [];

  @Output() rowselected : EventEmitter<any> = new EventEmitter();

  onRowSelect($event: any, row: any){
    this.rowselected.emit($event);
  }
}
