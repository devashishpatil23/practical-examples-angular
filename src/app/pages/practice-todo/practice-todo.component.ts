import { Component } from '@angular/core';
import { FormComponent } from "../todo-list/form/form.component";
import { PFormComponent } from "./p-form/p-form.component";
import { PListComponent } from "./p-list/p-list.component";

@Component({
  selector: 'app-practice-todo',
  imports: [PFormComponent, PListComponent],
  templateUrl: './practice-todo.component.html',
  styleUrl: './practice-todo.component.scss'
})
export class PracticeTodoComponent {

}
