import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  todoSub = new BehaviorSubject<any[]>([]);
  editTodo = new Subject();
  constructor() {
    this.getItemToLocalStoreage();
  }

  add(todo: any) {
    const allTodos = [...this.todoSub.value, todo];
    this.setItemToLocalStoreage(allTodos);
  }

  updateTodo(todo: any) {
    this.setItemToLocalStoreage(todo);
  }
  delete(todo: any) {
    this.setItemToLocalStoreage(todo);
  }

  private setItemToLocalStoreage(obj: any) {
    this.todoSub.next(obj);
    const todo = JSON.stringify(obj);
    localStorage.setItem('todo', todo);
  }
  private getItemToLocalStoreage() {
    const todo = localStorage.getItem('todo');
    if (todo) {
      this.todoSub.next(JSON.parse(todo));
    }
  }
}
