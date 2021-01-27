// export abstract class PaymentMethod {

//     constructor() {}

//     validatePayment() {}

// }

export interface PaymentMethod {

    validatePayment(): string;
}

export class CardPaymentMethod implements PaymentMethod {
    public validCardNumber: boolean | undefined

    public validatePayment(): string{
        let message: string

        if(this.validCardNumber){
            message = "Payment Validated"
        }
        else{
            message = "Invalid Payment"
        }
        return message
    }
}