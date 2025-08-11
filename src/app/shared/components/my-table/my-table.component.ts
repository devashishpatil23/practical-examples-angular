import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [JsonPipe],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss',
})
export class MyTableComponent {
  @Input() colArray: string[] = [];
  @Input() gridData: any[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  editData(item: any) {
    this.onEdit.emit(item);
  }
  deleteData(item: any) {
    this.onDelete.emit(item);
  }
}
