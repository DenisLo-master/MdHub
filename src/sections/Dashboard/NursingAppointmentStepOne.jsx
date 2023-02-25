import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { nursingAndHomecareServices } from '../../constants'

const NursingAppointmentStepOne = ({ serviceName, updateFields }) => {
  return (
    <div>
      <p className="text-xl pb-4">Fill in the details to get the service of your need.</p>
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
          required
          value={serviceName}
          onChange={(e) => updateFields({ serviceName: e.target.value })}
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
    </div>
  )
}

export default NursingAppointmentStepOne