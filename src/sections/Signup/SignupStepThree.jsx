import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupStepThree = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const paymentMode = registerationStore(state => state.paymentMode)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const totalChargedAmount = registerationStore(state => state.totalChargedAmount)
  return (
    <section>
      <div className='flex justify-between'>
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            {
              selectedAccountType === "individual" ? "1 x Individual Plan" :
                selectedAccountType === "family" ? "1 x Family Plan" :
                  "1 x Corporate Plan"
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
                  ) :
                  (
                    <div>
                      <h3>${Math.floor(19.99 * 120)}</h3>
                      <h3>Tax: $47.78</h3>
                      <h2 className="text-3xl">Total: <strong>${Math.floor(19.99 * 120 + 47.78)}</strong></h2>
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