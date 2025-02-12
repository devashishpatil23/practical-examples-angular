import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoListService } from '../../../services/todo-list.service';
import { todo } from '../../../model/interface.model';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  todosService = inject(TodoListService);
  fb = inject(FormBuilder);
  todoForm: FormGroup = new FormGroup({});
  editTodo!: todo | null;

  ngOnInit() {
    this.initializeForm();
    this.getTodoToEdit();
  }

  getTodoToEdit() {
    this.todosService.editTodo.subscribe((todo) => {
      this.editTodo = todo;
      this.todoForm.patchValue(todo);
    });
  }

  onAdd() {
    if (this.editTodo) {
      const todo = { ...this.editTodo, ...this.todoForm.value };
      const updatedTodo = this.todosService.todoSubject.value.map((task) =>
        task.id === todo.id ? todo : task
      );
      this.todosService.update(updatedTodo);
    } else {
      const Newtodo = {
        ...this.todoForm.value,
        isChecked: false,
        id: Date.now(),
      };
      this.todosService.add(Newtodo);
    }
    this.todoForm.reset();
  }

  initializeForm() {
    this.todoForm = this.fb.group({
      todo: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }
}
