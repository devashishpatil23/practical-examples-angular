import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { todo } from '../model/interface.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoSubject = new BehaviorSubject<todo[]>([]);
  editTodo = new Subject<todo>();

  constructor() {
    this.getTaskFromLocalStorage();
  }

  add(todo: todo) {
    const allTodos = [...this.todoSubject.value, todo];
    this.todoSubject.next(allTodos);
    this.setTaskToLocalStorage();
  }
  update(todo: todo[]) {
    this.todoSubject.next(todo);
    this.setTaskToLocalStorage();
  }
  delete(todo: todo[]) {
    this.todoSubject.next(todo);
    this.setTaskToLocalStorage();
  }
  private setTaskToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoSubject.value));
  }

  private getTaskFromLocalStorage() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todoSubject.next(JSON.parse(data));
    }
  }
}
