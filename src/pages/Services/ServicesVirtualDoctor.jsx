import React from 'react'
import { Link } from 'react-router-dom'
import {
  VirtualDoctorBanner,
  MedicalTreatmentAcne,
  MedicalTreatmentED,
  MedicalTreatmentUTI,
  MedicalTreatmentBC,
  OkIconWhite,
  VirtualCare01,
  VirtualCare02,
  VirtualCare03,
  VirtualCare04
} from '../../assets'
import { useTranslation } from 'react-i18next'
import FAQ from '../../components/FAQ.jsx'

import { virtualDoctorHowItWorksData } from '../../constants'
import { VirtualDoctorServices } from '../../sections'

const WORDS = ["diagnosis", "prescriptions & renewals", "doctors notes", "referrals to specialists", "mental health", "general health advise", "lab requisitions"]

const ServicesVirtualDoctor = () => {
  const { t, i18n } = useTranslation()
  return (
   <section className="font-main py-10">
      <header className="bg-virtualDoctor text-white w-full lg:h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto flex flex-col justify-center h-full">
          <article className="px-4 space-y-5 flex flex-col items-center lg:items-start text-center">
            <h2 className="text-6xl lg:text-[88px]">
              {t('virtual-care')}
            </h2>            
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p className="text-center lg:text-left">
                {t('treatment-and-diagnosis-for-70-of-medical-issues-can-be-done-virtually-connect-with-a-virtual-doctor-in-minutes-24-7-or-book-an-appointment-with-a-specialist-no-referral-needed')}
              </p>
            </div>
            <Link className="block" to="/register">
            <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-virtualDoctor border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={VirtualDoctorBanner} alt="virtual doctor" />
        </div>
      </header>

      <section className="hidden lg:block relative bg-white py-14 pb-28">
        <div className="relative virtual-health text-center flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="md:text-6xl">
                    {t(`${word}`)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <VirtualDoctorServices />
      <section className="py-10 bg-white text-gray-800">
        <h2 className="text-4xl text-center pb-12">How it works</h2>
        <div className="w-full max-w-[76rem] mx-auto">
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <article className="max-w-[260px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                1
              </div>
              <h2 className="text-2xl py-3 pb-4 mb-4 border-b border-dark leading-[1.2em]">
                {t('describe-your-symptoms-using-our-app')}
              </h2>
              <p className="max-w-[260px] font-body leading-[1.25em]">
                {t('open-the-app-or-browser-and-click-the-get-care-button-describe-your-symptoms-and-one-of-our-healthcare-providers-will-review-your-request-in-minutes')}
              </p>
              <div className={`${i18n.language === "en" ? "pt-[50px]" : "pt-[120px]"}`}>
                <img className="w-full max-w-[210px]" src={VirtualCare01} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[260px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                2
              </div>
              <h2 className="text-2xl py-3 pb-4 mb-4 border-b border-dark leading-[1.2em]">
                {t('chat-with-a-doctor')}
              </h2>
              <p className="max-w-[260px] font-body pt-7 leading-[1.25em]">
                {t('typically-youll-be-connected-with-a-healthcare-provider-over-text-but-they-may-request-a-video-or-audio-chat-if-necessary')}
              </p>
              <div className={`${i18n.language === "en" ? "pt-4 lg:pt-[74px]" : "pt-[140px]"}`}>
                <img className="w-full max-w-[210px]" src={VirtualCare02} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[260px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                3
              </div>
              <h2 className="text-2xl text-dark py-3  pb-4 mb-4 leading-[1.2em] border-b border-dark">
                {t('get-a-diagnosis-or-prescription-and-or-lab-requisition-or-doctors-note')}
              </h2>
              <p className="max-w-[260px] font-body leading-[1.25em]">
                {t('our-virtual-doctors-can-diagnose-and-provide-prescriptions-and-prescription-delivery-is-available-at-no-extra-cost')}
              </p>
              <div className="pt-4 lg:pt-[54px]">
                <img className="w-full max-w-[210px]" src={VirtualCare03} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[260px]">
              <div className="bg-gradient-primary text-white  rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                4
              </div>
              <h2 className="text-2xl pt-3 pb-4 mb-4 leading-[1.2em] border-b border-dark">
                {t('return-to-mdhub-dashboard-to-access-any-of-your-additional-membership-benefits')}
              </h2>
              <p className="max-w-[260px] leading-[1.25em] font-body">
                {t('pharmacy-nursing-lab-diagnostics-and-mental-health')}
              </p>
              <div className="pt-2 lg:pt-[70px]">
                <img className="w-full max-w-[210px]" src={VirtualCare04} alt="How It Works" />
              </div>
            </article>
          </section>

          <div className="flex justify-center py-10">
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                {t('sign-up-today')}
              </button>
            </Link>
          </div>

          <div className="px-4">
            <h3 className="text-center text-4xl md:text-5xl pt-10 py-20">
              {t('dont-just-take-it-from-us')}
            </h3>
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-y-4 item-center justify-between text-center">
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">4.9/5</h2>
                <p className="font-body lg:max-w-[170px]">{t('average-user-satisfaction-rating')}</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">91%</h2>
                <p className="font-body lg:max-w-[220px]">{t('of-medical-issues-resolved-in-the-first-interaction')}</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">65%</h2>
                <p className="font-body lg:max-w-[200px]">{t('of-visits-prevent-a-workplace-absence')}</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">3.6</h2>
                <p className="font-body lg:max-w-[170px]">{t('hours-saves-per-consultation-on-average')}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor