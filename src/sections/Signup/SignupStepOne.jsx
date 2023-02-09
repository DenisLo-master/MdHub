import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { BsPlusCircle } from 'react-icons/bs'
import { FirstFamilyMemberForm, FourthFamilyMemberForm, SecondFamilyMemberForm, ThirdFamilyMemberForm } from '../../sections'

const SignupStepOne = () => {
  const [showFirstFamilyMemberForm, setShowFirstFamilyMemberForm] = useState(false)
  const [showSecondFamilyMemberForm, setShowSecondFamilyMemberForm] = useState(false)
  const [showThirdFamilyMemberForm, setShowThirdFamilyMemberForm] = useState(false)
  const [showFourthFamilyMemberForm, setShowFourthFamilyMemberForm] = useState(false)
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)

  const thirdFamilyMemberFormData = registerationStore(state => state.thirdFamilyMemberFormData)
  const handleThirdFamilyMemberFormDataChange = registerationStore(state => state.handleThirdFamilyMemberFormDataChange)
  const fourthFamilyMemberFormData = registerationStore(state => state.fourthFamilyMemberFormData)
  const handleFourthFamilyMemberFormDataChange = registerationStore(state => state.handleFourthFamilyMemberFormDataChange)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)


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
        showFirstFamilyMemberForm && <FirstFamilyMemberForm showNext={() => setShowSecondFamilyMemberForm(true)} />
      }
      {
        showSecondFamilyMemberForm && <SecondFamilyMemberForm showNext={() => setShowThirdFamilyMemberForm(true)} />
      }
      {
        showThirdFamilyMemberForm && <ThirdFamilyMemberForm showNext={() => setShowFourthFamilyMemberForm(true)} />
      }
      {
        showFourthFamilyMemberForm && <FourthFamilyMemberForm />
      }
    </section>
  )
}


export default SignupStepOne