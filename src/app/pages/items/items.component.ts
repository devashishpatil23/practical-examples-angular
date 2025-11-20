import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  host: {
    class: 'block min-h-[calc(100vh-64px)] p-4 bg-gray-50'
  }
})
export class ItemsComponent implements OnInit {
  private itemService = inject(ItemService);
  
  items$ = this.itemService.filteredItems$;
  categories: string[] = [];
  selectedCategory = '';
  
  ngOnInit(): void {
    this.categories = this.itemService.categories;
    const state = this.itemService.getFilterState();
    this.selectedCategory = state.category || '';
  }
  
  get hasActiveFilters(): boolean {
    return !!this.selectedCategory;
  }
  
  onCategoryChange(): void {
    this.itemService.setCategory(this.selectedCategory);
  }
  
  clearCategory(): void {
    this.selectedCategory = '';
    this.itemService.setCategory('');
  }
  
  clearAllFilters(): void {
    this.selectedCategory = '';
    this.itemService.resetFilters();
  }
}
