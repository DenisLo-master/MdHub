import React, { useState, useRef, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  SignupStepOne,
  SignupStepTwo,
  SignupStepThree,
  SignupAccountsTypeNav,
  PersonalInfo,
  TermsOfService
} from '../../sections'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { registerationStore } from '../../store/registerationStore'
import { toast } from 'react-hot-toast'
import { SVGLoaderCircles } from '../../assets'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <SignupStepOne />,
    <SignupStepTwo />,
    <PersonalInfo/>,
    <TermsOfService/>,
    <SignupStepThree />
  ])

  const getBill = () => {
    if (selectedAccountType === "individual") {
      if (paymentMode === "yearly") {
        return 41377
      }
      return 12069
    }
    if (selectedAccountType === "family") {
      if (paymentMode === "yearly") {
        return 62073
      }
      return 18967
    }
    if (selectedAccountType === "corporate") {
      return 244600
    }

    if (selectedAccountType === "on demand") {
      return 10347
    }
  }


  const isDateValid = (date) => {
    // Check if the input matches the date format mm/dd/yyyy
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
    const isValidDate = regex.test(date);

    if (isValidDate) {
      return true
    } else {
      return false
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    if (selectedAccountType === "corporate" && childForms.length < 5) {
      toast.error("Please add minimum five employees before proceeding", { id: "corporate members add" })
      return
    }

    // if (!isDateValid(registerationFormData.dateOfBirth)) {
    //   toast.error(t('please-enter-the-date-in-the-following-format-mm-dd-yyyy'), { id: "wrong date registration" })
    //   return
    // }

    if (!isLastStep) next()
    if (!stripe || !elements) {
      return;
    }
    // const cardElementContainer = document.querySelector('#card-element');
    // let cardElementEmpty = cardElementContainer.classList.contains('StripeElement--empty');
    // if (cardElementEmpty) {
    //   return
    // }
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
        const response = await fetch('https://mdhub-server.onrender.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...signupFormBody, paymentMethod: paymentMethod.id })
        })
        await response.json()
        if (response.ok) {
          toast.success("Thanks for joining MDHUB, please login below to access your dashboard", {
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
    <div className="pt-8">
      {
        isFirstStep && (
          <article className="w-full max-w-[50rem] mx-auto space-y-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl pt-5 text-center">{t('join-mdhub')}</h2>
            <div className="text-center font-semibold space-y-1 font-body pb-4">
              <h2>
                {t('we-make-it-easier-to-get-the-care-you-need-for-yourself-your-family-or-your-corporation')}
              </h2>
              <h2>{t('memberships-are-now-as-low-as-19-99-per-month')}</h2>
            </div>
            <div className="max-w-[45rem] mx-auto">
              <SignupAccountsTypeNav />
            </div>
          </article>
        )
      }
      {
        currentStepIndex === 1 && (
          <h2 className="text-center text-4xl">Whats your address?</h2>
        )
      }
      {
        currentStepIndex === 2 && (
          <h2 className="text-center text-4xl">Personal Info</h2>
        )
      }
      {
        currentStepIndex === 3 && (
          <div className="text-center space-y-3">
            <h2 className="text-4xl">Terms of Service & Privacy Policy </h2>
            <p className="text-[14px] font-body">In order to join MDHUB, you must agree to the terms below.</p>
          </div>
        )
      }
      <form ref={signupFormRef} onSubmit={handleSignup}
        className={`w-full ${isFirstStep ? "py-12 pb-16" : "pt-6 pb-10"} rounded-[8px] mt-8 relative`}
      >
        {step}
        {!isLastStep && (
          <div className={`absolute px-6 md:px-0 ${currentStepIndex === 0 ? "bottom-20" : currentStepIndex === 1 ? "bottom-14" : currentStepIndex === 2 ? "bottom-14" : currentStepIndex === 3 ? "bottom-14" : ""} left-0 w-full flex justify-center`}>
            <div className={`w-full max-w-[49rem] flex items-start ${isFirstStep ? "justify-between" : "justify-end"} gap-x-4 pt-6 px-4`}>
              {
                isFirstStep &&
                <div className="flex flex-col md:flex-row font-body text-dark items-center gap-x-3 text-lg md:pl-5">
                    <p className="text-lg">{t('already-a-member')}</p>
                    <Link className="text-primary font-semibold" to="/login">
                    {t('Login')}
                  </Link>
                </div>
              }
              {
                !isFirstStep &&
                <button
                  type="button"
                  className={`rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border  border-primary bg-[#1EBC91] text-white`}
                  onClick={back}
                >
                  {t('back')}
                </button>
              }
              <button
                type="submit"
                className={`rounded-full w-28 md:w-56 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border flex justify-center items-center space-x-2  border-primary bg-[#1EBC91] text-white`}
              >
                {
                  isLastStep ?
                    isLoading ?
                      <SVGLoaderCircles className="text-white w-4 h-4" /> :
                      <span>{t('finish')}</span> :
                    <span>{t('next')}</span>
                }
              </button>
            </div>
          </div>
        )}
      </form>
      {/* <p className="text-center font-body pt-4">
          {t('note-currently-users-outside-of-quebec-may-not-access-online-pharmacy-nursing-or-lab-testing-we-will-be-rolling-out-additional-services-for-members-within-the-upcoming-months')}
        </p> */}
    </div>
  )
}

export default RegistrationCheckoutForm
