import { Component, inject, OnInit } from '@angular/core';
import { MyTableComponent } from '../../shared/components/my-table/my-table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-table',
  imports: [MyTableComponent],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
})
export class DynamicTableComponent implements OnInit {
  http = inject(HttpClient);
  locationsArray: any;
  ngOnInit(): void {
    this.http
      .get('https://projectapi.gerasim.in/api/BusBooking/GetBusLocations')
      .subscribe((data) => {
        this.locationsArray = data;
      });
  }

  onDataEdit(item: any) {
    console.log(item);
  }
  onDataDelete(item: any) {
    this.locationsArray = this.locationsArray.filter((data: any) => {
      return data.locationId !== item.locationId;
    });
  }
}
