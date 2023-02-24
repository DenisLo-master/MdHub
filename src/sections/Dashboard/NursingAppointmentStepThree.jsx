import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'

const NursingAppointmentStepThree = () => {
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            1 x Nursing Care
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <h3 className="font-body">
            1 x Nursing Care
          </h3>
          <div className="font-body">
            <div className="flex items-center gap-x-4">
              <small>Minimum fee four 1 hour</small>
              <h3>$99</h3>
            </div>
            <h3>Tax: $47.78</h3>
            <h2 className="text-3xl">Total: <strong>${Math.floor(99 + 47.78)}</strong></h2>
          </div>
        </article>
      </div>
      <CardElement
        className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
      />
    </div>
  )
}

export default NursingAppointmentStepThree