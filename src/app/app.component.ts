import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { menuList } from './constant/constant';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-practical-examples';
  isSideBarCollapsed = signal<boolean>(false);
  menuList: any = menuList;

  toggleSidebar() {
    this.isSideBarCollapsed.set(!this.isSideBarCollapsed());
    console.log(this.isSideBarCollapsed);
  }
}
