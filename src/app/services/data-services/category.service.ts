import { DataService } from './data.service';
import { Category } from '../../models/category';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [];

  constructor(private _dataService: DataService) {
    this.categories = this._dataService.categories;
  }

  get(): Category[] {
    return this.categories;
  }

  getById(id: number): Category {
    let category = this.categories.find(c => c.id === id);
    if (!category)
      throw (`No category found with this id ${id}`)

    return category
  }

  add(newCategory: Category): void {
    this.categories.push(newCategory);
  }

  update(updatedCategory: Category): boolean {
    const index = this.categories.findIndex(c => c.id === updatedCategory.id);
    if (index !== -1) {
      this.categories[index] = updatedCategory;
      return true;
    }
    return false;
  }

  delete(id: number): boolean {
    const index = this.categories.findIndex(c => c.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1)
      return true;
    }
    return false;
  }
}