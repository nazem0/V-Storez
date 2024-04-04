import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/data-services/product.service';
import { Product } from '../../../models/product';
import { HelperService } from '../../../services/app-services/helper.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { GalleriaModule } from 'primeng/galleria';
import { SharedModule } from '../../../../shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { I18nModule } from '../../../../i18n/i18n.module';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    SharedModule,
    GalleriaModule,
    MatButtonModule,
    MatSelectModule,
    CurrencyPipe,
    I18nModule,
    MatCardModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  selected: any;
  product: Product | undefined;
  constructor(
    private _productService: ProductService,
    public _helper: HelperService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get("id")
    if (!productId) {
      this.router.navigate([".."], {
        relativeTo: this.activatedRoute
      })
    }
    else {

      this.product = this._productService.getById(productId);
    }
  }
}
