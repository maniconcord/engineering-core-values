import { Product } from "./product"

import {Customer} from './customer'

export class ShoppingCart {
    private id: string
    private items: Product[]
    private customer: Customer

    constructor(id: string, items: Product[], customer: Customer){
        this.id = id
        this.items = items
        this.customer = customer
    }

    addItem(item: Product): void {
        this.items.push(item)
    }

    removeItem(itemId: string): void {
        let deletionIndex: number = -1
        this.items.forEach((item: Product, itemIndex) => {
            if(item.id === itemId){
                deletionIndex = itemIndex
            }
        })

        //the arbitrary looking '1' is saying how many items to remove starting at the deletion index
        this.items.splice(deletionIndex, 1)
    }

    calculateTotal(): number {
        let total: number = 0
        this.items.forEach((item: Product) => {
            total = total + item.price
        })
        return total
    }

    getItems(): Product[] {
        return this.items
    }
}