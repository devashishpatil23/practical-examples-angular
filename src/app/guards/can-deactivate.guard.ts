import { CanDeactivateFn } from '@angular/router';
import { IDeactivateComponent } from '../model/interface.model';

export const canDeactivateGuard: CanDeactivateFn<IDeactivateComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canExit();
};
