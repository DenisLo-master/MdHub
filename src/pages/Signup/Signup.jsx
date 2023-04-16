import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SignupAccountsTypeNav,
  RegistrationCheckoutForm
}
  from '../../sections'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'
const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key)
import { useTranslation } from 'react-i18next'

const Signup = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) navigate("/dashboard")
  }, [])

  return (
    <section className="w-full flex flex-col items-center mx-auto py-8 md:py-20 md:pt-32 font-main px-4">
      <article className="w-full">
        <Elements stripe={stripePromise}>
          <RegistrationCheckoutForm />
        </Elements>
      </article>
    </section>
  )
}

export default Signup
