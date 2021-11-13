import { Product } from './products';
import { ShopModel } from './shopModel';


export class ProductView {

    products: Product[];
    quantities: number[];

    constructor(shopModel: ShopModel) {
        this.products = shopModel.getProducts();
        this.quantities = shopModel.getQuantities();
    }

    public getNameView(): string {
        let viewString: string = "";

        for (let i = 0; i < this.products.length; i++) {
            viewString += i + ": " + this.products[i].getName() + "\n";
        }
        return viewString;
    }

    public getPriceView(): string {
        let total: number = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].getPrice() * this.quantities[i];
        }
        return "Total of Shopping Cart: " + total;
    }

    public getView(): string {
        let viewString: string = "";
        for (let i = 0; i < this.products.length; i++) {
            viewString += "\n";
            viewString += "       Name: " + this.products[i].getName() + "\n";
            viewString += "      Price: " + this.products[i].getPrice() + "\n";
            viewString += "Description: " + this.products[i].getDescription() + "\n";
            viewString += "   Quantity: " + this.quantities[i] + "\n";
        }
        return viewString;
    }

}