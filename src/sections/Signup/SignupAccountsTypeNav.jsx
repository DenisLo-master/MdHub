import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupAccountsTypeNav = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  return (
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
  )
}

export default SignupAccountsTypeNav