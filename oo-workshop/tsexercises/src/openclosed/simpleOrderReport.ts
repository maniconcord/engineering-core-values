export class SimpleOrderReport {
    protected customer: string
    protected total: number
    public constructor(customer: string, total: number){
        this.customer = customer
        this.total = total
    }
    
    public invoice(): string{
        const message = "Invoice " + this.customer + " " + this.total
        return message
    }
}