export interface IForm {
  formTitle: string;
  saveBtnTitle: string;
  resetBtnTitle: string;
  formControls: IFormControl[];
}
export interface IFormControl {
  name: string;
  label: string;
  value: any;
  placeholder?: string;
  class?: string;
  options?: IOptions[];
  radioOptions?: string[];
  type: string;
  validators?: IValidator[];
}
export interface IValidator {
  validatorName: string;
  message: string;
  required?: boolean;
  pattern?: string | undefined;
  minLength?: number;
  maxLength?: number;
  email?: true;
}

export interface IOptions {
  id?: number;
  value?: string;
}
