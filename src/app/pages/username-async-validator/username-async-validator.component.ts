import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsernameValidatorService } from '../../services/username-validator.service';

@Component({
  selector: 'app-username-async-validator',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './username-async-validator.component.html',
  styleUrl: './username-async-validator.component.scss',
})
export class UsernameAsyncValidatorComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  fb: FormBuilder = inject(FormBuilder);
  userNameSuggestions: string[] = [];
  userNameValidationService = inject(UsernameValidatorService);

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: [
        '',
        Validators.required,
        this.userNameValidationService.checkUsername(),
      ],
    });
  }

  generateRandomUserNames() {
    const name = this.userForm.get('name')?.value.trim();
    const lastName = this.userForm.get('lastName')?.value.trim();

    if (name && lastName) {
      this.userNameSuggestions = [];
      for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * 1000);
        const username = `${name.toLowerCase()}${lastName.toLowerCase()}${random}`;
        this.userNameSuggestions.push(username);
      }
    }
  }

  selectUserName(selectUserName: string) {
    this.userForm.patchValue({ userName: selectUserName });
  }

  onSave() {
    alert('Formed Saved');
    this.userForm.reset();
    this.userNameSuggestions = [];
  }
}
