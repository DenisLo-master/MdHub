import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { BiCaretDown } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import InputMask from "react-input-mask";

const PersonalInfo = () => {
  const [previousLength, setPreviousLength] = useState(0)
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const { t } = useTranslation()

  const handlePhoneNumberChange = (e) => {
    // Regular expression to allow only numeric input
    const numericRegex = /^[0-9\b]+$/;
    const input = e.target.value;
    // If input matches numericRegex or input is empty, update phoneNumber state
    if (numericRegex.test(input) || input === "") {
      handleRegisterationFormDataChange(e.target.name, e.target.value)
    }
  }



  const handleDateChange = (e) => {
    let input = e.target.value;
    if (input.length < previousLength) { // Backspace key
      input = input.slice(0, -1);
    } else if (input.length === 1 && input < 10 && input > 1) {
      input = "0" + input;
    } else if (input.length === 2 && !input.includes("/")) {
      input += "/";
    } else if (input.length === 5 && input.charAt(2) === "/") {
      input += "/";
    }
    
    handleRegisterationFormDataChange(e.target.name, input)
    setPreviousLength(input.length);
  }

  console.log(registerationFormData.dateOfBirth)

  return (
    <section className="max-w-[49rem] mx-auto bg-[#f5f5f5] py-12 pb-24">
      <div className="space-y-4 px-8 text-dark">
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor='address' className="font-body text-dark font-semibold">
            {t('phone-number')}
          </label>
          <div className="flex flex-col gap-y-3">
            <input
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              placeholder='(123) 456-7890'
              pattern="\d{10}"
              title="Please enter exactly 10 digits."
              name="phone"
              type="tel"
              value={registerationFormData.phone}
              onChange={({target}) => handleRegisterationFormDataChange("phone", target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
            <label htmlFor='address' className="font-body text-dark font-semibold">
              {t('birthday')}
            </label>
            <InputMask
              value={registerationFormData.dateOfBirth}
              onChange={({ target }) => handleRegisterationFormDataChange("dateOfBirth", target.value)}
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              mask="99/99/9999"
              placeholder="MM/DD/YYYY"
              required
              pattern='^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/((19|20)\d\d)$'
              title="Please follow this format MM/DD/YYYY"
            />
        </div>
        <div className="flex flex-col gap-y-2 font-body">
          <label htmlFor='address' className="text-dark font-semibold">
            {t('legal-sex')}
          </label>
          <div className="flex flex-col gap-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="female"
                checked={registerationFormData.gender === "female"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">{t('female')}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="male"
                checked={registerationFormData.gender === "male"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">{t('male')}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 bg-green-500"
                value="preferNotToSay"
                checked={registerationFormData.gender === "preferNotToSay"}
                onChange={({target}) => handleRegisterationFormDataChange("gender", target.value)}
              />
              <span className="ml-2 text-gray-700">{t('prefer-not-to-say')}</span>
            </label>
          </div>        
        </div>      
      </div>
    </section>
  )
}

export default PersonalInfo