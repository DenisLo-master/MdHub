import React, { useState } from 'react'
import { DoctorIcon, NursingIcon, PharmacyIcon, TestingIcon } from '../../assets'
import Modal from '../../components/Modal'
import ServicesCard from '../../components/ServicesCard'

const BookAppointment = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <section className="bg-[#F9F9F9] py-16 min-h-[690px]">
      <h2 className="font-main pb-10 text-4xl text-center">Book an Appointment</h2>
      <div className="flex justify-center gap-x-6">
        <a href="https://app.getmaple.ca/register" target="_blank">
          <ServicesCard title={"virtual doctor"} bgPrimary wideCaption>
            <DoctorIcon className="text-white" />
          </ServicesCard>
        </a>
        <a href="https://www.medzy.ca/?lang=en&gclid=CjwKCAjwg5uZBhATEiwAhhRLHiFNqYb2OAmyskipJG5oXwV_AqAFhiSCw0b2_se5P9l47kNIwULOyRoC03AQAvD_BwE" target="_blank">
          <ServicesCard
            title={"online prescription"}
            bgPrimary
            wideCaption
          >
            <PharmacyIcon
              className="text-white"
            />
          </ServicesCard>
        </a>
        <div className="cursor-pointer" onClick={() => setShowModal(true)}>
          <ServicesCard title={"mobile lab testing"} bgPrimary wideCaption>
            <TestingIcon className="text-white" />
          </ServicesCard>
        </div>
        <div className="cursor-pointer">
          <ServicesCard title={"nurses & homecare"} bgPrimary wideCaption>
            <NursingIcon
              className="text-white"
            />
          </ServicesCard>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Mobile Lab Testing"
      >
        <section className="py-12 bg-[#F9F9F9]">
          <div className="flex justify-center gap-x-2 pb-6 text-xl">
            <a
              href="https://www.testmobile.ca/collections/mobile"
              target="_blank"
              className="w-full text-center bg-primary text-white max-w-[370px] py-3 rounded-3xl">
              Mobile Service
            </a>
            <a
              href="https://www.testmobile.ca/collections/virtual-testing"
              target="_blank"
              className="w-full text-center bg-primary text-white max-w-[370px] py-3 rounded-3xl"
            >
              Virtual Service
            </a>
          </div>
          <p className="text-center text-gray-800 text-lg font-light font-body max-w-[910px] mx-auto">
            MDHUB Members Benefit from 25% discount on all virus testing services as well as free upgraded rush service.
            All our Covid-19 testing is performed by our partners
          </p>
        </section>
      </Modal>
    </section>
  )
}

export default BookAppointment