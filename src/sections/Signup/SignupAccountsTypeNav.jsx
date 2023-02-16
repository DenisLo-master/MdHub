import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupAccountsTypeNav = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const formStep = registerationStore(state => state.formStep)
  const clearForms = registerationStore(state => state.clearForms)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)

  const handleAccountChange = (account) => {
    clearForms()
    if (account === "on demand") {
      setPaymentMode("monthly")
    }
    if (account === "corporate") {
      setPaymentMode("yearly")
    }
    changeSelectedAccountType(account)
  }
  return (
    <div className={`w-full flex justify-around text-primary flex-wrap gap-y-4`}>
      <button
        onClick={() => handleAccountChange("individual")}
        type="button"
        disabled={formStep > 0}
        className={`w-40 md:w-60  rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "individual" && "bg-primary text-white"} $`}
      >
        Individual
      </button>
      <button
        disabled={formStep > 0}
        onClick={() => handleAccountChange("family")}
        type="button"
        className={`w-40 md:w-60 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "family" && "bg-primary text-white"}`}
      >
        Family
      </button>
      <button
        disabled={formStep > 0}
        onClick={() => handleAccountChange("corporate")}
        type="button"
        className={`w-40 md:w-60 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "corporate" && "bg-primary text-white"}`}
      >
        Corporate
      </button>
      <button
        disabled={formStep > 0}
        onClick={() => handleAccountChange("on demand")}
        type="button"
        className={`w-40 md:w-60 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "on demand" && "bg-primary text-white"}`}
      >
        On Demand
      </button>
    </div>
  )
}

export default SignupAccountsTypeNav