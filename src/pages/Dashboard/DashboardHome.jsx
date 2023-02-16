import React, { useState, useRef } from 'react'
import RotatingEllipse from '../../components/RotatingEllipse'
import { registerationStore } from '../../store/registerationStore'
import { TiClipboard } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { NursingModal, LabTestingModal } from '../../sections'

const DashboardHome = () => {
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const userInfo = registerationStore(state => state.userInfo)

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
      <NursingModal />
      <LabTestingModal />

    </header>
  )
}

export default DashboardHome