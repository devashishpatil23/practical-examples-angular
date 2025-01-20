import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serve-side-filter-pagination',
  imports: [FormsModule],
  templateUrl: './serve-side-filter-pagination.component.html',
  styleUrls: ['./serve-side-filter-pagination.component.scss'],
})
export class ServeSideFilterPaginationComponent {
  productId: string = '';
  categoryName: string = '';
  productName: string = '';
  pageNumber: number = 1;
  pageSize: number = 15;
  sortOrder: string = 'asc';
  sortBy: string = 'productId';
  productList: any = [];
  totalProductsNumber: number = 0;
  totalPages: number = 0;

  http = inject(HttpClient);

  ngOnInit() {
    this.onSearch();
    this.getTotalProdNum();
  }

  getTotalProdNum() {
    this.http
      .get('https://projectapi.gerasim.in/api/Products/getTotalProduct')
      .subscribe((res) => {
        this.totalProductsNumber = Number(res);
      });
  }

  getPageNumbers() {
    this.totalPages = Math.ceil(this.totalProductsNumber / this.pageSize);
    return [...Array(this.totalPages)].map((_, index) => index + 1);
  }

  onSearch() {
    let params = new HttpParams()
      .set('pageNumber', this.pageNumber.toString())
      .set('pageSize', this.pageSize.toString())
      .set('sortBy', this.sortBy)
      .set('sortOrder', this.sortOrder);

    if (this.productId !== '') {
      params = params.set('productId', this.productId);
    }
    if (this.productName !== '') {
      params = params.set('shortName', this.productName);
    }
    if (this.categoryName !== '') {
      params = params.set('category', this.categoryName);
    }
    this.http
      .get('https://projectapi.gerasim.in/api/Products', { params })
      .subscribe((res) => {
        this.productList = res;
      });
  }

  onSort(value: string) {
    this.sortBy = value;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.onSearch();
  }

  pageChange(pageNo: number) {
    this.pageNumber = pageNo;
    this.onSearch();
  }
}
