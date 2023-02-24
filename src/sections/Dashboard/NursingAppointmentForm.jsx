import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { registerationStore } from '../../store/registerationStore'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { BiCaretDown } from 'react-icons/bi'
import { nursingAndHomecareServices } from '../../constants'

const NursingAppointmentForm = () => {
  const [time, setTime] = useState("");
  const nursingFormRef = useRef(null)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const userInfo = registerationStore(state => state.userInfo)
  const stripe = useStripe();
  const elements = useElements();

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

  const handleNursingFormSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return;
    }
    const form = new FormData(e.target)
    const appointmentFormData = Object.fromEntries(form)
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const response = await fetch('https://mdhub-backend.onrender.com//api/v1/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: 14900,
            paymentMethod: paymentMethod.id,
            time,
            ...appointmentFormData
          })
        })
        await response.json()
        nursingFormRef.current.reset()
        toast.success("Thanks for booking! Our Staff will contact you within 24hr to confirm all details of your booking. Additional charges may be required according to the service, time and distance of travel necessary", { id: "Appointment Success" })
      }
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <form ref={nursingFormRef} onSubmit={handleNursingFormSubmit} className="w-full py-10 space-y-2">
      <div className="w-full flex">
        <input
          className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
          type="date"
          name="date"
          placeholder="Select Date"
        />
        <input type="hidden" name="customerId" value={userInfo?.stripeCustomerId} />
        <input type="hidden" name="userId" value={userInfo?._id} />
      </div>
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
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
      <div className="w-full flex relative">
        <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
        <select
          name="service"
          className="flex-1 bg-transparent appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary"
        >
          <option value="">Select Service</option>
          {
            nursingAndHomecareServices.map((item, index) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
      </div>
      <div className="w-full flex">
        <textarea placeholder='Additional Info' className="w-full text-lg p-4 h-32 border rounded-lg outline-none focus:ring ring-primary" name="additionalInfo" maxLength="250" />
      </div>
      <div className="py-4">
        <CardElement
          className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <button
          className={`rounded-full font-main text-lg group hover:ring-1 hover:ring-primary px-12 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default NursingAppointmentForm