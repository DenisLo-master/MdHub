import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupStepThree = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const paymentMode = registerationStore(state => state.paymentMode)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)
  const formStep = registerationStore(state => state.formStep)
  const individualMonthlyFee = registerationStore(state => state.individualMonthlyFee)
  const individualYearlyFee = registerationStore(state => state.individualYearlyFee)
  const familyMonthlyFee = registerationStore(state => state.familyMonthlyFee)
  const familyYearlyFee = registerationStore(state => state.familyYearlyFee)

  /* const handlePaymentModeChange = () => {
    if (selectedAccountType === "individual") {
      if (paymentMode === "monthly") {
        setTotalAmount(individualMonthlyFee * 3)
      } else {
        setTotalAmount(individualYearlyFee * 12)
      }
    }
    if (selectedAccountType === "family") {
      if (paymentMode === "monthly") {
        setTotalAmount(familyMonthlyFee * 3 * numberOfSelectedFamilyMembers)
      } else {
        setTotalAmount(familyYearlyFee * 12 * numberOfSelectedFamilyMembers)
      }
    } else {
      if (numberOfSelectedEmployees > 10 && numberOfSelectedEmployees <= 50) {
        setTotalAmount(19.99 * 12 * numberOfSelectedEmployees)
      }
      if (numberOfSelectedEmployees > 50 && numberOfSelectedEmployees <= 100) {
        setTotalAmount(17.99 * 12 * numberOfSelectedEmployees)
      }
      if (numberOfSelectedEmployees > 100) {
        setTotalAmount(14.99 * 12 * numberOfSelectedEmployees)
      }
    }
  } */
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
            {
              formStep === 2 && (
                <div className="flex gap-x-4">
                  <button
                    onClick={() => setPaymentMode("yearly")}
                    className={`${paymentMode === 'yearly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                    <h2 className="text-xl">Yearly</h2>
                    <h4 className="text-xs">Best Value</h4>
                  </button>
                  {
                    selectedAccountType === "family" || selectedAccountType === "individual" &&
                    <button
                      onClick={() => setPaymentMode("monthly")}
                      className={`${paymentMode === 'monthly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                      <h2 className="text-xl">Monthly</h2>
                    </button>
                  }
                </div>
              )
            }
          </article>
        </div>
      </article>

      <div className='flex justify-between'>
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            {
              selectedAccountType === "individual" ? "1 x Individual Plan" :
                selectedAccountType === "family" ? "1 x Family Plan" :
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
                        <h3>${54.99 * 3}</h3>
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
      <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary">
        <div className="w-full flex">
          <input
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            className="flex-1 text-center rounded-full text-xl bg-transparent text-primary focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
            name="creditCardNumber"
            type="text"
            value={registerationFormData.creditCardNumber}
            placeholder="Credit Card Number*"
            required
          />
        </div>
        <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
          <input
            className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
            name="creditCardExpiry"
            type="text"
            placeholder="Expiry*(mm/yy)"
            value={registerationFormData.creditCardExpiry}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            required
          />
          <input
            className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
            name="creditCardCvc"
            type="text"
            placeholder="CVC*"
            value={registerationFormData.creditCardCvc}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            required
          />
        </div>
      </div>
    </section>
  )
}

export default SignupStepThree