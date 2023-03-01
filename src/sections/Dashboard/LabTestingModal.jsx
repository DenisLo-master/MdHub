import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import Modal from '../../components/Modal'
import { registerationStore } from '../../store/registerationStore'
import { loadStripe } from '@stripe/stripe-js'
const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key);
import { DiagnosticsAppointmentForm } from '../../sections'


const LabTestingModal = () => {
  const showLabTestingModal = registerationStore(state => state.showLabTestingModal)
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)


  return (
    <Modal
      key="Diagnostics"
      title="Book a nurse below"
      showModal={showLabTestingModal}
      setShowModal={setShowLabTestingModal}
    >
      <section>
        <Elements stripe={stripePromise}>
          <DiagnosticsAppointmentForm />
        </Elements>
      </section>  
    </Modal>
  )
}

export default LabTestingModal