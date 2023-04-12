import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { BiCaretDown } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const SignupStepTwo = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const { t } = useTranslation()
  const [addressLineOne, setAddressLineOne] = useState("")
  const [addressLineTwo, setAddressLineTwo] = useState("")
  const [addressLineThree, setAddressLineThree] = useState("")

  const handleAddressChange = (e) => {
    e.target.name === "address" ? setAddressLineOne(e.target.value) : e.target.name === "address2" ? setAddressLineTwo(e.target.value) : setAddressLineThree(e.target.value)
    const address = `${addressLineOne}, ${addressLineTwo}, ${addressLineThree}`
    handleRegisterationFormDataChange("address", address)
  }
  
  return (
    <section className="space-y-6">
      <article className="w-full">
        <div className="w-full flex justify-between items-center">
        </div>
      </article>
      <div className="space-y-4 px-8 text-primary">
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            Address
          </label>
          <div className="flex flex-col gap-y-3">
            <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="address"
              type="text"
              value={addressLineOne}
              onChange={(e) => handleAddressChange(e)}
              required
            />
            <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="address2"
              type="text"
              value={addressLineTwo}
              onChange={(e) => handleAddressChange(e)}
            />
            <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="address3"
              type="text"
              value={addressLineThree}
              onChange={(e) => handleAddressChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            Country
          </label>
          <div className="relative">
            <CountryDropdown
              defaultOptionLabel={t('select-country')}
              className="w-full rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary bg-white appearance-none"
              value={registerationFormData.country}
              onChange={(val) => handleRegisterationFormDataChange("country", val)} 
            />
            <BiCaretDown className="absolute text-2xl right-4 top-[10px]"/>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            Province
          </label>
          <div className="relative">
            <RegionDropdown
              defaultOptionLabel={t('select-province-state')}
              blankOptionLabel={t('select-province-state-0')}
              className="w-full rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary bg-white appearance-none"
              country={registerationFormData.country}
              value={registerationFormData.region}
              onChange={(val) => handleRegisterationFormDataChange("region", val)}
            />
            <BiCaretDown className="absolute text-2xl right-4 top-[10px]"/>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default SignupStepTwo