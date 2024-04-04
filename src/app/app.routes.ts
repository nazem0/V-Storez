import { ProductDetailsComponent } from './components/shared/product-details/product-details.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { ProductsListComponent } from './components/shared/products-list/products-list.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { CartComponent } from './components/customer/cart/cart.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "login", pathMatch: "full"
    },
    {
        path: "login", component: LoginComponent, title: "Login"
    },
    {
        path: "register", component: RegisterComponent, title: "Register"
    },
    {
        path: "", component: LayoutComponent, children: [
            {
                path: "products", component: ProductsListComponent, title: "Products List"
            },
            {
                path: "product/:id", component: ProductDetailsComponent,
            }
        ]
    },
    {
        path:"cart" , component:CartComponent, title:"Cart"
    }
];
