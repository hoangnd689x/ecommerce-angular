import { Item } from './items';
import { Product } from './product';

export class Cart {
    cartId: String;
    items: Item[];
    totalQuantity:number;
    totalPrice: number;
}
