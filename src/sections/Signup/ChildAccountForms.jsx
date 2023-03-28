import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { registerationStore } from '../../store/registerationStore'
import dayjs from "dayjs"
import { BiCaretDown } from 'react-icons/bi'
import { AiFillCloseCircle, AiFillCheckSquare } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const ChildAccountForms = () => {
  const [isOlderThanFourteen, setIsOlderThanFourteen] = useState(true)
  const handleChildAccountInputChange = registerationStore(state => state.handleChildAccountInputChange)
  const handleRemoveChildForms = registerationStore(state => state.handleRemoveChildForms)
  const childForms = registerationStore(state => state.childForms)
  const addChildAccount = registerationStore(state => state.addChildAccount)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const [strength, setStrength] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [conditionsFulfilled, setConditionsFulfilled] = useState([])
  const [correctDate, setCorrectDate] = useState(false)
  const { t } = useTranslation()

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

  const handleDateChange = (date, index) => {
    // Get current date
    const currentDate = dayjs();

    // Get date 14 years before current date
    const minDate = currentDate.subtract(14, 'year');

    // Get date 14 years after current date
    const maxDate = currentDate.add(14, 'year');

    // Convert selected date to dayjs object
    const selectedDate = dayjs(date);

    // Check if selected date is within 14 years range
    if (selectedDate.isAfter(minDate) && selectedDate.isBefore(maxDate)) {
      setIsOlderThanFourteen(false)
    } else {
      setIsOlderThanFourteen(true)
    }
    let input = date;
    if (input.length === 1 && input < 10 && input > 0) {
      input = "0" + input
    }
    if (input.length === 2 && !input.includes("/")) {
      input += "/";
    } else if (input.length === 5 && input.charAt(2) === "/") {
      input += "/";
    }  
    handleChildAccountInputChange({ target: { name: "dateOfBirth", value: input } }, index)
  }
  return (
    <div>
      {
        childForms.map((childForm, index) => (
          <div key={`familymember${index}`} className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
            <MdClose onClick={() => handleRemoveChildForms(index)} className="absolute top-6 right-6 text-3xl cursor-pointer" />
            <h2 className="text-lg font-semibold">
              {selectedAccountType === "family" ? "Add Family Member" : "Add Employee"}
            </h2>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="firstName"
                type="text"
                placeholder={`${t('first-name-0')}*`}
                value={childForms[index].firstName}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="lastName"
                type="text"
                placeholder={`${t('last-name-0')}*`}
                value={childForms[index].lastName}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
            </div>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="email"
                type="email"
                placeholder={`${t('email-0')}*`}
                value={childForms[index].email}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="phone"
                type="tel"
                placeholder={`${t('phone-1')}*`}
                value={childForms[index].phone}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
            </div>

            <div className="w-full flex flex-col relative">
              <input
                disabled={!isOlderThanFourteen || !childForms[index].dateOfBirth}
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="password"
                type="password"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                placeholder={`${t('password-0')}*`}
                value={childForms[index].password}
                onChange={(event) => {
                  checkPasswordStrength(event.target.value)
                  handleChildAccountInputChange(event, index)
                }}
                required
              />
              {childForms[index].password && (
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
                  placeholder={`${t('select-gender')}`}
                  value={childForms[index].gender}
                  onChange={(event) => handleChildAccountInputChange(event, index)}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
              </div>
              <div className="w-full flex-1 flex flex-col">
                <input
                  className="flex-1 rounded-full text-xl lg:text-lg focus:ring-1 focus:ring-primary outline-none px-8 py-2 border placeholder:text-[19px]"
                  type="text"
                  value={childForms[index].dateOfBirth}
                  onChange={({ target }) => handleDateChange(target.value, index)}
                  placeholder={`${t('date-of-birth-mm-dd-yyyy')}`}
                />
              </div>
            </div>
            {
              selectedAccountType === "family" ? (
                <button type="button" onClick={addChildAccount} className="absolute bottom-4 left-8 flex text-gray-600 gap-x-2 font-body items-center text-3xl cursor-pointer">
                  <BsPlusCircle />
                  <p className='text-xl'>{t('add-family-member')}</p>
                </button>
              ) : (
                  <button type="button" disabled={childForms.length > 8} onClick={addChildAccount} className="absolute bottom-4 left-8 flex text-gray-600 gap-x-2 font-body items-center text-3xl cursor-pointer">
                  <BsPlusCircle />
                    <p className='text-xl'>{t('add-employee')}</p>
                </button>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default ChildAccountForms