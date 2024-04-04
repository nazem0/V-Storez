import { Injectable } from '@angular/core';
import { Review } from '../../models/review';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private productService:ProductService) { }
  add(review:Review){
    let product = this.productService.getById(review.productId);
    product.reviews.push(review);
  }
}
