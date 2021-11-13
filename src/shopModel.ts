import { Product } from './products';

export class ShopModel {

    private static shopping_cart: Product[] = [];
    private static quantity_cart: number[] = [];

    public addProduct(name: string, price: number, description: string) {
        ShopModel.shopping_cart.push(new Product(name, price, description));
    }

    public addQuantity(quantity: number) {
        ShopModel.quantity_cart.push(quantity);
    }

    public removeProduct(removeMe: number) {
        ShopModel.shopping_cart.splice(removeMe, 1);
        ShopModel.quantity_cart.splice(removeMe, 1);
    }

    public getProducts(): Product[] {
        return ShopModel.shopping_cart;
    }

    public getQuantities(): number[] {
        return ShopModel.quantity_cart;
    }
}