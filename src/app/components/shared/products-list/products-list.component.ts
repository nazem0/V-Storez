import { ProductService } from './../../../services/data-services/product.service';
import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, NgFor } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator'
import { PrimeNgPageEvent } from '../../../models/dtos/primeng-page-event';
import { RouterModule } from '@angular/router';
import { I18nModule } from '../../../../i18n/i18n.module';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    PaginatorModule,
    MatCardModule,
    CurrencyPipe,
    RouterModule,
    I18nModule,
    NgFor
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[];
  productsPage: Product[] = [];
  paginationConfig: {
    first: number
    rows: number
  }
  constructor(private _productService: ProductService) {
    this.products = this._productService.get();
    this.paginationConfig = {
      first: 0,
      rows: 4
    }
    this.getData();
  }
  onPageChange(event: PrimeNgPageEvent) {
    this.paginationConfig.first = event.first ?? 0
    this.paginationConfig.rows = event.rows ?? 4
    this.getData();
  }
  getData() {
    this.productsPage = this.products.slice(this.paginationConfig.first, (this.paginationConfig.first+this.paginationConfig.rows))
  }
}
