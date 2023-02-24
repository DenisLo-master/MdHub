import React, { useRef, useState } from 'react'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'
import { loadStripe } from '@stripe/stripe-js'
import { NursingAppointmentForm } from '../../sections'
import { Elements } from '@stripe/react-stripe-js'
const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key);



const NursingModal = () => {
  const showNursingModal = registerationStore(state => state.showNursingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)

  return (
    <Modal key="Nursing Modal" title="Nursing & Healthcare" showModal={showNursingModal} setShowModal={setShowNursingModal}>
      <section section className="bg-[#F9F9F9] p-6" >
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