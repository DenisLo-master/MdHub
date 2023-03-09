import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { registerationStore } from '../../store/registerationStore'

const NursingAppointmentStepThree = () => {
  const nursingAppointmentBill = registerationStore(state => state.nursingAppointmentBill)
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">Your Order</h2>
          <h3 className="font-body">
            1 hour minimum nursing fee: ${nursingAppointmentBill > 0 ? nursingAppointmentBill : 99}
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">Subtotal</h2>
          <div className="font-body">
            <h3>${nursingAppointmentBill > 0 ? nursingAppointmentBill : 99}</h3>
            <h3>Tax: ${nursingAppointmentBill > 0 ? (nursingAppointmentBill * 0.14975).toFixed(2) : (99 * 0.14975).toFixed(2)}</h3>
            <h2 className="text-3xl">Total: <strong>${nursingAppointmentBill > 0 ? (nursingAppointmentBill + (nursingAppointmentBill * 0.14975)).toFixed(2) : 113.83}</strong></h2>
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