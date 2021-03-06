export class OrderReport {
    private customer: string
    private total: number

    public constructor(customer: string, total: number){
        this.customer = customer
        this.total = total
    }

    public invoice(): string{
        const message = "Invoice " + this.customer + " " + this.total
        return message
    }

    public shippingLabel(): string{
        const message = "Shipping Label " + this.customer
        return message
    }
}