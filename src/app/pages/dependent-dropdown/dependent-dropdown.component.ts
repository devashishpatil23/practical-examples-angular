import { Component, OnInit, inject } from '@angular/core';
import { clients } from '../../constant/buildingData';
import { FormsModule } from '@angular/forms';
import { GenericService } from '../../services/generic.service';
import { NgFor } from '@angular/common';
import { TruncateWordsPipe } from '../../pipes/truncate-words.pipe';

@Component({
  selector: 'app-dependent-dropdown',
  standalone: true,
  imports: [FormsModule, NgFor, TruncateWordsPipe],
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.scss'], // ✅
})
export class DependentDropdownComponent implements OnInit {
  // ✅ Implements OnInit
  genericService = inject(GenericService);

  /* Building */
  clients: any[] = clients;
  sites: any[] = [];
  builds: any[] = [];
  clientId: string = '';
  siteName: string = '';

  /* Categories */
  categories: string[] = [];
  products: any[] = [];
  category: string = '';

  ngOnInit() {
    this.getCategories();
  }

  /** Fetch Categories from API */
  getCategories() {
    this.genericService
      .get(`https://fakestoreapi.com/products/categories`)
      .subscribe({
        next: (data) => {
          if (data && data.length) {
            this.categories = data;
            this.category = this.categories[0];
            this.onCategoryChange();
          }
        },
        error: (error) => {
          console.error('Error fetching categories:', error);
        },
      });
  }

  /** Fetch Products when Category Changes */
  onCategoryChange() {
    if (!this.category) return;

    this.genericService
      .get(`https://fakestoreapi.com/products/category/${this.category}`)
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
  }

  /** Handle Client Selection */
  onClientChange() {
    this.builds = [];
    const selectedClient = clients.find(
      (client) => client.id === +this.clientId
    ); // Convert to number

    if (selectedClient) {
      this.sites = selectedClient.sites;
    } else {
      this.sites = [];
    }
  }

  /** Handle Site Selection */
  onSiteChange() {
    const selectedSite = this.sites.find((site) => site.name === this.siteName);

    if (selectedSite) {
      this.builds = selectedSite.builds;
    } else {
      this.builds = [];
    }
  }
}
