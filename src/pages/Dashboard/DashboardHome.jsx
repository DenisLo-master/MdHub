import React, { useState, useRef } from 'react'
import RotatingEllipse from '../../components/RotatingEllipse'
import { registerationStore } from '../../store/registerationStore'
import { TiClipboard, TiPencil } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { NursingModal, LabTestingModal, OnlinePharmacyModal } from '../../sections'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const setShowOnlinePharmacyModal = registerationStore(state => state.setShowOnlinePharmacyModal)
  const userInfo = registerationStore(state => state.userInfo)

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success("Copied to Clipboard", { id: "clipboard" })
  }

  return (
    <header className="py-16 bg-[#f9f9f9]">
      <h1 className="text-4xl text-center pb-10">Your MdHub Dashboard</h1>
      <section className="flex flex-col md:flex-row justify-center gap-x-10 rotating-ellipse-section">
        <RotatingEllipse />
        <article className=" pt-24 md:pt-0 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className='text-4xl'>Get Care Now</h2>
            <Link to="/dashboard/update-user">
              <button className="flex items-center gap-x-2">
                <TiPencil className="text-3xl" />
                <h3>Edit Profile</h3>
              </button>
            </Link>
          </div>
          <p className="font-body max-w-[330px]">
            Select a service for the wheel or form below to book a new appointment today!
          </p>
          <div className="flex gap-y-4 items-center md:items-start flex-col-reverse md:flex-row md:gap-x-6">
            <div className="flex flex-col gap-y-3 text-primary">
              <button className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-4 py-2 border   border-primary bg-transparent`}>
                <a href="https://www.getmaple.ca/mdhub" target="_blank">
                  Virtual Doctor
                </a>
              </button>
              <button className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                <a href="https://www.getmaple.ca/mdhub" target="_blank">
                  Mental Health
                </a>
              </button>
              <button onClick={() => setShowOnlinePharmacyModal(true)} className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                Online Pharmacy
              </button>
              <button onClick={() => setShowLabTestingModal(true)} className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                Diagnostics
              </button>
              <button onClick={() => setShowNursingModal(true)} className={`max-w-[230px] rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 py-2 border border-primary bg-transparent`}>
                Nursing & Homecare
              </button>

            </div>
            {
              userInfo.loginCode && (
                <div className="space-y-5">
                  <div className="pt-3 flex gap-x-2">
                    <div>
                      Your Maple Login Code: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
                    <div className="cursor-pointer" onClick={handleCopy}>
                      <TiClipboard className="text-2xl" />
                    </div>
                  </div>
                  <div className="pt-3 flex gap-x-2">
                    <div>
                      Your Maple Login Code: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
                    <div className="cursor-pointer" onClick={handleCopy}>
                      <TiClipboard className="text-2xl" />
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </article>
      </section>
      <NursingModal />
      <LabTestingModal />
      <OnlinePharmacyModal />
    </header>
  )
}

export default DashboardHome