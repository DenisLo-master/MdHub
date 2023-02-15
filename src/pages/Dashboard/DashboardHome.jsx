import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import RotatingEllipse from '../../components/RotatingEllipse'
import Modal from '../../components/Modal'
import { nursingAndHomecareServices } from '../../constants'
import { registerationStore } from '../../store/registerationStore'
import { BiCaretDown } from 'react-icons/bi'
import { TiTickOutline, TiTimesOutline, TiClipboard } from 'react-icons/ti'
import toast from 'react-hot-toast'

const DashboardHome = () => {
  const nursingFormRef = useRef(null)
  const showLabTestingModal = registerationStore(state => state.showLabTestingModal)
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const showNursingModal = registerationStore(state => state.showNursingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const userInfo = registerationStore(state => state.userInfo)

  const handleNursingFormSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const appointmentFormData = Object.fromEntries(form)
    try {
      const response = await fetch('https://mdhub-backend.onrender.com/api/v1/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentFormData)
      })
      await response.json()
      nursingFormRef.current.reset()
      toast.success("Appointed created successfully", { id: "Appointment" })
      setShowNursingModal(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }

  return (
    <header className="py-16 bg-[#f9f9f9]">
      <h1 className="text-4xl text-center pb-10">Your MdHub Dashboard</h1>
      <section className="flex justify-center gap-x-10 rotating-ellipse-section">
        <RotatingEllipse />
        <article className="space-y-3">
          <h2 className='text-4xl'>Get Care Now</h2>
          <p className="font-body max-w-[330px]">
            Select a service for the wheel or form below to book a new appointment today!
          </p>
          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-3 text-primary">
              <button className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-4 py-2 border   border-primary bg-transparent`}>
                <a href="https://www.mdhub.ca/virtual-doctors/" target="_blank">
                  Virtual Doctor
                </a>
              </button>
              <button onClick={() => setShowLabTestingModal(true)} className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                Medical Laboratory
              </button>
              <button onClick={() => setShowNursingModal(true)} className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                Nursing & Homecare
              </button>
              <button className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border   border-primary bg-transparent`}>
                Virus Testing
              </button>
              <button className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                <a href="https://www.medzy.ca/?lang=en&gclid=CjwKCAjwg5uZBhATEiwAhhRLHiFNqYb2OAmyskipJG5oXwV_AqAFhiSCw0b2_se5P9l47kNIwULOyRoC03AQAvD_BwE" target="_blank">
                  Online Pharmacy
                </a>
              </button>
            </div>
            {
              userInfo.loginCode && (
                <div className="pt-3 flex gap-x-2">
                  <div>
                    Your Maple Login Code: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
                  <div className="cursor-pointer" onClick={handleCopy}>
                    <TiClipboard className="text-2xl" />
                  </div>
                </div>
              )
            }
          </div>
        </article>
      </section>
      <Modal key="Nursing Modal" title="Nursing & Healthcare" showModal={showNursingModal} setShowModal={setShowNursingModal}>
        <section className="bg-[#F9F9F9] p-6">
          <p className="text-xl">Fill in the details to get the service of your need.</p>
          <div className="flex gap-x-4 w-full">
            <form ref={nursingFormRef} onSubmit={handleNursingFormSubmit} className="w-full py-10 space-y-2">
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
              <div className="w-full flex">
                <textarea placeholder='Additional Info' className="w-full text-lg p-4 h-32 border rounded-lg outline-none focus:ring ring-primary" name="additionalInfo" maxLength="250" />
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
      <Modal key="Lab Testing Modal" title="Medical Laboratory" showModal={showLabTestingModal} setShowModal={setShowLabTestingModal}>
        <div className="flex justify-around">
          <button className="w-full text-center bg-primary text-white max-w-[330px] py-3 rounded-3xl">
            <a className="flex justify-center items-center text-xl gap-x-3 " href="https://mdhub.vercel.app/services/medical-laboratory">
              <TiTickOutline /><span>I have requisition</span>
            </a>
          </button>
          <button className="w-full  text-center bg-primary text-white max-w-[330px] py-3 rounded-3xl">
            <a className="flex justify-center items-center text-xl gap-x-3" href="https://www.mdhub.ca/virtual-doctors/" target="_blank">
              <TiTimesOutline /><span>I need a requisition</span>
            </a>
          </button>
        </div>
      </Modal>
    </header>
  )
}

export default DashboardHome