import { Cart } from '../../model/cart.model';
export declare const ANONYMOUS_USERID = "anonymous";
export declare class CartDataService {
    private _userId;
    private _cart;
    private _getDetails;
    constructor();
    readonly hasCart: boolean;
    userId: string;
    cart: Cart;
    getDetails: any;
    readonly cartId: string;
}
