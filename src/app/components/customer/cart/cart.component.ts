import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../models/product';
import { AuthService } from '../../../services/data-services/auth.service';
import { Customer } from '../../../models/user';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Product[] = (this._authService.loggedInUser as Customer).cart;
  constructor(private _authService:AuthService) {
  }
  displayedColumns: string[] =
    [
      'picture',
      'title',
      'category',
      'price',
      'actions'
    ];
  dataSource = this.products;
}
