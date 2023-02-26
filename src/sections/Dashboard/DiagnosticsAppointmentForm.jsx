import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { registerationStore } from '../../store/registerationStore'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { DiagnosticAppointmentStepOne, DiagnosticAppointmentStepTwo } from "../../sections"
import { SVGLoaderCircles } from '../../assets'

const INITIAL_DATA = {
  serviceName: "",
  time: "",
  address: "",
  selectedDate: new Date(),
}


const DiagnosticsAppointmentForm = () => {
  const [nursingFormData, setNursingFormData] = useState(INITIAL_DATA)
  const [isLoading, setIsLoading] = useState(false)
  const diagnosticsFormRef = useRef(null)
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const userInfo = registerationStore(state => state.userInfo)
  const stripe = useStripe();
  const elements = useElements();

  const updateFields = (fields) => {
    setNursingFormData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <DiagnosticAppointmentStepOne {...nursingFormData} updateFields={updateFields} />,
    <DiagnosticAppointmentStepTwo {...nursingFormData} updateFields={updateFields} />
  ])

  const handleNursingFormSubmit = async (e) => {
    e.preventDefault()
    if (!isLastStep) next()
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true)
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const response = await fetch('https://mdhub-backend.onrender.com/api/v1/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: 14900,
            paymentMethod: paymentMethod.id,
            customerId: userInfo?.stripeCustomerId,
            userId: userInfo?._id,
            ...nursingFormData
          })
        })
        await response.json()
        if (response.ok) {
          setIsLoading(false)
          nursingFormRef.current.reset()
          toast.success("Thanks for booking! Our Staff will contact you within 24hr to confirm all details of your booking. Additional charges may be required according to the service, time and distance of travel necessary", { id: "Appointment Success" })
        }
      }
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form ref={diagnosticsFormRef} onSubmit={handleNursingFormSubmit} className="w-full">
      {step}
      {
        !isFirstStep &&
        <div className="w-full flex justify-end gap-x-4 pt-6">
          <button
            type="button"
            className={`rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border  border-primary bg-primary text-white`}
            onClick={back}
          >
            Back
          </button>
          <button
            type="submit"
            className="rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary  py-3 border flex justify-center items-center space-x-2  border-primary bg-primary text-white"
          >
            {
              isLastStep ?
                isLoading ?
                  <SVGLoaderCircles className="text-white w-4 h-4" /> :
                  <span>Finish</span> :
                <span>Next</span>
            }
          </button>
        </div>
      }
    </form>
  )
}

export default DiagnosticsAppointmentForm