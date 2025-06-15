import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTodoComponent } from './practice-todo.component';

describe('PracticeTodoComponent', () => {
  let component: PracticeTodoComponent;
  let fixture: ComponentFixture<PracticeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
