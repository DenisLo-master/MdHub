import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { registerationStore } from '../../store/registerationStore'
import Select from 'react-select'


const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'preferNotToSay', label: 'Prefer not to say' }
];

const ParentAccountForm = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const addChildAccount = registerationStore(state => state.addChildAccount)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const childForms = registerationStore(state => state.childForms)
  const [selectedGender, setSelectedGender] = useState(null)


  const handleDateChange = (date) => {
    handleRegisterationFormDataChange("dateOfBirth", date)
  }

  return (
    <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="firstName"
          type="text"
          placeholder="First Name*"
          value={registerationFormData.firstName}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="lastName"
          type="text"
          placeholder="Last Name*"
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
          placeholder="Email*"
          value={registerationFormData.email}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="phone"
          type="tel"
          placeholder="Phone*"
          value={registerationFormData.phone}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="password"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$"
          title="Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
          placeholder="Password*"
          value={registerationFormData.password}
          onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="text-xl flex items-center w-full gap-x-6">
        <div className="flex-1">
          <div className="w-full flex flex-wrap justify-around gap-x-4 rounded-full">
            <Select
              className="flex-1 rounded-full"
              value={selectedGender}
              onChange={(selectedOption) => handleGenderChange(selectedOption)}
              options={genderOptions}
              placeholder="Gender"
            />
          </div>
        </div>

        <div className="flex-1 flex">
          <input
            className="flex-1 rounded-full text-lg focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
            type="text"            
            value={registerationFormData.dateOfBirth} 
            onChange={({ target }) => handleDateChange(target.value)}
            placeholder="Date of Birth (mm/dd/yyy)"
          />
        </div>
      </div>
      {selectedAccountType === "family" && (
        <>
          <button disabled={childForms.length > 1} onClick={addChildAccount} className="absolute bottom-4 left-8 flex gap-x-2 text-gray-600 font-body items-center text-3xl cursor-pointer">
            <BsPlusCircle />
            <p className='text-xl'>add family member</p>
          </button>
          <div className="absolute bottom-4 right-8 text-gray-600 font-body">
            <p className='text-xl'>Account Admin</p>
          </div>
        </>
      )}
      {selectedAccountType === "corporate" && (
        <>
          <button disabled={childForms.length > 8} onClick={addChildAccount} className="absolute bottom-4 left-8 flex gap-x-2 text-gray-600 font-body items-center text-3xl cursor-pointer">
            <BsPlusCircle />
            <p className='text-xl'>add employee</p>
          </button>
          <div className="absolute bottom-4 right-8 text-gray-600 font-body">
            <p className='text-xl'>Account Admin</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ParentAccountForm