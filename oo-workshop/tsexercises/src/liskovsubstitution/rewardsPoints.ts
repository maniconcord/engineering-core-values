import { PaymentMethod } from "./paymentMethod"

export class RewardsPoints implements PaymentMethod {
    public validRewardAccount: boolean | undefined;

    public validatePayment(): string {
        return this.validRewardAccount ? "Payment Validated" : "Invalid Payment";
    }
}
