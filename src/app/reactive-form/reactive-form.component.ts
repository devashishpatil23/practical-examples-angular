import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  fb = inject(FormBuilder);
  applicationForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
    this.addNewConatctForm();
    this.addNewLoansForm();
    this.applicationForm.valueChanges.subscribe(() => {
      const formValue = this.applicationForm.value;
      const { fName, mName, lName } = formValue;
      const fullName = `${fName} ${mName} ${lName}`;
      this.applicationForm.patchValue(
        { fullName: fullName },
        { emitEvent: false }
      );
    });
  }

  initializeForm() {
    this.applicationForm = this.fb.group({
      fName: ['', [Validators.required]],
      mName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      isWorking: ['No', [Validators.required]],
      isOwnBusiness: ['', [Validators.required]],
      workDetails: this.fb.group({
        jobType: ['', [Validators.required]],
        companyName: ['', [Validators.required]],
        position: ['', [Validators.required]],
        salary: ['', [Validators.required]],
      }),
      businessDetails: this.fb.group({
        businessName: ['', [Validators.required]],
        businessType: ['', [Validators.required]],
        annualIncome: ['', [Validators.required]],
        address: ['', [Validators.required]],
      }),

      personalEmail: ['', [Validators.required]],
      businessEmail: ['', [Validators.required]],
      contactList: this.fb.array([]),
      loanDetails: this.fb.array([]),
    });
  }

  get contacts(): FormArray {
    return this.applicationForm.controls['contactList'] as FormArray;
  }
  addNewConatctForm() {
    const conatctForm = new FormGroup({
      conatctNo: new FormControl(''),
    });
    this.contacts.push(conatctForm);
  }

  removeContact(idx: number) {
    this.contacts.removeAt(idx);
  }

  get loans(): FormArray {
    return this.applicationForm.controls['loanDetails'] as FormArray;
  }

  addNewLoansForm() {
    const loanForm = new FormGroup({
      bankName: new FormControl(''),
      loanAmount: new FormControl(''),
      emi: new FormControl(''),
    });
    this.loans.push(loanForm);
  }
  removeLoanForm(idx: number) {
    this.loans.removeAt(idx);
  }
}
