import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import { SignupStepOne, SignupStepTwo } from '../../sections'

const Signup = () => {
  const signupFormRef = useRef(null)
  const navigate = useNavigate()
  const formStep = registerationStore(state => state.formStep)
  const increaseFormStep = registerationStore(state => state.increaseFormStep)
  const decreaseFormStep = registerationStore(state => state.decreaseFormStep)
  const clearRegisterationFormData = registerationStore(state => state.clearRegisterationFormData)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      clearRegisterationFormData()
      await response.json()
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
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
      <article className="w-full self-start max-w-xs pt-8 pb-4 mb-4 border-b-[3px] border-b-primary flex items-baseline gap-x-6">
        <h2 className="text-5xl ">{formStep === 0 ? "Step 1" : "Step 2"}</h2>
        <p className="font-body text-xl font-light">
          {formStep === 0 ? "Enter member details" : "Billing Address"}
        </p>
      </article>
      <article className="w-full">
        <form ref={signupFormRef} onSubmit={handleSignup} className="w-full">
          {formStep === 0 ?
            <SignupStepOne /> : <SignupStepTwo />
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
                    type="submit"
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