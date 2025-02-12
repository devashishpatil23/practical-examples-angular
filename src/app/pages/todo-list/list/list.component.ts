import { Component, inject, OnInit } from '@angular/core';
import { TodoListService } from '../../../services/todo-list.service';
import { CommonModule } from '@angular/common';
import { todo } from '../../../model/interface.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  todosService = inject(TodoListService);
  todoList: todo[] = [];
  ngOnInit() {
    this.todosService.todoSubject.subscribe((data) => {
      if (data) {
        this.todoList = data;
      }
    });
  }

  onDelete(id: number) {
    const updatedTodos = this.todoList.filter((todo) => todo.id !== id);
    this.todosService.delete(updatedTodos);
  }

  onEdit(todo: todo) {
    this.todosService.editTodo.next(todo);
  }

  isChecked(todo: todo) {
    const updatedTodo = this.todoList.map((task) => {
      return task.id === todo.id
        ? { ...todo, isChecked: !todo.isChecked }
        : task;
    });
    this.todosService.update(updatedTodo);
  }
}
