import { Component, inject, Inject, OnInit } from '@angular/core';
import { DummyDataService } from '../../services/dummy-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resolve-route-guard',
  imports: [],
  templateUrl: './resolve-route-guard.component.html',
  styleUrl: './resolve-route-guard.component.scss',
})
export class ResolveRouteGuardComponent implements OnInit {
  dummyDataService = inject(DummyDataService);
  router = inject(ActivatedRoute);
  data: any[] = [];

  ngOnInit() {
    this.router.data.subscribe((data) => {
      this.data = data['data'];
    });

    // this.dummyDataService.getAllData().then((data: any) => {
    //   this.data = data;
    // });
    // this.data = this.dummyDataService.data;
  }
}
