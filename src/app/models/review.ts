import { BaseModel } from './base-model';

export interface Review extends BaseModel {
    customerId:string;
    productId:string;
    review:string;
    rate:number;
}
