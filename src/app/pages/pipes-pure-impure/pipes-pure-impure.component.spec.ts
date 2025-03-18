import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPureImpureComponent } from './pipes-pure-impure.component';

describe('PipesPureImpureComponent', () => {
  let component: PipesPureImpureComponent;
  let fixture: ComponentFixture<PipesPureImpureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesPureImpureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPureImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
