import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormWithJsonDataComponent } from './dynamic-form-with-json-data.component';

describe('DynamicFormWithJsonDataComponent', () => {
  let component: DynamicFormWithJsonDataComponent;
  let fixture: ComponentFixture<DynamicFormWithJsonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormWithJsonDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormWithJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
