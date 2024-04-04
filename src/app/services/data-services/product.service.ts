import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { CategoryService } from './category.service';
import { HelperService } from '../app-services/helper.service';
import { ProductFilter } from '../../models/dtos/product-filter';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = []
  constructor(private _dataService:DataService) {
    this.products = this._dataService.products
  }


  get(): Product[] {
    return this.products;
  }

  getById(id: string): Product {
    let product = this.products.find(p => p.id === id);
    if (!product)
      throw (`No Product found with this id ${id}`)

    return product
  }

  getByCategoryId(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId)
  }

  filter(filter: ProductFilter) {
    let products: Product[] = this.products;

    if (filter.categoryId)
      products = products.filter(p => p.categoryId === filter.categoryId)

    if (filter.title)
      products = products.filter(p => p.title.includes(filter.title!))

    if (filter.description)
      products = products.filter(p => p.description.includes(filter.description!))

    if (filter.price)
      products = products.filter(p => p.price <= filter.price!)

    return products;
  }

  add(newProduct: Product): void {
    this.products.push(newProduct);
  }

  update(updatedProduct: Product): boolean {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      return true;
    }
    return false;
  }

  delete(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1)
      return true;
    }
    return false;
  }
}
