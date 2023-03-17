import React, { useState, useRef } from 'react'
import RotatingEllipse from '../../components/RotatingEllipse'
import { registerationStore } from '../../store/registerationStore'
import { TiClipboard } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { NursingModal, LabTestingModal, OnlinePharmacyModal } from '../../sections'
import { Link } from 'react-router-dom'
import { AiFillInfoCircle } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const DashboardHome = () => {
  const setShowLabTestingModal = registerationStore(state => state.setShowLabTestingModal)
  const setShowNursingModal = registerationStore(state => state.setShowNursingModal)
  const setShowOnlinePharmacyModal = registerationStore(state => state.setShowOnlinePharmacyModal)
  const userInfo = registerationStore(state => state.userInfo)
  const { t } = useTranslation()

  const handleCopy = () => {
    navigator.clipboard.writeText(userInfo.loginCode)
    toast.success(t('copied-to-clipboard'), { id: "clipboard" })
  }

  return (
    <header className="py-16 bg-white">
      <h1 className="text-4xl text-center pb-10">{t('your-mdhub-dashboard')}</h1>
      <section className="flex flex-col md:flex-row justify-center gap-x-10 rotating-ellipse-section px-4">
        <RotatingEllipse />
        <article className="pt-24 md:pt-0 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className='text-4xl'>{t('get-care-now')}</h2>
          </div>
          <p className="font-body max-w-[330px]">
            {t('select-a-service-for-the-wheel-or-form-below-to-book-a-new-appointment-today')}
          </p>
          <div className="flex gap-y-4 items-center md:items-start flex-col-reverse md:flex-row md:gap-x-6">
            <div className="w-full flex flex-col gap-y-3 text-primary">
              <article className="w-full flex items-center gap-x-3 lg:gap-x-1">
                <Link to="/services">
                  <AiFillInfoCircle className="text-2xl text-[#cfcece]" />
                </Link>
                <button className={`flex-1 rounded-full text-lg group hover:ring-1 hover:ring-virtualDoctor px-4 py-2 border border-virtualDoctor bg-virtualDoctor text-dark`}>
                  <a href="https://www.getmaple.ca/mdhub" target="_blank">
                    {t('Virtual Doctor')}
                  </a>
                </button>
              </article>

              <article className="flex items-center gap-x-3 lg:gap-x-1">
                <Link to="/services/mental-health">
                  <AiFillInfoCircle className="text-2xl text-[#cfcece]" />
                </Link>
                <button className={`flex-1 rounded-full text-lg group hover:ring-1 hover:ring-mentalHealth px-6 py-2 border border-mentalHealth bg-mentalHealth text-dark`}>
                  <a href="https://www.getmaple.ca/mdhub" target="_blank">
                    {t('mental-health')}
                  </a>
                </button>
              </article>

              <article className="flex items-center gap-x-3 lg:gap-x-1">
                <Link to="/services/online-pharmacy">
                  <AiFillInfoCircle className="text-2xl text-[#cfcece]" />
                </Link>
                <button onClick={() => setShowOnlinePharmacyModal(true)} className={`flex-1 rounded-full text-lg group hover:ring-1 hover:ring-onlinePharmacy px-6 py-2 border border-onlinePharmacy bg-onlinePharmacy text-dark`}>
                  {t('Online Pharmacy')}
                </button>
              </article>

              <article className="flex items-center gap-x-3 lg:gap-x-1">
                <Link to="/services/diagnostics">
                  <AiFillInfoCircle className="text-2xl text-[#cfcece]" />
                </Link>
                <button onClick={() => setShowLabTestingModal(true)} className={`flex-1 rounded-full text-lg group hover:ring-1 hover:ring-diagnostics px-6 py-2 border border-diagnostics bg-diagnostics text-dark`}>
                  {t('diagnostics-0')}
                </button>
              </article>

              <article className="flex items-center gap-x-3 lg:gap-x-1">
                <Link to="/services/nursing-homecare">
                  <AiFillInfoCircle className="text-2xl text-[#cfcece]" />
                </Link>
                <button onClick={() => setShowNursingModal(true)} className={`flex-1 rounded-full text-lg group hover:ring-1 hover:ring-nursingHomecare px-6 py-2 border border-nursingHomecare bg-nursingHomecare text-dark`}>
                  {t('nursing-and-homecare-0')}
                </button>
              </article>

            </div>
            {
              userInfo.loginCode && (
                <div className="space-y-5">
                  <div className="pt-3 flex gap-x-2">
                    <div>
                      {t('your-maple-login-code')}: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
                    <div className="cursor-pointer" onClick={handleCopy}>
                      <TiClipboard className="text-2xl" />
                    </div>
                  </div>
                  <div className="hidden pt-3 lg:flex gap-x-2">
                    <div>
                      {t('your-maple-login-code')}: <strong className="cursor-pointer underline">{userInfo.loginCode}</strong> </div>
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