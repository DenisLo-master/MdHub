import React, { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/entry.nostyle'

const NursingAppointmentStepTwo = ({ time, selectedDate, updateFields, address }) => {
  const generateOptions = () => {
    const options = [];

    for (let hour = 12; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute === 0 ? "00" : minute;
        const time = `${formattedHour}:${formattedMinute}`;
        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }

    return options;
  };
  return (
    <div className="space-y-5">
      <p className="text-xl pb-2">Please select date and time.</p>
      <div className="flex space-x-8">
        <input 
          value={selectedDate}
          onChange={({ target }) => updateFields({ selectedDate: target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary" type="text"
          placeholder="Preferred Date (DD-MM-YYY)" 
        />
        <input 
          value={time}
          onChange={({ target }) => updateFields({ time: target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary" type="text"
          placeholder="Preferred Time"
        />
      </div>
      <div className="w-full flex">
        <input
          value={address}
          onChange={(e) => updateFields({ address: e.target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          required
          placeholder="Address"
          type="text"
        />
      </div>
    </div>
  )
}

export default NursingAppointmentStepTwo