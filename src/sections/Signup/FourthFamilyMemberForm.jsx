import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { MdClose } from 'react-icons/md'

const FourthFamilyMemberForm = () => {
  const fourthFamilyMemberFormData = registerationStore(state => state.fourthFamilyMemberFormData)
  const setShowFourthFamilyMemberForm = registerationStore(state => state.setShowFourthFamilyMemberForm)
  const handleFourthFamilyMemberFormDataChange = registerationStore(state => state.handleFourthFamilyMemberFormDataChange)
  return (
    <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
      <MdClose onClick={() => setShowThirdFamilyMemberForm(false)} className="absolute top-6 right-6 text-3xl cursor-pointer" />
      <h2 className="text-lg font-semibold">Add Family Member</h2>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="firstName"
          type="text"
          placeholder="First Name*"
          value={fourthFamilyMemberFormData.firstName}
          onChange={({ target }) => handleFourthFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="lastName"
          type="text"
          placeholder="Last Name*"
          value={fourthFamilyMemberFormData.lastName}
          onChange={({ target }) => handleFourthFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="email"
          type="email"
          placeholder="Email*"
          value={fourthFamilyMemberFormData.email}
          onChange={({ target }) => handleFourthFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="phone"
          type="tel"
          placeholder="Phone*"
          value={fourthFamilyMemberFormData.phone}
          onChange={({ target }) => handleFourthFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
      <div className="w-full flex">
        <input
          className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
          name="password"
          type="password"
          placeholder="Password*"
          value={fourthFamilyMemberFormData.password}
          onChange={({ target }) => handleFourthFamilyMemberFormDataChange(target.name, target.value)}
          required
        />
      </div>
    </div>
  )
}

export default FourthFamilyMemberForm