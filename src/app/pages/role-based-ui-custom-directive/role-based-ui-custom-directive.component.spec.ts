import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedUiCustomDirectiveComponent } from './role-based-ui-custom-directive.component';

describe('RoleBasedUiCustomDirectiveComponent', () => {
  let component: RoleBasedUiCustomDirectiveComponent;
  let fixture: ComponentFixture<RoleBasedUiCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleBasedUiCustomDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleBasedUiCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
