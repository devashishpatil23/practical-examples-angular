import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  imports: [CommonModule],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss',
})
export class ConcatMapComponent {
  http = inject(HttpClient);
  posts: any = [];

  ngOnInit() {
    this.getPosts()
      .pipe(
        // 'mergeMap' is used to flatten the observable of posts into individual post emissions
        mergeMap((post) =>
          from(post).pipe(
            // ✅ 'from' creates an observable that emits each post individually
            mergeMap((post: any) =>
              // For each post, call 'getUserById' to fetch the user data
              this.getUserById(post.userId).pipe(
                // Combine post and user data using the spread operator
                map((user) => ({ ...post, ...user }))
              )
            ),
            // Collects all emitted posts with user data back into an array
            toArray()
          )
        )
      )
      .subscribe((data: any[]) => {
        // Assign the final combined data to the 'posts' array
        this.posts = data;
        console.log(this.posts); // Expected: Array of 5 posts, each with associated user data
      });
  }

  getPosts() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getUserById(userId: number) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}

/*ngOnInit() {
  this.propertyService.getPropertyDetails().pipe(
    // Fetch floor plans based on property ID
    concatMap((property) => {
      this.property = property; // Store property details
      return this.floorPlanService.getFloorPlans(property.propertyId);
    }),
    // Fetch customers associated with the property
    concatMap((floorPlans) => {
      this.floorPlans = floorPlans; // Store floor plans
      return this.customerService.getCustomersByProperty(this.property.propertyId);
    })
  ).subscribe((customers) => {
    this.customers = customers; // Store customer data
    console.log('Data fetched successfully!');
  });
}*/

/*ngOnInit() {
  this.getOrders()
    .pipe(
      // Sequentially process each order
      concatMap((orders) =>
        from(orders).pipe(
          // For each order, fetch product details sequentially
          concatMap((order: any) =>
            this.getProductById(order.productId).pipe(
              // Combine order and product data
              map((product) => ({ ...order, ...product }))
            )
          ),
          toArray() // Collect the sequential results into an array
        )
      )
    )
    .subscribe((data: any[]) => {
      this.orders = data;
      console.log(this.orders); // Logs orders with their associated product details
    });
}*/
