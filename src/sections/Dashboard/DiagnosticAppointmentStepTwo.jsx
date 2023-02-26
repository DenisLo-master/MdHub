import React from 'react'

const DiagnosticAppointmentStepTwo = ({ time, address, selectedDate, updateFields }) => {
  return (
    <div className='space-y-3'>
      <div className="flex space-x-8">
        <input
          value={selectedDate}
          onChange={({ target }) => updateFields({ selectedDate: target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          type="text"
          placeholder="Preferred Date (DD-MM-YYY)"
          required
        />
        <input
          value={time}
          onChange={({ target }) => updateFields({ time: target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          type="text"
          placeholder="Preferred Time"
          required
        />
      </div>

      <div className="flex space-x-8">
        <input
          value={address}
          onChange={({ target }) => updateFields({ address: target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          type="text"
          placeholder="Address"
          required
        />
      </div>
    </div>
  )
}

export default DiagnosticAppointmentStepTwo