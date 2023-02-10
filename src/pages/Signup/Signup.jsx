import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import { SignupStepOne, SignupStepTwo, SignupStepThree } from '../../sections'

const Signup = () => {
  const signupFormRef = useRef(null)
  const navigate = useNavigate()
  const formStep = registerationStore(state => state.formStep)
  const increaseFormStep = registerationStore(state => state.increaseFormStep)
  const decreaseFormStep = registerationStore(state => state.decreaseFormStep)
  const clearForms = registerationStore(state => state.clearForms)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  const paymentMode = registerationStore(state => state.paymentMode)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const firstFamilyMemberFormData = registerationStore(state => state.firstFamilyMemberFormData)
  const secondFamilyMemberFormData = registerationStore(state => state.secondFamilyMemberFormData)
  const thirdFamilyMemberFormData = registerationStore(state => state.thirdFamilyMemberFormData)
  const fourthFamilyMemberFormData = registerationStore(state => state.fourthFamilyMemberFormData)

  const getBill = () => {
    if (selectedAccountType === "individual") {
      if (paymentMode === "yearly") {
        return 407
      }
      return 152
    }
    if (selectedAccountType === "family") {
      if (paymentMode === "yearly") {
        return 587
      }
      return 212
    }
    if (selectedAccountType === "corporate") {
      return 2446
    }


  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const signupFormBody = {
      accountType: selectedAccountType,
      primaryUserData: registerationFormData,
      isChildUser: false,
      childUsersData: selectedAccountType === "family" ? [
        firstFamilyMemberFormData.firstName.length && { ...firstFamilyMemberFormData },
        secondFamilyMemberFormData.firstName.length && { ...secondFamilyMemberFormData },
        thirdFamilyMemberFormData.firstName.length && { ...thirdFamilyMemberFormData },
        fourthFamilyMemberFormData.firstName.length && { ...fourthFamilyMemberFormData },
      ] : [],
      totalAmount: getBill()
    }
    try {
      const response = await fetch('https://mdhub-backend.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupFormBody)
      })
      const data = await response.json()
      clearForms()
      navigate('/login')

    } catch (error) {
      console.log(error.message)
    } 
  }

  return (
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-8 md:py-20 font-main">
      <article className="w-full space-y-4 flex flex-col items-center">
        <h2 className="text-4xl text-center pb-4">Choose Account Type</h2>
        <div className="w-full flex justify-around md:justify-between text-primary flex-wrap gap-y-4">
          <button
            onClick={() => changeSelectedAccountType("individual")}
            type="button"
            className={`w-40 md:48  rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "individual" && "bg-primary text-white"}`}
          >
            Individual
          </button>
          <button
            onClick={() => changeSelectedAccountType("family")}
            type="button"
            className={`w-40 md:48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "family" && "bg-primary text-white"}`}
          >
            Family
          </button>
          <button
            onClick={() => changeSelectedAccountType("corporate")}
            type="button"
            className={`w-40 md:48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "corporate" && "bg-primary text-white"}`}
          >
            Corporate
          </button>
        </div>
      </article>
      <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-5xl ">{formStep === 0 ? "Step 1" : formStep === 1 ? "Step 2" : "Step 3"}</h2>
            <div className="font-body text-xl font-light">
              {
                formStep === 0 ?
                  <div className="text-right">
                    <p>Enter member details</p>
                    <p className="text-sm">
                      {
                        selectedAccountType === "family" ? "Upto 4 Family Members" : selectedAccountType === "corporate" && "Upto 10 Employees"
                      }
                    </p>
                  </div> : formStep === 1 ? "Billing Address" : "Payment"
              }
            </div>
          </article>
          {
            formStep === 2 && (
              <div className="flex gap-x-4">
                <button
                  onClick={() => setPaymentMode("yearly")}
                  className={`${paymentMode === 'yearly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                  <h2 className="text-xl">Yearly</h2>
                  <h4 className="text-xs">Best Value</h4>
                </button>
                {
                  selectedAccountType !== "corporate" && 
                  <button
                    onClick={() => setPaymentMode("monthly")}
                    className={`${paymentMode === 'monthly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                    <h2 className="text-xl">Monthly</h2>
                  </button>
                }
              </div>
            )
          }
        </div>
      </article>
      <article className="w-full">
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
                      <button
                        className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
                        type="Submit"
                      >
                        Submit
                      </button>
                    </div>
              )
            }
          </div>
        </form>
      </article>
    </section>

  )
}

export default Signup