import { Component, inject, OnInit, signal } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-users',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-users.component.html',
  styleUrl: './search-users.component.scss',
})
export class SearchUsersComponent implements OnInit {
  rxjsService = inject(RxjsService);
  searchForm!: FormGroup;
  // users: any[] = [];
  users = signal<any[]>([]);
  loading = signal<boolean>(false);

  ngOnInit() {
    this.initializeForm();
    this.onSearchValueChange();
  }

  initializeForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });
  }

  onSearchValueChange() {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => {
          if (value !== '') {
            this.loading.set(true);
            return this.rxjsService.searchUsers(value);
          } else {
            return of([]);
          }
        })
      )
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          const users = res?.items ? [...res.items].slice(0, 10) : [];
          this.users.set([...users]);
        },
        error: (err) => {
          alert(err.error.message);
          console.log(err);
          this.loading.set(false);
        },
      });
  }
}
