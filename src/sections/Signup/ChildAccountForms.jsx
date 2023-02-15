import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { registerationStore } from '../../store/registerationStore'

const ChildAccountForms = () => {
  const handleChildAccountInputChange = registerationStore(state => state.handleChildAccountInputChange)
  const handleRemoveChildForms = registerationStore(state => state.handleRemoveChildForms)
  const childForms = registerationStore(state => state.childForms)
  const addChildAccount = registerationStore(state => state.addChildAccount)
  return (
    <div>
      {
        childForms.map((childForm, index) => (
          <div key={`familymember${index}`} className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
            <MdClose onClick={() => handleRemoveChildForms(index)} className="absolute top-6 right-6 text-3xl cursor-pointer" />
            <h2 className="text-lg font-semibold">Add Family Member</h2>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="firstName"
                type="text"
                placeholder="First Name*"
                value={childForms[index].firstName}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="lastName"
                type="text"
                placeholder="Last Name*"
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
                placeholder="Email*"
                value={childForms[index].email}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={childForms[index].phone}
                onChange={(event) => handleChildAccountInputChange(event, index)}
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
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
            </div>
            <button type="button" disabled={childForms.length > 1} onClick={addChildAccount} className="absolute bottom-4 left-8 flex text-gray-600 gap-x-2 font-body items-center text-3xl cursor-pointer">
              <BsPlusCircle />
              <p className='text-xl'>add family member</p>
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default ChildAccountForms