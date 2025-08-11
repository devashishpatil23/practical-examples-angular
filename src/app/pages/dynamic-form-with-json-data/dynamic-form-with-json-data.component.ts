import { Component, inject, OnInit } from '@angular/core';
import { registrationForm } from '../../constant/form.constant';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../../model/form.interface';

@Component({
  selector: 'app-dynamic-form-with-json-data',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form-with-json-data.component.html',
  styleUrl: './dynamic-form-with-json-data.component.scss',
})
export class DynamicFormWithJsonDataComponent implements OnInit {
  formData: IForm = registrationForm;
  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({}, { updateOn: 'submit' });

  ngOnInit(): void {
    if (this.formData.formControls) {
      let formGroup: any = {};
      this.formData.formControls.forEach((control: IFormControl) => {
        let controlValidator: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required')
              controlValidator.push(Validators.required);
            if (val.validatorName === 'email')
              controlValidator.push(Validators.email);
            if (val.validatorName === 'maxlength')
              controlValidator.push(
                Validators.maxLength(val.maxLength as number)
              );
          });
        }
        formGroup[control.name] = [control.value || '', controlValidator];
      });
      this.myForm = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  getValidationErrors(control: IFormControl): string {
    const myFormControl = this.myForm.get(control.name);
    let errorMessage = '';
    control.validators?.forEach((val) => {
      if (myFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string;
      }
    });
    return errorMessage;
  }
}
