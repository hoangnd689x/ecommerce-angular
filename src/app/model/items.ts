import { Product } from './product';

export class Item {
    productId: string;
    productName: string;
    buyPrice: string;
    productDescription: string;
    productImage: string;
    quantity: number;
    constructor(product: Product, quantity: number) {
        this.productId = product.productId;
        this.productName = product.productName;
        this.buyPrice = product.buyPrice;
        this.productDescription = product.productDescription;
        this.productImage = product.productImage;
        this.quantity = quantity;

    }
}
