export interface Adreess {
  country: string;
  state: string;
  city: string;
}

export interface PhoneNumber {
  phNum: string;
}

export interface PersonalDetails {
  name: string;
  lastName: string;
  maritalStatus: 'single' | 'married';
  spouseName?: string;
  address: Adreess;
  phoneNumber: PhoneNumber[];
  hasEmail: boolean;
  email?: string;
}
