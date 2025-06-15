import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appHasRole') allowedRoles: string[] = [];
  ngOnInit() {
    const getRole = JSON.parse(localStorage.getItem('roles') || '[]');
    const hasRole = getRole.some((role: any) =>
      this.allowedRoles.includes(role)
    );

    if (!hasRole) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
