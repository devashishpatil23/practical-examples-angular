import { Component, inject, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-p-list',
  imports: [],
  templateUrl: './p-list.component.html',
  styleUrl: './p-list.component.scss',
})
export class PListComponent implements OnInit {
  todoService = inject(TodoStoreService);
  list: any[] = [];
  ngOnInit(): void {
    this.todoService.todoSub.subscribe((value) => {
      this.list = value;
    });
  }

  onDelete(todo: any) {
    const updatedTodo = this.list.filter((e) => e.id !== todo.id);
    this.todoService.delete(updatedTodo);
  }

  onEdit(todo: any) {
    this.todoService.editTodo.next(todo);
  }

  onChecked(todo: any) {
    const updatedTodo = this.list.map((ele) => {
      return ele.id === todo.id ? { ...todo, checked: !todo.checked } : ele;
    });
    this.todoService.updateTodo(updatedTodo);
  }
}
