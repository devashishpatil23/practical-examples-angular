import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {} from '@angular/forms';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { menus } from '../../constant/rolebasedMenu';
import { menu, menuItem } from '../../model/menus.model';

@Component({
  selector: 'app-role-based-login',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './role-based-login.component.html',
  styleUrl: './role-based-login.component.scss',
})
export class RoleBasedLoginComponent implements OnInit {
  router = inject(Router);
  menuList: menu = menus;
  loggedUserMenu: menuItem[] = [];
  loggedData: any;

  constructor() {
    // this.hideNav();
  }
  ngOnInit(): void {
    this.getLoggedUserMenu();
  }

  onLogout() {
    console.log('logout');
    localStorage.removeItem('user');
    this.router.navigate(['/rolebasedlogin/login']);
  }

  getLoggedUserMenu() {
    this.loggedData = localStorage.getItem('user');
    if (this.loggedData) {
      const userData = JSON.parse(this.loggedData);
      this.loggedUserMenu = this.menuList[userData.role];
      console.log(this.loggedUserMenu);
    }
  }
}
