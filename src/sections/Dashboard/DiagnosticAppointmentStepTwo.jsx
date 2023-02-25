import React from 'react'

const DiagnosticAppointmentStepTwo = () => {
  return (
    <div>
      <div className="flex space-x-8">
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="firstName" placeholder="First Name" />
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="tel" name="phoneNumber" placeholder="Phone Number" />
      </div>

      <div className="flex space-x-8">
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="lastName" placeholder="Last Name" />
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="email" name="emailAdress" placeholder="Email Address" />
      </div>

      <div className="flex space-x-8">
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="preferredDate" placeholder="Preferred Date (DD-MM-YYY)" />
        <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="preferredTime" placeholder="Preferred Time" />
      </div>
    </div>
  )
}

export default DiagnosticAppointmentStepTwo