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
    <section className="w-full max-w-[49rem] flex flex-col items-center mx-auto py-8 md:py-20 font-main px-4">
      <article className="w-full space-y-4 flex flex-col items-center">
        <h2 className="text-4xl text-center">{t('choose-account-type')}</h2>
        <div className="text-center space-y-1 font-body pb-4">
          <h2>
            {t('we-make-it-easier-to-get-the-care-you-need-for-yourself-your-family-or-your-corporation')}
          </h2>
          <h2>{t('memberships-are-now-as-low-as-29-99-per-month')}</h2>
        </div>
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
