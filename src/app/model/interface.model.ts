export interface Adreess {
  country: string;
  state: string;
  city: string;
}

export interface PhoneNumber {
  phNum: string;
}

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  maritalStatus: 'single' | 'married';
  spouseName?: string;
  address: Adreess;
  phoneNumber: PhoneNumber[];
  hasEmail: boolean;
  email?: string;
}

export interface todo {
  todo: string;
  priority: string;
  id: number;
  isChecked: boolean;
}
