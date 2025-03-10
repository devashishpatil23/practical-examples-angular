import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonalDetails } from '../../model/interface.model';
import { CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  fb = inject(FormBuilder);
  myForm: FormGroup = new FormGroup({});
  FormData!: PersonalDetails;
  isFormSubmited: boolean = false;

  ngOnInit() {
    this.intializeForm();
    this.onFormValueChanges();
  }

  onSubmit() {
    this.FormData = this.myForm.value;
    this.myForm.reset();
    this.isFormSubmited = true;
  }
  get getPhoneFormArray(): FormArray {
    return this.myForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    const phoneFormGroup = this.fb.group({
      phNum: ['', Validators.required],
    });
    this.getPhoneFormArray.push(phoneFormGroup);
  }
  removePhone(i: number) {
    this.getPhoneFormArray.removeAt(i);
  }

  onFormValueChanges() {
    this.myForm.get('maritalStatus')?.valueChanges.subscribe((value) => {
      const spouseNameControl = this.myForm.get('spouseName');
      if (value === 'married') {
        spouseNameControl?.setValidators([Validators.required]);
      } else {
        spouseNameControl?.clearValidators();
      }
      spouseNameControl?.updateValueAndValidity();
    });

    this.myForm.get('hasEmail')?.valueChanges.subscribe((value) => {
      const emailFormControlName = this.myForm.get('email');
      if (value) {
        emailFormControlName?.setValidators([Validators.required]);
      } else {
        emailFormControlName?.clearValidators();
      }
      emailFormControlName?.updateValueAndValidity();
    });
  }

  intializeForm() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      maritalStatus: ['single', Validators.required],
      spouseName: [''],
      address: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.fb.array([]),
      hasEmail: [false],
      email: [''],
    });
    this.addPhone();
  }

  canExit(): boolean {
    return this.myForm.dirty && !this.isFormSubmited
      ? confirm('Are you sure you want leave this page ?')
      : true;
  }
}
