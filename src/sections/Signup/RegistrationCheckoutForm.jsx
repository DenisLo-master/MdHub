import React, { useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SignupStepOne,
  SignupStepTwo,
  SignupStepThree
} from '../../sections'
import { registerationStore } from '../../store/registerationStore'
import { toast } from 'react-hot-toast'
import { SVGLoaderCircles } from '../../assets'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const secret = import.meta.env.VITE_STRIPE_SECRET
console.log(secret)

const RegistrationCheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const signupFormRef = useRef(null)
  const navigate = useNavigate()
  const formStep = registerationStore(state => state.formStep)
  const childForms = registerationStore(state => state.childForms)
  const increaseFormStep = registerationStore(state => state.increaseFormStep)
  const decreaseFormStep = registerationStore(state => state.decreaseFormStep)
  const clearForms = registerationStore(state => state.clearForms)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const paymentMode = registerationStore(state => state.paymentMode)
  const registerationFormData = registerationStore(state => state.registerationFormData)

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
        const response = await fetch('http://localhost:8080/api/v1/auth/register', {
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
      {formStep === 0 ?
        <SignupStepOne /> : formStep === 1 ? <SignupStepTwo /> : <SignupStepThree />
      }
      <div className="w-full flex justify-end pt-6">
        {
          formStep === 0 ? (
            <button
              onClick={() => increaseFormStep()}
              className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
              type="button"
            >
              Continue
            </button>
          ) : formStep === 1 ? (
            <div className="flex gap-x-4">
              <button
                onClick={() => decreaseFormStep()}
                className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
                type="button"
              >
                Prev
              </button>
              <button
                onClick={() => increaseFormStep()}
                className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
                type="button"
              >
                Continue
              </button>
            </div>
          ) : (
            <div className="flex gap-x-4">
              <button
                onClick={() => decreaseFormStep()}
                className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
                type="button"
              >
                Prev
              </button>
              <button type="submit" className={`rounded-full w-72 font-main text-xl group hover:ring-1 hover:ring-primary  py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                <span>Complete Registration</span>
                {isLoading && <SVGLoaderCircles className="text-primary w-4 h-4" />}
              </button>
            </div>
          )
        }
      </div>
    </form>
  )
}

export default RegistrationCheckoutForm