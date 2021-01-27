import { SimpleOrderReport } from "./simpleOrderReport"

export class ShippingOrderReport extends SimpleOrderReport{
   

    public constructor(customer: string, total: number){
        super(customer, total)
    }

    public shippingLabel(): string{
        const message = "Shipping Label " + this.customer
        return message
    }
}