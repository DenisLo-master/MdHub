import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { BiCaretDown } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const PersonalInfo = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const { t } = useTranslation()

  return (
    <section className="space-y-6">
      <div className="space-y-4 px-8 text-dark">
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            Phone Number
          </label>
          <div className="flex flex-col gap-y-3">
            <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="phone"
              type="text"
              value={registerationFormData.phone}
              onChange={({target}) => handleRegisterationFormDataChange(target.name, target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            Birthday
          </label>
          <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="dateOfBirth"
              type="text"
              value={registerationFormData.dateOfBirth}
              onChange={({target}) => handleRegisterationFormDataChange(target.name, target.value)}
              required
            />
        </div>
        <div className="flex flex-col gap-y-2 font-body">
          <label htmlFor='address' className="text-dark font-semibold">
            Legal Sex
          </label>
          <div className="flex flex-col gap-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="male"
                checked={registerationFormData.gender === "male"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="female"
                checked={registerationFormData.gender === "female"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="preferNotToSay"
                checked={registerationFormData.gender === "preferNotToSay"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">Prefer not to say</span>
            </label>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default PersonalInfo