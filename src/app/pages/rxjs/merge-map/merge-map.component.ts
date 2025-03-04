import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { from, map, mergeMap, of, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss',
})
export class MergeMapComponent implements OnInit {
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




// Fetch Posts: this.getPosts() returns an observable of posts.
// Flattening Posts: The first mergeMap emits each post individually using from(posts).
// Fetching User Data: For each post, it calls this.getUserById(post.userId) using mergeMap.
// Combining Data: The map operator merges the post and user data using the spread operator ({ ...post, ...user }).
// Collecting Results: toArray() gathers all emitted objects into a final array.
// Subscribing: The data is stored in the posts array and logged to the console.