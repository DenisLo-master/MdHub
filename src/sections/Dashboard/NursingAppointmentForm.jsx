import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { registerationStore } from '../../store/registerationStore'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { NursingAppointmentStepOne, NursingAppointmentStepTwo, NursingAppointmentStepThree } from "../../sections"
import { SVGLoaderCircles } from '../../assets'
import { useTranslation } from 'react-i18next'

const INITIAL_DATA = {
  serviceName: "",
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
  const stripe = useStripe();
  const elements = useElements();

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

    // const formData = new FormData();
    // formData.append('address', nursingFormData.address);
    // formData.append('city', nursingFormData.city);
    // formData.append('preferredDate', nursingFormData.preferredDate);
    // formData.append('preferredTime', nursingFormData.time);
    // formData.append('file', file)

    setIsLoading(true)
    try {

      // const response = await fetch("http://localhost:8080/sendmail", {
      //   method: 'POST',
      //   body: formData
      // })
      // if (response.ok) {
      //   toast.success("Your form has been uploaded, you can continue booking", {
      //     id: "success booking"
      //   })
      // }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const response = await fetch('https://mdhub-server.onrender.com/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: nursingAppointmentBill > 0 ? nursingAppointmentBill * 100 : 11383,
            paymentMethod: paymentMethod.id,
            customerId: userInfo?.stripeCustomerId,
            userId: userInfo?._id,
            ...nursingFormData,
            nursingHomecareServices: selectedNursingHomecareOptions.map(item => item.value),
            diagnosticsFormData: diagnosticsFormData
          })
        })
        await response.json()
        if (response.ok) {
          setIsLoading(false)
          setSelectedNursingHomecareOptions([])
          nursingFormRef.current.reset()
          toast.success("Thanks for booking! Our Staff will contact you within 24hr to confirm all details of your booking. Additional charges may be required according to the service, time and distance of travel necessary", { id: "Appointment Success", duration: 5000 })
        }
      }
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    } finally {
      setSelectedNursingHomecareOptions([])
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