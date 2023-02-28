import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { BsPlusCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { registerationStore } from '../../store/registerationStore'
import dayjs from "dayjs"
import isBetween from 'dayjs/plugin/isBetween'

const ChildAccountForms = () => {
  const [isOlderThanFourteen, setIsOlderThanFourteen] = useState(true)
  const handleChildAccountInputChange = registerationStore(state => state.handleChildAccountInputChange)
  const handleRemoveChildForms = registerationStore(state => state.handleRemoveChildForms)
  const childForms = registerationStore(state => state.childForms)
  const addChildAccount = registerationStore(state => state.addChildAccount)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)

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
    handleChildAccountInputChange({ target: { name: "dateOfBirth", value: date } }, index)
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
                disabled={!isOlderThanFourteen}
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="password"
                type="password"
                placeholder="Password*"
                value={childForms[index].password}
                onChange={(event) => handleChildAccountInputChange(event, index)}
                required
              />
            </div>
            <div className="text-xl flex items-center w-full gap-x-6">
              <div className="flex-1">
                <p className="pb-2">Gender</p>
                <div className="w-full flex flex-wrap justify-around gap-x-4">
                  <article className="flex gap-x-2 items-center">
                    <input
                      checked={childForms[index].gender === "male"}
                      id="male"
                      className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                      name="gender"
                      type="radio"
                      value={"male"}
                      onChange={(event) => handleChildAccountInputChange(event, index)}
                      required
                    />
                    <label htmlFor="male">Male</label>
                  </article>
                  <article className="flex items-center gap-x-2">
                    <input
                      checked={childForms[index].gender === "female"}
                      id="female"
                      className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                      name="gender"
                      type="radio"
                      value={"female"}
                      onChange={(event) => handleChildAccountInputChange(event, index)}
                      required
                    />
                    <label htmlFor='female'>Female</label>
                  </article>
                  <article className="flex items-center gap-x-2">
                    <input
                      id="preferNotToSay"
                      className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                      name="gender"
                      type="radio"
                      value={"prefer not to say"}
                      onChange={(event) => handleChildAccountInputChange(event, index)}
                      required
                    />
                    <label htmlFor='preferNotToSay'>Prefer Not To Say</label>
                  </article>
                </div>
              </div>
              <div className="flex-1 flex">
                <DatePicker
                  className="flex-1 py-2 bg-[#f9f9f9] appearance-none px-4 border rounded-lg outline-none focus:ring ring-dark"
                  value={childForms[index].dateOfBirth}
                  onChange={(date) => handleDateChange(date, index)}
                  format="dd-MM-y"
                  placeholderText="Select a date"
                />
              </div>
            </div>
            {
              selectedAccountType === "family" ? (
                <button type="button" disabled={childForms.length > 2} onClick={addChildAccount} className="absolute bottom-4 left-8 flex text-gray-600 gap-x-2 font-body items-center text-3xl cursor-pointer">
                  <BsPlusCircle />
                  <p className='text-xl'>add family member</p>
                </button>
              ) : (
                  <button type="button" disabled={childForms.length > 8} onClick={addChildAccount} className="absolute bottom-4 left-8 flex text-gray-600 gap-x-2 font-body items-center text-3xl cursor-pointer">
                  <BsPlusCircle />
                  <p className='text-xl'>add employee</p>
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