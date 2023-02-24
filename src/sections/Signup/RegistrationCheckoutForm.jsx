import React, { useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SignupStepOne,
  SignupStepTwo,
  SignupStepThree
} from '../../sections'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { registerationStore } from '../../store/registerationStore'
import { toast } from 'react-hot-toast'
import { SVGLoaderCircles } from '../../assets'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const secret = import.meta.env.VITE_STRIPE

const RegistrationCheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const signupFormRef = useRef(null)
  const navigate = useNavigate()
  const childForms = registerationStore(state => state.childForms)
  const clearForms = registerationStore(state => state.clearForms)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const paymentMode = registerationStore(state => state.paymentMode)
  const registerationFormData = registerationStore(state => state.registerationFormData)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <SignupStepOne />,
    <SignupStepTwo />,
    <SignupStepThree />
  ])

  const getBill = () => {
    if (selectedAccountType === "individual") {
      if (paymentMode === "yearly") {
        return 40700
      }
      return 15200
    }
    if (selectedAccountType === "family") {
      if (paymentMode === "yearly") {
        return 58700
      }
      return 21200
    }
    if (selectedAccountType === "corporate") {
      return 244600
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    if (!isLastStep) next()
    if (!stripe || !elements) {
      return;
    }
    const cardElementContainer = document.querySelector('#card-element');
    let cardElementEmpty = cardElementContainer.classList.contains('StripeElement--empty');
    if (cardElementEmpty) {
      return
    }
    const filledChildForms = childForms.filter(form => Object.values(form).every(value => value !== ''));
    if (filledChildForms.length < childForms.length) {
      toast.error("Please fill all the values", { id: "fill values" })
      return;
    }
    setIsLoading(true)
    const signupFormBody = {
      accountType: selectedAccountType,
      primaryUserData: {
        ...registerationFormData,
        paymentMode,
        accountType: selectedAccountType
      },
      isChildUser: false,
      recurringPayment: selectedAccountType === "on demand" ? true : false,
      childUsersData: childForms,
      totalAmount: getBill()
    }
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const response = await fetch('https://mdhub-backend.onrender.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...signupFormBody, paymentMethod: paymentMethod.id })
        })
        await response.json()
        if (response.ok) {
          toast.success("Successfully created your account", {
            id: "Register"
          })
          navigate('/login')
          clearForms()
        } else {
          toast.error("Something went wrong", {
            id: "signup-error"
          })
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form ref={signupFormRef} onSubmit={handleSignup} className="w-full">
      {step}
      <div className="w-full flex justify-end gap-x-4 pt-6">
        {
          !isFirstStep &&
          <button
              type="button" 
              className={`rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border  border-primary bg-primary text-white`}
              onClick={back}
            >
              Back
            </button>
        }
        <button 
          type="submit"
          className={`rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary  py-3 border flex justify-center items-center space-x-2  border-primary bg-primary text-white`}
        >
          {
            isLastStep ?
              isLoading ?
                <SVGLoaderCircles className="text-primary w-4 h-4" /> :
                <span>Finish</span> :
              <span>Next</span>
          }
        </button>
      </div>
    </form>
  )
}

export default RegistrationCheckoutForm