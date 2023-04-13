import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const SignupAccountsTypeNav = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const formStep = registerationStore(state => state.formStep)
  const clearForms = registerationStore(state => state.clearForms)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)

  const { t } = useTranslation()

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
        className={`w-40 md:w-64  rounded-full text-xl hover:ring-1 hover:ring-primary lg:px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "individual" && "bg-gradient-secondary text-white"} $`}
      >
        {t('individual')}
      </button>
      <button
        onClick={() => handleAccountChange("family")}
        type="button"
        className={`w-40 md:w-64 rounded-full text-xl hover:ring-1 hover:ring-primary lg:px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "family" && "bg-gradient-secondary text-white"}`}
      >
        {t('family')}
      </button>
      <button
        onClick={() => handleAccountChange("corporate")}
        type="button"
        className={`w-40 md:w-64 rounded-full text-xl hover:ring-1 hover:ring-primary lg:px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "corporate" && "bg-gradient-secondary text-white"}`}
      >
        {t('corporate')}
      </button>
      <button
        onClick={() => handleAccountChange("on demand")}
        type="button"
        className={`w-40 md:w-64 rounded-full text-xl hover:ring-1 hover:ring-primary lg:px-16 py-2 border flex justify-center items-center border-primary bg-transparent ${selectedAccountType === "on demand" && "bg-gradient-secondary text-white"}`}
      >
        {t('on-demand')}
      </button>
    </div>
  )
}

export default SignupAccountsTypeNav