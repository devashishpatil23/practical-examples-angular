import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeSideFilterPaginationComponent } from './serve-side-filter-pagination.component';

describe('ServeSideFilterPaginationComponent', () => {
  let component: ServeSideFilterPaginationComponent;
  let fixture: ComponentFixture<ServeSideFilterPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServeSideFilterPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeSideFilterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
