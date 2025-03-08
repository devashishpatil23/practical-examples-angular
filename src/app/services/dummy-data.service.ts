import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyDataService {
  data = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'john.doe@example.com',
      city: 'New York',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      email: 'jane.smith@example.com',
      city: 'Los Angeles',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 40,
      email: 'michael.johnson@example.com',
      city: 'Chicago',
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 25,
      email: 'emily.davis@example.com',
      city: 'Houston',
    },
  ];

  constructor() {}

  getAllData(): any {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 3000);
    });
    return data;
  }
}
