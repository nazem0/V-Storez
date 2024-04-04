import { BaseModel } from './base-model';
import { Review } from './review';

export interface Product extends BaseModel {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    pictures: string[];
    reviews: Review[];
    properties : Property[];
}

interface Property {
    id: string,
    name: string;
    propertyProducts:PropertyProduct[],
}

interface PropertyProduct {
    id: string,
    PropertyId: string;
    productId: string;
    propertyValues:PropertyValue[]
}

interface PropertyValue {
    id: string;
    PropertyProductId: string;
    value: string;
}
