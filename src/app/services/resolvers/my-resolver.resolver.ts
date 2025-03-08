import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DummyDataService } from '../dummy-data.service';

export const myResolverResolver: ResolveFn<any> = (route, state) => {
  const dummyDataService = inject(DummyDataService);
  return dummyDataService.getAllData().then((data: any) => data);
};
