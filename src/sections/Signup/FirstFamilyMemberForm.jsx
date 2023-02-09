import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { registerationStore } from '../../store/registerationStore'

const FirstFamilyMemberForm = ({ showNext }) => {
  const firstFamilyMemberFormData = registerationStore(state => state.firstFamilyMemberFormData)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const handleFirstFamilyMemberFormDataChange = registerationStore(state => state.handleFirstFamilyMemberFormDataChange)

  return (
    <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
      <h2 className="text-lg font-semibold">Add Family Member</h2>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="firstName"
          type="text"
          placeholder="First Name*"
          value={firstFamilyMemberFormData.firstName}
          onChange={({ target }) => handleFirstFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="lastName"
          type="text"
          placeholder="Last Name*"
          value={firstFamilyMemberFormData.lastName}
          onChange={({ target }) => handleFirstFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="email"
          type="email"
          placeholder="Email*"
          value={firstFamilyMemberFormData.email}
          onChange={({ target }) => handleFirstFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="phone"
          type="tel"
          placeholder="Phone*"
          value={firstFamilyMemberFormData.phone}
          onChange={({ target }) => handleFirstFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="password"
          type="password"
          placeholder="Password*"
          value={firstFamilyMemberFormData.password}
          onChange={({ target }) => handleFirstFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div onClick={() => showNext()} className="absolute bottom-4 left-8 flex gap-x-2 text-primary font-body items-center text-3xl cursor-pointer">
        <BsPlusCircle />
        <p className='text-xl'>add family member</p>
      </div>
    </div>
  )
}

export default FirstFamilyMemberForm