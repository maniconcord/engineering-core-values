import {Product} from './product'
import {ShoppingCart} from './shoppingCart'
import {ShoppingCartRepository} from './shoppingCartRepository'

export class ShoppingCartService{

    private repository: ShoppingCartRepository

    public constructor(repository: ShoppingCartRepository){
        this.repository = repository
    }

    public addItemToShoppingCart(shoppingCartId: string, item: Product): ShoppingCart {
        const shoppingCart: ShoppingCart = this.repository.find(shoppingCartId)

        shoppingCart.addItem(item)

        this.repository.save(shoppingCart)

        return shoppingCart
    }

    public removeItemFromShoppingCart(shoppingCartId: string, itemId: string): ShoppingCart{
        const shoppingCart: ShoppingCart = this.repository.find(shoppingCartId)
        shoppingCart.removeItem(itemId)
   
        return this.repository.save(shoppingCart)

    }

    public calculateShoppingCartTotal(shoppingCartId: string): number {
        const shoppingCart: ShoppingCart = this.repository.find(shoppingCartId)

        return shoppingCart.calculateTotal()
    }

    public getItemsInCart(shoppingCartId: string): Product[] {
        const shoppingCart: ShoppingCart = this.repository.find(shoppingCartId)

        return shoppingCart.getItems()
    }
}