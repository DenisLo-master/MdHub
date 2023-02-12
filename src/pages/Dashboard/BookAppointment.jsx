import React, { useState, useRef } from "react";
import { DoctorIcon, NursingIcon, PharmacyIcon, TestingIcon } from '../../assets'
import Modal from '../../components/Modal'
import ServicesCard from '../../components/ServicesCard'
import "react-datepicker/dist/react-datepicker.css";
import { nursingAndHomecareServices } from "../../constants";
import { BiCaretDown } from "react-icons/bi"
import { registerationStore } from "../../store/registerationStore";

const BookAppointment = () => {
  const [showModal, setShowModal] = useState(false)
  const [showNursingModal, setShowNursingModal] = useState(false)
  const appointmentFormRef = useRef(null)
  const userInfo = registerationStore(state => state.userInfo)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const appointmentFormData = Object.fromEntries(form)
    try {
      const response = await fetch('http://localhost:8080/api/v1/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentFormData)
      })
      await response.json()
      appointmentFormRef.current.reset()
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    }
  }
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
        <div className="cursor-pointer" onClick={() => setShowNursingModal(true)}>
          <ServicesCard title={"nurses & homecare"} bgPrimary wideCaption>
            <NursingIcon
              className="text-white"
            />
          </ServicesCard>
        </div>
      </div>
      <Modal key="Lab Testing Modal" title="Lab Testing" showModal={showModal} setShowModal={setShowModal}>
        <section className="py-12 bg-[#F9F9F9]">
          <div className="flex justify-center gap-x-12 pb-6 text-xl">
            <article className="w-full text-center bg-primary text-white max-w-[300px] py-3 rounded-3xl">
              Mobile Service
            </article>
            <article className="w-full text-center bg-primary text-white max-w-[300px] py-3 rounded-3xl">
              Virtual Service
            </article>
          </div>
          <p className="text-center text-gray-800 text-lg font-light font-body max-w-[910px] mx-auto">
            MDHUB Members Benefit from 25% discount on all virus testing services as well as free upgraded rush service.
            All our Covid-19 testing is performed by our partners
          </p>
        </section>
      </Modal>
      <Modal key="Nursing Modal" title="Nursing & Healthcare" showModal={showNursingModal} setShowModal={setShowNursingModal}>
        <section className="bg-[#F9F9F9] p-6">
          <p className="text-xl">Fill in the details to get the service of your need.</p>
          <div className="flex gap-x-4 w-full">
            <form ref={appointmentFormRef} onSubmit={handleFormSubmit} className="w-full py-10 space-y-2">
              <div className="w-full flex">
                <input
                  className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary"
                  type="date"
                  name="date"
                />
                <input type="hidden" name="userId" value={userInfo?._id} />
              </div>
              <div className="w-full flex relative">
                <BiCaretDown className="text-2xl absolute right-3 pointer-events-none top-2" />
                <select name="service" className="flex-1 appearance-none px-4 py-2 border rounded-lg outline-none focus:ring ring-primary">
                  {
                    nursingAndHomecareServices.map((item, index) => (
                      <option value={item}>{item}</option>
                    ))
                  }
                </select>
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
          </div>
        </section>
      </Modal>
    </section>
  )
}

export default BookAppointment