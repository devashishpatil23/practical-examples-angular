import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { floorplansData } from '../../constant/buildingData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-operator',
  imports: [CommonModule],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss',
})
export class MapOperatorComponent implements OnInit {
  floorplansList: any[] = [];

  ngOnInit() {
    this.getFloorplans();
  }

  getFloorplans() {
    return of(floorplansData)
      .pipe(
        map((floorplans) => {
          return floorplans.map((floorplan) => {
            return {
              ...floorplan,
              pricePerSqFt: floorplan.totalPrice / floorplan.areaSqFt,
              lowAvailability: floorplan.availableUnits < 10,
            };
          });
        })
      )
      .subscribe((res: any) => {
        this.floorplansList = res;
        console.log(this.floorplansList);
      });
  }
}
