import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { nursingAndHomecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'

const NursingAppointmentStepOne = () => {
  const userInfo = registerationStore(state => state.userInfo)
  return (
    <div>
      <p className="text-xl pb-4">Fill in the details to get the service of your need.</p>
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
          required
          name="service"
          className="flex-1 bg-transparent appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary"
        >
          <option value="">Select a Service</option>
          {
            nursingAndHomecareServices.map((item, index) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
      </div>
      <input type="hidden" name="customerId" value={userInfo?.stripeCustomerId} />
      <input type="hidden" name="userId" value={userInfo?._id} />
    </div>
  )
}

export default NursingAppointmentStepOne