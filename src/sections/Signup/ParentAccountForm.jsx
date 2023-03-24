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

  const getStrengthLabel = (strengthScore) => {
    switch (strengthScore) {
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  }

  const getSuggestions = (strengthScore) => {
    const suggestions = [];

    if (strengthScore < 2) {
      suggestions.push("Password should be at least 8 characters long");
    }

    if (strengthScore < 3) {
      suggestions.push("Password should include at least one uppercase letter");
      suggestions.push("Password should include at least one lowercase letter");
    }

    if (strengthScore < 4) {
      suggestions.push("Password should include at least one number");
    }

    if (strengthScore < 5) {
      suggestions.push("Password should include at least one special character");
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
      fulfilledConditions.push("Minimum length of 8 characters")
    }

    if (hasLowerCase) {
      strengthScore++
      fulfilledConditions.push("At least one lowercase letter")
    }

    if (hasUpperCase) {
      strengthScore++
      fulfilledConditions.push("At least one uppercase letter")
    }

    if (hasNumbers) {
      strengthScore++
      fulfilledConditions.push("At least one number")
    }

    if (hasSpecialChars) {
      strengthScore++
      fulfilledConditions.push("At least one special character")
    }

    setStrength(getStrengthLabel(strengthScore))
    setSuggestions(getSuggestions(strengthScore))
    setConditionsFulfilled(fulfilledConditions)
  }


  const handleDateChange = (date) => {
    handleRegisterationFormDataChange("dateOfBirth", date)
    const regex = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/
    if (regex.test(date)) {
      setCorrectDate(true)
    } else {
      setCorrectDate(false)
    }
  }

  return (
    <div className="py-8 lg:py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
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
          <div>
            <ul>
              {conditionsFulfilled.map((condition, index) => (
                <li
                  className="text-green-600 flex items-center gap-x-1 font-body gap-y-2"
                  key={index}
                >
                  <AiFillCheckSquare />
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
                  <AiFillCloseCircle />
                  <p>{suggestion}</p>
                </li>
              ))}
            </ul>
            <p className="absolute top-12 right-0 font-body">
              Password Strength: <strong>{strength}</strong>
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
          {
            registerationFormData.dateOfBirth && (
              <div className={`flex gap-x-2 items-center ${correctDate ? "text-green-600" : "text-red-600"}`}>
                {correctDate ? <AiFillCheckSquare /> : <AiFillCloseCircle />}
                <p>date format:{" "}{dayjs(new Date()).format('MM/DD/YYYY')}</p>
              </div>
            )
          }
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
            <p className='text-xl'>{t('add-family-member')}</p>
          </button>
          <div className="lg:absolute bottom-4 right-8 text-gray-600 font-body">
            <p className='text-xl'>{t('account-admin')}</p>
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
            <p className='text-xl'>{t('add-employee')}</p>
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