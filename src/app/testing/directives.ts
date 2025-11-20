// highlight.directive.spec.ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

// Step 1: Create a host component to test the directive
@Component({
  template: `<p appHighlight="red">Test Text</p>`
})
class TestHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestHostComponent] // Declare directive and host
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges(); // Apply directive
  });

  // Step 2: Test if directive applied the correct background color
  it('should highlight background with red', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.style.backgroundColor).toBe('red'); // Assert DOM style applied
  });
});
