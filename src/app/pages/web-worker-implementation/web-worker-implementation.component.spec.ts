import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerImplementationComponent } from './web-worker-implementation.component';

describe('WebWorkerImplementationComponent', () => {
  let component: WebWorkerImplementationComponent;
  let fixture: ComponentFixture<WebWorkerImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebWorkerImplementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWorkerImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
