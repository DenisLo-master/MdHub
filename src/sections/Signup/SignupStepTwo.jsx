import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const SignupStepTwo = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  return (
    <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary">
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="address"
          type="text"
          placeholder="Address*"
          value={registerationFormData.address}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="city"
          type="text"
          placeholder="City*"
          value={registerationFormData.city}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="province"
          type="text"
          placeholder="Province*"
          value={registerationFormData.province}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="postalCode"
          type="text"
          placeholder="Postal Code*"
          value={registerationFormData.postalCode}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex">
        <button
          type="button"
          className="flex-1 text-center rounded-full text-xl bg-primary text-white focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="country"
          value="Canada"
          placeholder="Password*"
          required
        >
          Canada
        </button>
      </div>
    </div>
  )
}

export default SignupStepTwo