import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { BsPlusCircle } from 'react-icons/bs'
import { FirstFamilyMemberForm, FourthFamilyMemberForm, SecondFamilyMemberForm, ThirdFamilyMemberForm } from '../../sections'

const SignupStepOne = () => {
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const showFirstFamilyMemberForm = registerationStore(state => state.showFirstFamilyMemberForm)
  const setShowFirstFamilyMemberForm = registerationStore(state => state.setShowFirstFamilyMemberForm)
  const showSecondFamilyMemberForm = registerationStore(state => state.showSecondFamilyMemberForm)
  const showThirdFamilyMemberForm = registerationStore(state => state.showThirdFamilyMemberForm)
  const showFourthFamilyMemberForm = registerationStore(state => state.showFourthFamilyMemberForm)




  return (
    <section className='space-y-6'>
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
            placeholder="Password*"
            value={registerationFormData.password}
            onChange={({ target }) => handleRegisterationFormDataChange(target.name, target.value)}
            required
          />
        </div>
        {selectedAccountType === "family" && (
          <div onClick={() => setShowFirstFamilyMemberForm(true)} className="absolute bottom-4 left-8 flex gap-x-2 text-primary font-body items-center text-3xl cursor-pointer">
            <BsPlusCircle />
            <p className='text-xl'>add family member</p>
          </div>
        )}
      </div>
      {
        selectedAccountType === "family" && showFirstFamilyMemberForm && <FirstFamilyMemberForm />
      }
      {
        selectedAccountType === "family" && showSecondFamilyMemberForm && <SecondFamilyMemberForm />
      }
      {
        selectedAccountType === "family" && showThirdFamilyMemberForm && <ThirdFamilyMemberForm />
      }
      {
        selectedAccountType === "family" && showFourthFamilyMemberForm && <FourthFamilyMemberForm />
      }
    </section>
  )
}


export default SignupStepOne