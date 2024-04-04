import { Roles } from "../enums/roles.enum";
import { BaseModel } from "./base-model";
import { Product } from "./product";

export interface User extends BaseModel {
    email: string;
    password: string;
    roleId: Roles;
}

export interface Customer{
    id:string;
    user:User;
    name: string;
    phoneNumber: string;
    cart: Product[];
}
