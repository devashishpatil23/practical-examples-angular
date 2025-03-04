import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stepper-form.component.html',
  styleUrl: './stepper-form.component.scss',
})
export class StepperFormComponent {
  steps = ['Step 1', 'Step 2', 'Step 3'];
  activeStep = 0;

  get progress() {
    return ((this.activeStep + 1) / this.steps.length) * 100;
  }

  goToStep(index: number) {
    this.activeStep = index;
  }

  next() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
  }

  previous() {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }
}
