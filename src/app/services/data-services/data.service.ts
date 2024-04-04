import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { HelperService } from '../app-services/helper.service';
import { Customer, User } from '../../models/user';
import { Roles } from '../../enums/roles.enum';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private $roles: Role[] = [{
    id: Roles.customer,
    name: "customer"
  },
  {
    id: Roles.admin,
    name: "admin"
  }]
  roles: Role[] = this.read("roles") ?? this.$roles;


  private $admin: User = {
    id: HelperService.generators.guid(),
    email: "admin@vstore.com",
    password: "Asd@12345",
    roleId: Roles.admin,
    creationDate: new Date(),
  }
  admin: User = this.read("admin") ?? this.$admin

  private $customers: Customer[] = [
    {
      user: {
        id: HelperService.generators.guid(),
        email: 'ahmed@vstore.com',
        password: 'Asd@12345',
        roleId: Roles.customer,
        creationDate: new Date()
      },
      id: HelperService.generators.guid(),
      name: 'Ahmed Hassan',
      phoneNumber: '+201204067490',
      cart:[]
    },
    {
      user: {
        id: HelperService.generators.guid(),
        email: 'fatma@vstore.com',
        password: 'Asd@12345',
        roleId: Roles.customer,
        creationDate: new Date()
      },
      id: HelperService.generators.guid(),
      name: 'Fatma Ali',
      phoneNumber: '+201036503210',
      cart: []
    }
  ]
  customers: Customer[] = this.read("customers") ?? this.$customers

  private $categories: Category[] = [
    {
      id: 1,
      name: "Furniture",
      image: "https://placehold.co/480?text=Furniture",
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://placehold.co/480?text=Clothing",
    },
    {
      id: 3,
      name: "Electronics",
      image: "https://placehold.co/480?text=Electronics",
    },
    {
      id: 4,
      name: "Books",
      image: "https://placehold.co/480?text=Books",
    },
    {
      id: 5,
      name: "Toys",
      image: "https://placehold.co/480?text=Toys",
    }
  ]
  categories: Category[] = this.read("categories") ?? this.$categories

  private $products: Product[] = [
    // Furniture category products
    {
      id: HelperService.generators.guid(),
      title: "Wooden Dining Table",
      price: 299,
      description: "Sturdy wooden dining table for family gatherings.",
      categoryId: 1,
      pictures: [
        "https://placehold.co/480?text=Dining+Table+1",
        "https://placehold.co/480?text=Dining+Table+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    {
      id: HelperService.generators.guid(),
      title: "Leather Sofa",
      price: 599,
      description: "Luxurious leather sofa for comfortable seating.",
      categoryId: 1,
      pictures: [
        "https://placehold.co/480?text=Sofa+1",
        "https://placehold.co/480?text=Sofa+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    // Clothing category products
    {
      id: HelperService.generators.guid(),
      title: "Men's Casual Shirt",
      price: 39,
      description: "Stylish and comfortable casual shirt for men.",
      categoryId: 2,
      pictures: [
        "https://placehold.co/480?text=Shirt+1",
        "https://placehold.co/480?text=Shirt+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    {
      id: HelperService.generators.guid(),
      title: "Women's Summer Dress",
      price: 49,
      description: "Light and elegant summer dress for women.",
      categoryId: 2,
      pictures: [
        "https://placehold.co/480?text=Dress+1",
        "https://placehold.co/480?text=Dress+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    // Electronics category products
    {
      id: HelperService.generators.guid(),
      title: "Wireless Bluetooth Speaker",
      price: 79,
      description: "Portable wireless speaker for great music on-the-go.",
      categoryId: 3,
      pictures: [
        "https://placehold.co/480?text=Speaker+1",
        "https://placehold.co/480?text=Speaker+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    {
      id: HelperService.generators.guid(),
      title: "Smartphone",
      price: 499,
      description: "Advanced smartphone with the latest features.",
      categoryId: 3,
      pictures: [
        "https://placehold.co/480?text=Smartphone+1",
        "https://placehold.co/480?text=Smartphone+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    // Books category products
    {
      id: HelperService.generators.guid(),
      title: "Bestseller Novel",
      price: 15,
      description: "Captivating novel loved by readers worldwide.",
      categoryId: 4,
      pictures: [
        "https://placehold.co/480?text=Novel+1",
        "https://placehold.co/480?text=Novel+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    {
      id: HelperService.generators.guid(),
      title: "Cookbook",
      price: 29,
      description: "Collection of delicious recipes for food enthusiasts.",
      categoryId: 4,
      pictures: [
        "https://placehold.co/480?text=Cookbook+1",
        "https://placehold.co/480?text=Cookbook+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    // Toys category products
    {
      id: HelperService.generators.guid(),
      title: "Educational Building Blocks",
      price: 35,
      description: "Educational and fun building blocks for kids.",
      categoryId: 5,
      pictures: [
        "https://placehold.co/480?text=Blocks+1",
        "https://placehold.co/480?text=Blocks+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
    {
      id: HelperService.generators.guid(),
      title: "Remote Control Car",
      price: 25,
      description: "Exciting remote control car for adventurous kids.",
      categoryId: 5,
      pictures: [
        "https://placehold.co/480?text=Car+1",
        "https://placehold.co/480?text=Car+2",
      ],
      creationDate: new Date(),
      reviews: [],
      properties: []
    },
  ]
  products: Product[] = this.read("products") ?? this.$products

  constructor() { }

  read(key: string) {
    let data = localStorage.getItem(key);
    if (!data)
      return null;
    return JSON.parse(data);
  }

  private save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  commit(){
    this.save("roles",this.roles);
    this.save("admin",this.admin);
    this.save("customers",this.customers);
    this.save("categories",this.categories);
    this.save("products",this.products);
  }
  reset(){
    this.roles = this.$roles
    this.admin = this.$admin
    this.customers = this.$customers
    this.categories = this.$categories
    this.products = this.$products

  }
}
