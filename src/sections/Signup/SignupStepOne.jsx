import React, { useState } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { BsPlusCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const SignupStepOne = () => {
  const [childForms, setChildForms] = useState([])
  const registerationFormData = registerationStore(state => state.registerationFormData)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)


  const addFamilyMember = () => {
    setChildForms(
      [...childForms, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      }]
    )
  }

  const handleChildInputChange = (event, index) => {
    const { name, value } = event.target;
    const newChildForms = [...childForms];
    newChildForms[index] = { ...newChildForms[index], [name]: value };
    setChildForms(newChildForms);
  }

  const handleRemoveChildForm = (index) => {
    const newChildForms = [...childForms];
    newChildForms.splice(index, 1);
    setChildForms(newChildForms);
  }

  const filledChildForms = childForms.filter(form => Object.values(form).every(value => value !== ''))

  return (
    <section className='space-y-6'>
      <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-5xl ">Step 1</h2>
            <div className="font-body text-xl font-light">
              <div className="text-right">
                <p>Enter member details</p>
                <p className="text-sm">
                  {selectedAccountType === "family" && "Upto 4 Family Members"}
                  {selectedAccountType === "corporate" && "Upto 10 Employees"}
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
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
          <div onClick={addFamilyMember} className="absolute bottom-4 left-8 flex gap-x-2 text-primary font-body items-center text-3xl cursor-pointer">
            <BsPlusCircle />
            <p className='text-xl'>add family member</p>
          </div>
        )}
      </div>
      {
        childForms.map((childForm, index) => (
          <div key={`familymember${index}`} className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
            <MdClose onClick={() => handleRemoveChildForm(index)} className="absolute top-6 right-6 text-3xl cursor-pointer" />
            <h2 className="text-lg font-semibold">Add Family Member</h2>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="firstName"
                type="text"
                placeholder="First Name*"
                value={childForms[index].firstName}
                onChange={(event) => handleChildInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="lastName"
                type="text"
                placeholder="Last Name*"
                value={childForms[index].lastName}
                onChange={(event) => handleChildInputChange(event, index)}
                required
              />
            </div>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="email"
                type="email"
                placeholder="Email*"
                value={childForms[index].email}
                onChange={(event) => handleChildInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={childForms[index].phone}
                onChange={(event) => handleChildInputChange(event, index)}
                required
              />
            </div>
            <div className="w-full flex">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="password"
                type="password"
                placeholder="Password*"
                value={childForms[index].password}
                onChange={(event) => handleChildInputChange(event, index)}
                required
              />
            </div>
            <button type="button" disabled={childForms.length > 1} onClick={addFamilyMember} className="absolute bottom-4 left-8 flex gap-x-2 text-primary font-body items-center text-3xl cursor-pointer">
              <BsPlusCircle />
              <p className='text-xl'>add family member</p>
            </button>
          </div>
        ))
      }

    </section>
  )
}


export default SignupStepOne