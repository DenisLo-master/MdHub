import React, { useRef, useState } from 'react'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'
import { loadStripe } from '@stripe/stripe-js'
import { NursingAppointmentForm } from '../../sections'
import { Elements } from '@stripe/react-stripe-js'
const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key)
import { useTranslation } from 'react-i18next'



const NursingModal = () => {
  const showNursingModal = registerationStore(state => state.showNursingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const { t } = useTranslation()

  return (
    <Modal
      key="nursing and homecare services"
      title={t('nursing-and-homecare-services')}
      showModal={showNursingModal}
      setShowModal={setShowNursingModal}
    >
      <section section className="p-6" >
        <div className="flex gap-x-4 w-full">
          <Elements stripe={stripePromise}>
            <NursingAppointmentForm />
          </Elements>
        </div>
      </section >
    </Modal>
  )
}

export default NursingModal