import React, { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/entry.nostyle'

const NursingAppointmentStepTwo = ({ time, selectedDate, updateFields, address, city, province, postalCode }) => {
  const generateOptions = () => {
    const options = [];

    for (let hour = 8; hour <= 18; hour++) {
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
      <div className="w-full flex">
        <DatePicker
          className="flex-1 bg-transparent appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary"
          value={selectedDate}
          onChange={(date) => updateFields({ selectedDate: date })}
          format="dd-MM-y"
          placeholderText="Select a date"
        />
      </div>
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
          required
          className="flex-1 bg-transparent appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary"
          placeholder="select time"
          value={time}
          onChange={(e) => updateFields({ time: e.target.value })}
        >
          <option value="">Select Time</option>
          {generateOptions()}
          <option value="19:00">19:00</option>
        </select>
      </div>
      <div className="w-full flex gap-x-3">
        <input
          value={province}
          onChange={(w) => updateFields({ province: e.target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          required
          placeholder="Province"
          type="text"
        />
        <input
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          required
          placeholder="City"
          type="text"
        />
        <input
          value={postalCode}
          onChange={(e) => updateFields({ postalCode: e.target.value })}
          className="px-4 py-2 flex-1 border rounded-lg bg-[#f9f9f9] outline-none focus:ring ring-primary"
          required
          placeholder="Postal Code"
          type="text"
        />
      </div>
      <div className="w-full flex gap-x-3">
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