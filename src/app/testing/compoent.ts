// counter.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  // Step 1: Configure TestBed before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Declare the component we want to test
      declarations: [CounterComponent],
    }).compileComponents(); // Compile the template and CSS

    // Step 2: Create component instance and fixture
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  // Step 3: Test if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Component instance exists
  });

  // Step 4: Test initial rendering of count
  it('should render default count as 0', () => {
    fixture.detectChanges(); // Trigger Angular change detection
    const text = fixture.nativeElement.querySelector('h2').textContent;
    expect(text).toContain('0'); // Default count should be 0
  });

  // Step 5: Test @Input binding
  it('should display input count value', () => {
    component.count = 5; // Set input property
    fixture.detectChanges(); // Update DOM
    const text = fixture.nativeElement.querySelector('h2').textContent;
    expect(text).toContain('5'); // DOM should show updated value
  });

  // Step 6: Test Increment button click
  it('should increment count when Increment button is clicked', () => {
    component.count = 2; // Initial value
    fixture.detectChanges(); // Render template

    // Get first button (Increment)
    const button = fixture.debugElement.query(By.css('button:first-child'));
    button.triggerEventHandler('click', null); // Simulate click
    fixture.detectChanges(); // Update DOM after click

    const text = fixture.nativeElement.querySelector('h2').textContent;
    expect(text).toContain('3'); // Count should increase by 1
  });

  // Step 7: Test Decrement button click
  it('should decrement count when Decrement button is clicked', () => {
    component.count = 2; // Initial value
    fixture.detectChanges(); // Render template

    // Get second button (Decrement)
    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler('click', null); // Simulate click
    fixture.detectChanges(); // Update DOM

    const text = fixture.nativeElement.querySelector('h2').textContent;
    expect(text).toContain('1'); // Count should decrease by 1
  });

  // Step 8: Test @Output event emission
  it('should emit countChange event when count changes', () => {
    spyOn(component.countChange, 'emit'); // Spy on the EventEmitter

    component.count = 10; // Initial value
    component.increment(); // Call increment

    expect(component.countChange.emit).toHaveBeenCalledWith(11);
    // Verify that EventEmitter emitted the new count value
  });
});
