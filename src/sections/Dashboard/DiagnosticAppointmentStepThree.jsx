import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'

const DiagnosticAppointmentStepThree = () => {
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            1 hour minimum nursing fee: $99
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <div className="font-body">
            <h3>$99</h3>
            <h3>Tax: $47.78</h3>
            <h2 className="text-3xl">Total: <strong>${Math.floor(99 + 47.78)}</strong></h2>
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

export default DiagnosticAppointmentStepThree