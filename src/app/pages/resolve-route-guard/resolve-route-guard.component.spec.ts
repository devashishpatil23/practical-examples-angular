import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveRouteGuardComponent } from './resolve-route-guard.component';

describe('ResolveRouteGuardComponent', () => {
  let component: ResolveRouteGuardComponent;
  let fixture: ComponentFixture<ResolveRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolveRouteGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolveRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
