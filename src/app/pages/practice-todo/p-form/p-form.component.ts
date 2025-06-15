import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-p-form',
  imports: [ReactiveFormsModule],
  templateUrl: './p-form.component.html',
  styleUrl: './p-form.component.scss',
})
export class PFormComponent implements OnInit {
  todoForm!: FormGroup;
  fb = inject(FormBuilder);
  todoService = inject(TodoStoreService);
  editTodo!: any;
  ngOnInit(): void {
    this.intializeForm();
    this.getTodoToEdit();
  }
  getTodoToEdit() {
    this.todoService.editTodo.subscribe((value) => {
      this.editTodo = value;
      this.todoForm.patchValue(this.editTodo);
    });
  }
  onSubmit() {
    if (this.editTodo) {
      const Editedtodo = { ...this.editTodo, ...this.todoForm.value };
      const updatedTodos = this.todoService.todoSub.value.map((todo) => {
        return todo.id === this.editTodo.id ? Editedtodo : todo;
      });
      this.todoService.updateTodo(updatedTodos);
    } else {
      const todo = { ...this.todoForm.value, id: Date.now(), checked: false };
      this.todoService.add(todo);
    }
    this.intializeForm();
  }
  intializeForm() {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }
}
