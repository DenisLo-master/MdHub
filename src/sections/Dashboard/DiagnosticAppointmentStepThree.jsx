import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { registerationStore } from '../../store/registerationStore'

const DiagnosticAppointmentStepThree = () => {
  const diagnosticsAppointmentBill = registerationStore(state => state.diagnosticsAppointmentBill)
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            1 hour minimum nursing fee: ${diagnosticsAppointmentBill}
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <div className="font-body">
            <h3>${diagnosticsAppointmentBill}</h3>
            <h3>Tax: ${(diagnosticsAppointmentBill * 0.14975).toFixed(2)}</h3>
            <h2 className="text-3xl">Total: <strong>${(diagnosticsAppointmentBill + (diagnosticsAppointmentBill * 0.014975)).toFixed(2)}</strong></h2>
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