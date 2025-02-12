import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-todo-list',
  imports: [FormComponent, ListComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  

}
