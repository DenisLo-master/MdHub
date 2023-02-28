import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import {
  SignupAccountsTypeNav,
  RegistrationCheckoutForm
}
  from '../../sections'

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key);

const Signup = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) navigate("/dashboard")
  }, [])

  return (
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-8 md:py-20 font-main">
      <article className="w-full space-y-4 flex flex-col items-center">
        <h2 className="text-4xl text-center pb-4">Choose Account Type</h2>
        <SignupAccountsTypeNav />
      </article>
      <article className="w-full">
        <Elements stripe={stripePromise}>
          <RegistrationCheckoutForm />
        </Elements>
      </article>
    </section>
  )
}

export default Signup