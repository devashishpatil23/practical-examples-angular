import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef);
  users: any = [];
  name: string = 'ramesh';
  counter: number = 0;

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res;
        this.counter++;
        this.cd.detectChanges();
      });

    setTimeout(() => {
      this.counter++;
      this.cd.detectChanges(); // Force change detection immediately
    }, 3000);
  }

  onlick() {
    this.name = 'john';
  }
}
