import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import { SignupStepOne, SignupStepTwo, SignupStepThree, SignupAccountsTypeNav } from '../../sections'

const Signup = () => {
  const signupFormRef = useRef(null)
  const navigate = useNavigate()
  const formStep = registerationStore(state => state.formStep)
  const increaseFormStep = registerationStore(state => state.increaseFormStep)
  const decreaseFormStep = registerationStore(state => state.decreaseFormStep)
  const clearForms = registerationStore(state => state.clearForms)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const paymentMode = registerationStore(state => state.paymentMode)
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
      primaryUserData: {
        ...registerationFormData,
        paymentMode,
        accountType: selectedAccountType
      },
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