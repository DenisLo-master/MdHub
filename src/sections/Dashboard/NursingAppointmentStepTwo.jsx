import React, { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi';

const NursingAppointmentStepTwo = () => {
  const [time, setTime] = useState("")
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

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
      <p className="text-xl pb-4">Please select date and time.</p>
      <div className="w-full flex">
        <input
          required
          className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
          type="date"
          name="date"
          placeholder="Select Date"
        />

      </div>
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
          required
          className="flex-1 bg-transparent appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary"
          placeholder="select time"
          id="time"
          name="time"
          value={time} onChange={handleTimeChange}
        >
          <option value="">Select Time</option>
          {generateOptions()}
        </select>
      </div>
    </div>
  )
}

export default NursingAppointmentStepTwo