import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-web-worker-implementation',
  imports: [CommonModule, ScrollingModule, FormsModule],
  templateUrl: './web-worker-implementation.component.html',
  styleUrls: ['./web-worker-implementation.component.scss'],
})
export class WebWorkerImplementationComponent implements OnInit {
  list: any[] = [];
  filtredList: any[] = [];
  http = inject(HttpClient);
  loading = true;
  searchTerm = '';
  ngOnInit(): void {
    this.http
      .get('https://microsoftedge.github.io/Demos/json-dummy-data/5MB-min.json')
      .subscribe((res: any) => {
        this.loading = false;
        this.filtredList = res;
      });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  searchItem() {
    console.log('start');
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filtredList = [...this.list]; // ✅ reset if empty
      return;
    }
    const serarchList = this.filtredList.filter(
      (item) =>
        item.name.toLowerCase().includes(this.searchTerm) ||
        item.language.toLowerCase().includes(this.searchTerm)
    );
    this.filtredList = serarchList;

    console.log('done');
  }
}
