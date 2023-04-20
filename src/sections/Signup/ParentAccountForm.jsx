import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { registerationStore } from '../../store/registerationStore'
import { BiCaretDown } from 'react-icons/bi'
import { useTranslation } from 'react-i18next' 
import { AiFillCloseCircle, AiFillCheckSquare } from 'react-icons/ai'
import dayjs from 'dayjs'
import { ShowPasswordIcon } from '../../assets'


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
  const [showPassword, setShowPassword] = useState(false)
  const [minimumLengthPassed, setMinimumLengthPassed] = useState(false)
  const [hasLowerAndUppercasePassed, setHasLowerAndUppercasePassed] = useState(false)
  const [hasNumberPassed, setHasNumberPassed] = useState(false)
  const [hasSequenceRepeated, setHasSequenceRepeated] = useState(false)
  const [hasSeriesRepeated, sethasSeriesRepeated] = useState(false)

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
    const isSequenceRepeated = /(.)(\1{2})/g.test(password)
    const checkSequence = /(.)(?=\1)(.)(\1|\3)/g.test(password)
    const fulfilledConditions = []

    if (password.length >= minLength) {
      setMinimumLengthPassed(true)
      strengthScore++
      fulfilledConditions.push(t('minimum-length-of-8-characters'))
    } else {
      setMinimumLengthPassed(false)
    }

    if(hasLowerCase && hasUpperCase) {
      setHasLowerAndUppercasePassed(true)
    } else {
      setHasLowerAndUppercasePassed(false)
    }

    if (hasLowerCase) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-lowercase-letter'))
    }

    if (hasUpperCase) {
      strengthScore++
      fulfilledConditions.push(t('at-least-one-uppercase-letter'))
    }

    if(isSequenceRepeated) {
      setHasSequenceRepeated(true)
    } else {
      setHasSequenceRepeated(false)
    }

    if (hasNumbers) {
      setHasNumberPassed(true)
      strengthScore++
      fulfilledConditions.push(t('at-least-one-number'))
    } else {
      setHasNumberPassed(false)
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
    <div className="space-y-6 px-4 md:px-8  rounded-[8px] text-dark relative">
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <article className="flex-1 flex flex-col gap-y-2">
          <label htmlFor='firstName' className="font-body text-dark font-semibold">
            {t('first-name-0')}
          </label>
          <input
            id="firstName"
            className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
            name="firstName"
            type="text"
            value={registerationFormData.firstName}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            required
          />
        </article>
        <article className="flex-1 flex flex-col gap-y-2">
          <label htmlFor='lastName' className="font-body text-dark font-semibold">
            {t('last-name-0')}
          </label>
          <input
            id="lastName"
            className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
            name="lastName"
            type="text"
            value={registerationFormData.lastName}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            required
          />
        </article>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <label htmlFor='email' className="font-body text-dark font-semibold">
          {t('email-0')}
        </label>
        <input
          id="email"
          className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
          name="email"
          type="email"
          value={registerationFormData.email}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        {/* <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="phone"
          type="tel"
          placeholder={t('phone')}
          value={registerationFormData.phone}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        /> */}
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <label htmlFor='password' className="font-body text-dark font-semibold">
          {t('create-a-password')}
        </label>
        <div className="w-full">
          <div className="relative flex flex-col">
            <input
              id="password"
              className="rounded-md text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary"
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
              title={t('your-password-must-be-at-least-8-characters-long-and-contain-at-least-one-uppercase-letter-one-lowercase-letter-and-one-number')}
              value={registerationFormData.password}
              onChange={({ target }) => {
                handleRegisterationFormDataChange(target.name, target.value)
                checkPasswordStrength(target.value)
              }}
              required
            />
            <div onClick={() => setShowPassword(!showPassword)} className="font-body text-dark absolute flex items-center gap-x-2 right-4 top-[12px] cursor-pointer">
              <ShowPasswordIcon />
              <p>{t('show')}</p>
            </div>
          </div>
          {/* {registerationFormData.password && (
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
          )} */}
        </div>
        <ul className="font-body text-dark list-disc pt-4 pl-5">
          <li className={`${minimumLengthPassed && "text-green-400"}`}>{t('8-or-more-characters')}</li>
          <li className={`${hasLowerAndUppercasePassed && "text-green-400"}`}>{t('upper-lowercase-letters')}</li>
          <li className={`${hasNumberPassed && "text-green-400"}`}>{t('at-least-one-number')}</li>
          <li className={`${!hasSequenceRepeated && "text-green-400"}`}>{t('no-repetitive-characters-e-g-bbb-aaa')}</li>
          <li>{t('no-sequential-characters-e-g-abc-123-321-or-cba')}</li>
        </ul>
      </div>
      {/* <div className="text-xl flex flex-col lg:flex-row gap-y-4 items-center w-full gap-x-6">

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
      </div> */}
      {selectedAccountType === "family" && (
        <div className="text-center flex lg:block flex-col items-center gap-y-4">
          <button
            disabled={childForms.length > 1}
            onClick={addChildAccount}
            className="lg:absolute -bottom-44 left-8 flex gap-x-2 text-gray-600 font-body items-center text-xl cursor-pointer"
          >
            <BsPlusCircle />
            <p className='text-base md:text-xl'>{t('add-family-member')}</p>
          </button>
          <div className="lg:absolute -bottom-44 right-8 text-gray-600 font-body">
            <p className='text-base md:text-xl'>{t('account-admin')}</p>
          </div>
        </div>
      )}
      {selectedAccountType === "corporate" && (
        <div className="text-center flex lg:block flex-col items-center gap-y-4">
          <button
            disabled={childForms.length > 8}
            onClick={addChildAccount}
            className="lg:absolute -bottom-44 left-8 flex gap-x-2 text-gray-600 font-body items-center text-xl cursor-pointer"
          >
            <BsPlusCircle />
            <p className='text-base md:text-xl'>{t('add-employee')}</p>
          </button>
          <div className="lg:absolute bottom-44 right-8 text-gray-600 font-body">
            <p className='text-xl'>{t('account-admin')}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentAccountForm