import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { registerationStore } from '../../store/registerationStore'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { NursingAppointmentStepOne, NursingAppointmentStepTwo, NursingAppointmentStepThree } from "../../sections"
import { SVGLoaderCircles } from '../../assets'
import { useTranslation } from 'react-i18next'

const INITIAL_DATA = {
  serviceNames: [],
  time: "",
  address: "",
  city: "",
  postalCode: "",
  province: "Quebec",
  customNursingService: "",
  selectedDate: new Date(),
}


const NursingAppointmentForm = () => {
  const [nursingFormData, setNursingFormData] = useState(INITIAL_DATA)
  const nursingAppointmentBill = registerationStore(state => state.nursingAppointmentBill)
  const selectedNursingHomecareOptions = registerationStore(state => state.selectedNursingHomecareOptions)
  const setSelectedNursingHomecareOptions = registerationStore(state => state.setSelectedNursingHomecareOptions)
  const diagnosticsFormData = registerationStore(state => state.diagnosticsFormData)
  const changeDiagnosticsFormData = registerationStore(state => state.changeDiagnosticsFormData)
  const uploadFile = registerationStore(state => state.uploadFile)
  const setUploadFile = registerationStore(state => state.setUploadFile)
  const [isLoading, setIsLoading] = useState(false)
  const nursingFormRef = useRef(null)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const userInfo = registerationStore(state => state.userInfo)
  const stripe = useStripe()
  const elements = useElements()

  const { t } = useTranslation()

  const updateFields = (fields) => {
    setNursingFormData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <NursingAppointmentStepOne {...nursingFormData} updateFields={updateFields} />,
    <NursingAppointmentStepTwo {...nursingFormData} updateFields={updateFields} />,
    <NursingAppointmentStepThree />
  ])

  const handleNursingFormSubmit = async (e) => {
    e.preventDefault()
    if (!isLastStep) next()
    if (!stripe || !elements) {
      return;
    }


    setIsLoading(true)
    try {      
      const services = selectedNursingHomecareOptions.map(item => item.label)
      const formData = new FormData()
      formData.append("file", uploadFile)
      formData.append("firstName", diagnosticsFormData.firstName)
      formData.append("lastName", diagnosticsFormData.lastName)
      formData.append("emailAddress", diagnosticsFormData.emailAddress)
      formData.append("phoneNumber", diagnosticsFormData.phoneNumber)
      formData.append("customerId", userInfo?.stripeCustomerId)
      formData.append("userId", userInfo?._id)
      formData.append("selectedServices", JSON.stringify(services))
      formData.append("time", nursingFormData.time)
      formData.append("address", nursingFormData.address)
      formData.append("city", nursingFormData.city)
      formData.append("postalCode", nursingFormData.postalCode)
      formData.append("province", nursingFormData.province)
      formData.append("customNursingService", nursingFormData.customNursingService)
      formData.append("selectedDate", nursingFormData.selectedDate)
      formData.append("amount", nursingAppointmentBill > 0 ? nursingAppointmentBill * 100 : 11383)
      formData.append("appointmentType", "nursing")


      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        formData.append("paymentMethod", paymentMethod.id)
        const response = await fetch('https://mdhub-server.onrender.com/api/v1/appointments', {
          method: 'POST',
          body: formData
        })
        await response.json()
        if (response.ok) {
          setIsLoading(false)
          setSelectedNursingHomecareOptions([])
          nursingFormRef.current.reset()
          toast.success(t('thanks-for-booking-our-staff-will-contact-you-within-24hr-to-confirm-all-details-of-your-booking-additional-charges-may-be-required-according-to-the-service-time-and-distance-of-travel-necessary'), { id: "Appointment Success", duration: 5000 })
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
    <form ref={nursingFormRef} onSubmit={handleNursingFormSubmit} className="w-full">
      {step}
      <div className="w-full flex justify-end gap-x-4 pt-6">
        {
          !isFirstStep &&
          <button
            type="button"
            className={`rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border  border-primary bg-primary text-white`}
            onClick={back}
          >
              {t('back')}
          </button>
        }
        <button
          type="submit"
          className="rounded-full w-36 font-main text-xl group hover:ring-1 hover:ring-primary  py-3 border flex justify-center items-center space-x-2  border-primary bg-primary text-white"
        >
          {
            isLastStep ?
              isLoading ?
                <SVGLoaderCircles className="text-white w-4 h-4" /> :
                <span>{t('finish')}</span> :
              <span>{t('next')}</span>
          }
        </button>
      </div>
    </form>
  )
}

export default NursingAppointmentForm