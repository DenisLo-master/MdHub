import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { registerationStore } from '../../store/registerationStore'
import { BiCaretDown } from 'react-icons/bi'
import { useTranslation } from 'react-i18next' 
import { AiFillCloseCircle, AiFillCheckSquare } from 'react-icons/ai'
import dayjs from 'dayjs'


const ParentAccountForm = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const addChildAccount = registerationStore(state => state.addChildAccount)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const childForms = registerationStore(state => state.childForms)
  const { t } = useTranslation()
  const [strength, setStrength] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [conditionsFulfilled, setConditionsFulfilled] = useState([])
  const [correctDate, setCorrectDate] = useState(false)
  const [previousLength, setPreviousLength] = useState(0);

  const getStrengthLabel = (strengthScore) => {
    switch (strengthScore) {
      case 1:
        return t('weak');
      case 2:
        return t('fair');
      case 3:
        return t('good');
      case 4:
        return t('strong');
      case 5:
        return t('very-strong');
      default:
        return "";
    }
  }

  const getSuggestions = (strengthScore) => {
    const suggestions = []

    if (strengthScore < 2) {
      suggestions.push(t('password-should-be-at-least-8-characters-long'))
    }

    if (strengthScore < 3) {
      suggestions.push(t('password-should-include-at-least-one-uppercase-letter'))
      suggestions.push(t('password-should-include-at-least-one-lowercase-letter'))
    }

    if (strengthScore < 4) {
      suggestions.push(t('password-should-include-at-least-one-number'))
    }

    if (strengthScore < 5) {
      suggestions.push(t('password-should-include-at-least-one-special-character'))
    }

    return suggestions;
  }

  const checkPasswordStrength = (password) => {
    let strengthScore = 0;
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChars = /[\W]/.test(password)
    const fulfilledConditions = []

    if (password.length >= minLength) {
      strengthScore++
      fulfilledConditions.push(t('minimum-length-of-8-characters'))
    }

    if (hasLowerCase) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-lowercase-letter'))
    }

    if (hasUpperCase) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-uppercase-letter'))
    }

    if (hasNumbers) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-number'))
    }

    if (hasSpecialChars) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-special-character'))
    }

    setStrength(getStrengthLabel(strengthScore))
    setSuggestions(getSuggestions(strengthScore))
    setConditionsFulfilled(fulfilledConditions)
  }


  const handleDateChange = (date) => {
    let input = date;
    if (input.length < previousLength) { // Backspace key
      input = input.slice(0, -1);
    } else if (input.length === 1 && input < 10 && input > 0) {
      input = "0" + input;
    } else if (input.length === 2 && !input.includes("/")) {
      input += "/";
    } else if (input.length === 5 && input.charAt(2) === "/") {
      input += "/";
    }

    handleRegisterationFormDataChange("dateOfBirth", input);

    setPreviousLength(input.length);

  }

  return (
    <div className="py-8 lg:py-16 border space-y-4 px-4 md:px-8  bg-[#F5F5F5] rounded-[8px] text-primary relative">
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="firstName"
          type="text"
          placeholder={t('first-name')}
          value={registerationFormData.firstName}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="lastName"
          type="text"
          placeholder={t('last-name')}
          value={registerationFormData.lastName}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="email"
          type="email"
          placeholder={t('email')}
          value={registerationFormData.email}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="phone"
          type="tel"
          placeholder={t('phone')}
          value={registerationFormData.phone}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-y-2 relative">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="password"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          title={t('your-password-must-be-at-least-8-characters-long-and-contain-at-least-one-uppercase-letter-one-lowercase-letter-and-one-number')}
          placeholder={t('password')}
          value={registerationFormData.password}
          onChange={({ target }) => {
            handleRegisterationFormDataChange(target.name, target.value)
            checkPasswordStrength(target.value)
          }}
          required
        />
        {registerationFormData.password && (
          <div className="pt-6">
            <ul>
              {conditionsFulfilled.map((condition, index) => (
                <li
                  className="text-green-600 flex items-center gap-x-1 font-body gap-y-2"
                  key={index}
                >
                  <AiFillCheckSquare className="hidden md:block" />
                  <p>{condition}</p>
                </li>
              ))}
            </ul>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className="text-red-600 flex items-center gap-x-1 font-body gap-y-2"
                  key={index}
                >
                  <AiFillCloseCircle className="hidden md:block" />
                  <p>{suggestion}</p>
                </li>
              ))}
            </ul>
            <p className="absolute top-[52px] left-0 md:right-0 font-body text-sm md:text-base">
              {t('password-strength')}: <strong>{strength}</strong>
            </p>
          </div>
        )}
      </div>
      <div className="text-xl flex flex-col lg:flex-row gap-y-4 items-center w-full gap-x-6">

        <div className="w-full flex-1 flex relative">
          <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
          <select
            required
            className="flex-1 appearance-none rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border bg-white"
            name="gender"
            placeholder="select time"
              value={registerationFormData.gender}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          >
            <option value="">{t('gender')}</option>
            <option value="male">{t('male')}</option>
            <option value="female">{t('female')}</option>
            <option value="preferNotToSay">{t('prefer-not-to-say')}</option>
          </select>
        </div>


        <div className="w-full flex-1 flex flex-col">
          <input
            className="flex-1 rounded-full text-xl lg:text-lg focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
            type="text"            
            value={registerationFormData.dateOfBirth} 
            onChange={({ target }) => handleDateChange(target.value)}
            placeholder={t('date-of-birth-mm-dd-yyyy')}
          />
        </div>
      </div>
      {selectedAccountType === "family" && (
        <div className="text-center flex lg:block flex-col items-center gap-y-4">
          <button
            disabled={childForms.length > 1}
            onClick={addChildAccount}
            className="lg:absolute bottom-4 left-8 flex gap-x-2 text-gray-600 font-body items-center text-3xl cursor-pointer"
          >
            <BsPlusCircle />
            <p className='text-base md:text-xl'>{t('add-family-member')}</p>
          </button>
          <div className="lg:absolute bottom-4 right-8 text-gray-600 font-body">
            <p className='text-base md:text-xl'>{t('account-admin')}</p>
          </div>
        </div>
      )}
      {selectedAccountType === "corporate" && (
        <div className="text-center flex lg:block flex-col items-center gap-y-4">
          <button
            disabled={childForms.length > 8}
            onClick={addChildAccount}
            className="lg:absolute bottom-4 left-8 flex gap-x-2 text-gray-600 font-body items-center text-3xl cursor-pointer"
          >
            <BsPlusCircle />
            <p className='text-base md:text-xl'>{t('add-employee')}</p>
          </button>
          <div className="lg:absolute bottom-4 right-8 text-gray-600 font-body">
            <p className='text-xl'>{t('account-admin')}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentAccountForm