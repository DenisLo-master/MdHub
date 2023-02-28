import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupStepThree = () => {
  const paymentMode = registerationStore(state => state.paymentMode)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)

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
                (
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
              selectedAccountType === "individual" ? "1 x Individual Plan" :
                selectedAccountType === "family" ? paymentMode === "yearly" ? "12 x Family Plan" : "1 x Family Plan" :
                  selectedAccountType === "family" ? "1 x Corporate Plan" :
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
                      <h3>${34.99 * 3}</h3>
                      <h3>Tax: $47.78</h3>
                      <h2 className="text-3xl">Total: <strong>${Math.floor(34.99 * 3 + 47.78)}</strong></h2>
                    </div> :
                    <div>
                      <h3>${29.99 * 12}</h3>
                      <h3>Tax: $47.78</h3>
                      <h2 className="text-3xl">Total: <strong>${Math.floor(29.99 * 12 + 47.78)}</strong></h2>
                    </div>
                ) :
                selectedAccountType === "family" ?
                  (
                    paymentMode === "monthly" ?
                      <div>
                        <div className="flex gap-x-4">
                          <p>3 months initial signup</p>
                          <h3>${54.99 * 3}</h3>
                        </div>
                        <h3>Tax: $47.78</h3>
                        <h2 className="text-3xl">Total: <strong>${Math.floor(54.99 * 3 + 47.78)}</strong></h2>
                      </div> :
                      <div>
                        <h3>${44.99 * 12}</h3>
                        <h3>Tax: $47.78</h3>
                        <h2 className="text-3xl">Total: <strong>${Math.floor(44.99 * 12 + 47.78)}</strong></h2>
                      </div>
                  ) : selectedAccountType === "corporate" ?
                  (
                    <div>
                      <h3>${Math.floor(19.99 * 120)}</h3>
                      <h3>Tax: $47.78</h3>
                      <h2 className="text-3xl">Total: <strong>${Math.floor(19.99 * 120 + 47.78)}</strong></h2>
                    </div>

                    ) :
                    (
                      <div>
                        <h3>$99</h3>
                        <h3>Tax: $47.78</h3>
                        <h2 className="text-3xl">Total: <strong>${Math.floor(99 + 47.78)}</strong></h2>
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