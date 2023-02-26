import React from 'react'

const DiagnosticAppointmentStepTwo = () => {
  return (
    <div className='space-y-3'>
      <div className="flex space-x-8">
        <input className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary" type="text" placeholder="Preferred Date (DD-MM-YYY)" />
        <input className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary" type="text" placeholder="Preferred Time" />
      </div>

      <div className="flex space-x-8">
        <input className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary" type="text" placeholder="Address" />
      </div>
    </div>
  )
}

export default DiagnosticAppointmentStepTwo