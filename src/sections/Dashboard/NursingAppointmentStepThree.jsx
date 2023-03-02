import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { registerationStore } from '../../store/registerationStore'

const NursingAppointmentStepThree = () => {
  const selectedHomecareOptions = registerationStore(state => state.selectedHomecareOptions)
  const selectedNursingOptions = registerationStore(state => state.selectedNursingOptions)

  const getAmount = () => {
    if (selectedHomecareOptions.length && selectedNursingOptions.length) {
      return (99)
    } else if (selectedHomecareOptions.length && !selectedNursingOptions.length) {
      return 59.99
    } else {
      return 99
    }
  }
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            1 hour minimum nursing fee: ${getAmount()}
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <div className="font-body">
            <h3>${getAmount()}</h3>
            <h3>Tax: $47.78</h3>
            <h2 className="text-3xl">Total: <strong>${Math.floor(getAmount() + 47.78)}</strong></h2>
          </div>
        </article>
      </div>
      <div>
        <CardElement
          className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
        />
      </div>
    </div>
  )
}

export default NursingAppointmentStepThree