import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { UpdateBillingSection } from '../../sections'

const UpdateBillingInfo = () => {
  const key = import.meta.env.VITE_STRIPE
  const stripePromise = loadStripe(key)

  return (
    <Elements stripe={stripePromise}>
      <UpdateBillingSection />
    </Elements>
  )
}

export default UpdateBillingInfo