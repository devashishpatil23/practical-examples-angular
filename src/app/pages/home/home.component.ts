import { Component } from '@angular/core';
import { componentsData } from '../../constant/constant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  componentsData = componentsData;
}
