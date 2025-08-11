import { IForm } from '../model/form.interface';

export const registrationForm: IForm = {
  formTitle: 'Registration Form',
  saveBtnTitle: 'Register',
  resetBtnTitle: 'Reset',
  formControls: [
    {
      name: 'firstName',
      label: 'First Name',
      value: '',
      placeholder: 'Enter First Name',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*First name is required',
        },
      ],
    },
    {
      name: 'lastName',
      label: 'Last Name',
      value: '',
      placeholder: 'Enter Last Name',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Last name is required',
        },
      ],
    },
    {
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: 'Enter Email',
      class: 'col-md-6',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Email is required',
        },
        {
          validatorName: 'email',
          required: true,
          message: '*Invalid email format',
        },
      ],
    },
    {
      name: 'mobile',
      label: 'Mobile',
      value: '',
      placeholder: 'Enter Mobile Number',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Mobile number is required',
        },
        {
          validatorName: 'maxlength',
          maxLength: 10,
          message: '*Maxmium 10 is allowed',
        },
      ],
    },
    {
      name: 'weight',
      label: 'Weight (kg)',
      value: '',
      placeholder: 'Enter Weight',
      class: 'col-md-6',
      type: 'number',
    },
    {
      name: 'height',
      label: 'Height (cm)',
      value: '',
      placeholder: 'Enter Height',
      class: 'col-md-6',
      type: 'number',
    },
    {
      name: 'gender',
      label: 'Gender',
      value: '',
      class: 'col-md-6',
      type: 'radio',
      radioOptions: ['Male', 'Female', 'Other'],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Gender is required',
        },
      ],
    },
    {
      name: 'trainer',
      label: 'Need Personal Trainer?',
      value: '',
      class: 'col-md-6',
      type: 'radio',
      radioOptions: ['Yes', 'No'],
    },
    {
      name: 'package',
      label: 'Package',
      value: '',
      class: 'col-md-6',
      type: 'select',
      options: [
        { id: 1, value: 'Basic' },
        { id: 2, value: 'Standard' },
        { id: 3, value: 'Premium' },
      ],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Package selection is required',
        },
      ],
    },
    {
      name: 'enquireDate',
      label: 'Enquiry Date',
      value: '',
      class: 'col-md-6',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Enquiry selection is required',
        },
      ],
    },
  ],
};
