import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupStepThree = () => {
  const paymentMode = registerationStore(state => state.paymentMode)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)
  const childForms = registerationStore(state => state.childForms)
  const individualMonthlyFee = registerationStore(state => state.individualMonthlyFee)
  const individualYearlyFee = registerationStore(state => state.individualYearlyFee)
  const familyYearlyFee = registerationStore(state => state.familyYearlyFee)
  const familyMonthlyFee = registerationStore(state => state.familyMonthlyFee)
  const onDemandFee = registerationStore(state => state.onDemandFee)
  const corporateFee = registerationStore(state => state.corporateFee)

  const calculatePricing = (accountType) => {
    const individualMonthlyPrice = 34.99 * 3
    const individualYearlyPrice = 29.99 * 12
    const familyMonthlyPrice = 54.99 * 3
    const familyYearlyPrice = 44.99 * 12
    const corporatePrice = 19.99 * 12
    const onDemandPrice = 99
    const taxFactor = 0.09975
    return accountType === "individualMonthly" ?
      {
        tax: individualMonthlyPrice * taxFactor,
        totalAmount: individualMonthlyPrice,
        totalAmountPlusTax: individualMonthlyPrice + individualMonthlyPrice * taxFactor
      } :
      accountType === "individualYearly" ?
        {
          tax: individualYearlyPrice * taxFactor,
          totalAmount: individualYearlyPrice,
          totalAmountPlusTax: individualYearlyPrice + individualYearlyPrice * taxFactor
        } :
        accountType === "familyMonthly" ?
          {
            tax: familyMonthlyPrice * taxFactor,
            totalAmount: familyMonthlyPrice,
            totalAmountPlusTax: familyMonthlyPrice + familyMonthlyPrice * taxFactor
          } :
          accountType === "familyYearly" ?
            {
              tax: familyYearlyPrice * taxFactor,
              totalAmount: familyYearlyPrice,
              totalAmountPlusTax: familyYearlyPrice + familyYearlyPrice * taxFactor
            } :
            accountType === "corporate" ?
              {
                tax: corporatePrice * taxFactor,
                totalAmount: corporatePrice,
                totalAmountPlusTax: corporatePrice + corporatePrice * taxFactor
              } :
              {
                tax: onDemandPrice * taxFactor,
                totalAmount: onDemandPrice,
                totalAmountPlusTax: onDemandPrice + onDemandPrice * taxFactor
              }
  }


  return (
    <section className="space-y-6">
      <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-5xl ">Step 3</h2>
            <div className="font-body text-xl font-light">
              <div className="text-right">
                <p>Payment</p>
              </div>
            </div>
          </article>

          <article>
            <div className={`flex items-center gap-x-4`}>
              {paymentMode === "yearly" && <p className="text-primary text-3xl">Save 25%</p>}
              {
                (selectedAccountType === "individual" ||
                  selectedAccountType === "family" ||
                  selectedAccountType === "corporate"
                ) && (
                  <button
                    onClick={() => setPaymentMode("yearly")}
                    className={`${paymentMode === 'yearly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                    <h2 className="text-xl">Yearly</h2>
                    <h4 className="text-xs">Best Value</h4>
                  </button>
                )
              }
              {
                (
                  selectedAccountType === "individual" ||
                  selectedAccountType === "family"
                ) &&
                <button
                  onClick={() => setPaymentMode("monthly")}
                  className={`${paymentMode === 'monthly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                  <h2 className="text-xl">Monthly</h2>
                </button>
              }
              {
                selectedAccountType === "on demand" &&
                <button
                  className={`bg-primary text-white border-2 border-primary flex flex-col items-center justify-center rounded-2xl w-32 h-16`}>
                  <h2 className="text-xl">On Demand</h2>
                </button>
              }
            </div>
          </article>
        </div>
      </article>

      <div className='flex justify-between'>
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            {
              selectedAccountType === "individual" ?
                paymentMode === "monthly" ?
                  "1 x Individual Plan" :
                  "12 x Individual Plan"
                :
                selectedAccountType === "family" ?
                  paymentMode === "yearly" ?
                    `12 x Family Plan for ${childForms.length + 1} member${childForms.length > 0 ? "s" : ""}`
                    :
                    `1 x Family Plan for ${childForms.length + 1} member${childForms.length > 0 ? "s" : ""}`
                  :
                  selectedAccountType === "corporate" ?
                    `12 x Corporate Plan for ${childForms.length + 1} member${childForms.length > 0 ? "s" : ""}`
                    :
                    "1 x On Demand Plan"
            }
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <div className="font-body">
            {
              selectedAccountType === "individual" ?
                (
                  paymentMode === "monthly" ?
                    <div>
                      <h3>${individualMonthlyFee}</h3>
                      <div className="flex gap-x-4">
                        <p>3 months initial signup</p>
                        <h3>${calculatePricing("individualMonthly").totalAmount.toFixed(2)}</h3>
                      </div>
                      <h3>${calculatePricing("individualMonthly").tax.toFixed(2)}</h3>
                      <h2 className="text-3xl">
                        <span className="pr-2">Total:</span>
                        <strong>
                          ${calculatePricing("individualMonthly").totalAmountPlusTax.toFixed(2)}
                        </strong>
                      </h2>
                    </div> :
                    <div>
                      <h3>${individualYearlyFee}</h3>
                      <h3>${calculatePricing("individualYearly").totalAmount.toFixed(2)}</h3>
                      <h3>${calculatePricing("individualYearly").tax.toFixed(2)}</h3>
                      <h2 className="text-3xl">
                        <span className="pr-2">Total:</span>
                        <strong>
                          ${calculatePricing("individualYearly").totalAmountPlusTax.toFixed(2)}
                        </strong>
                      </h2>
                    </div>
                ) :
                selectedAccountType === "family" ?
                  (
                    paymentMode === "monthly" ?
                      <div>
                        <h3>${familyMonthlyFee}</h3>
                        <div className="flex gap-x-4">
                          <p>3 months initial signup</p>
                          <h3>${calculatePricing("familyMonthly").totalAmount}</h3>
                        </div>
                        <h3>${calculatePricing("familyMonthly").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">Total:</span>
                          <strong>
                            ${calculatePricing("familyMonthly").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div> :
                      <div>
                        <h3>${familyYearlyFee}</h3>
                        <h3>${calculatePricing("familyYearly").totalAmount.toFixed(2)}</h3>
                        <h3>${calculatePricing("familyYearly").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">Total:</span>
                          <strong>
                            ${calculatePricing("familyYearly").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div>
                  ) : selectedAccountType === "corporate" ?
                  (
                    <div>
                        <h3>${corporateFee}</h3>
                        <h3>${calculatePricing("corporate").totalAmount.toFixed(2)}</h3>
                        <h3>${calculatePricing("corporate").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">Total:</span>
                          <strong>
                            {calculatePricing("corporate").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                    </div>

                    ) :
                    (
                      <div>
                        <h3>${onDemandFee}</h3>
                        <h3>${calculatePricing("on demand").totalAmount.toFixed(2)}</h3>
                        <h3>${calculatePricing("on demand").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">Total:</span>
                          <strong>
                            ${calculatePricing("on demand").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div>
                    )
            }
          </div>
        </article>
      </div>
      <CardElement
        id="card-element"
        className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
      />
    </section>
  )
}

export default SignupStepThree