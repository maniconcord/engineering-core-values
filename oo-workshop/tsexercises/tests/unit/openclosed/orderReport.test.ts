import {ShippingOrderReport} from '../../../src/openclosed/shippingOrderReport'

describe('order report', () => {
    it('should create an invoice', () => {
        const given: ShippingOrderReport = new ShippingOrderReport("Adam Schnaare", 1000)
        const when: string = given.invoice()
  
        // then
        expect(when).toContain("Invoice")
        expect(when).toContain("Adam Schnaare")
        expect(when).toContain("1000")
    })

    it('should create a shipping label', () => {
        const given: ShippingOrderReport = new ShippingOrderReport("Adam Schnaare", 1000)
        const when: string = given.shippingLabel()

        // then
        expect(when).toContain("Shipping Label")
        expect(when).toContain("Adam Schnaare")
  })
})