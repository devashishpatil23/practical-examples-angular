import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Item } from '../model/item.model';
import { ITEMS } from '../constant/items.constant';

interface FilterState {
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = ITEMS;
  private filterState = new BehaviorSubject<FilterState>(this.loadInitialState());
  
  // Get all unique categories for the filter dropdown
  get categories(): string[] {
    return [...new Set(this.items.map(item => item.category))].sort();
  }

  // Public observable for filtered items
  filteredItems$: Observable<Item[]>;

  constructor() {
    // Combine items with filter state and apply filtering
    this.filteredItems$ = this.filterState.pipe(
      map(state => {
        if (!state.category) {
          return [...this.items];
        }
        return this.items.filter(item => item.category === state.category);
      })
    );
  }

  // Update selected category
  setCategory(category: string): void {
    this.updateState({ category });
  }

  // Get current filter state
  getFilterState(): FilterState {
    return this.filterState.value;
  }

  // Reset all filters
  resetFilters(): void {
    this.updateState({ category: '' });
  }

  private updateState(partialState: Partial<FilterState>): void {
    const newState = { ...this.filterState.value, ...partialState };
    this.filterState.next(newState);
    this.saveState(newState);
  }

  private loadInitialState(): FilterState {
    const savedState = localStorage.getItem('itemFilterState');
    return savedState 
      ? JSON.parse(savedState) 
      : { category: '' };
  }

  private saveState(state: FilterState): void {
    localStorage.setItem('itemFilterState', JSON.stringify(state));
  }
}
