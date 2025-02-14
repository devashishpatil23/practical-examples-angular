import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameAsyncValidatorComponent } from './username-async-validator.component';

describe('UsernameAsyncValidatorComponent', () => {
  let component: UsernameAsyncValidatorComponent;
  let fixture: ComponentFixture<UsernameAsyncValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameAsyncValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
