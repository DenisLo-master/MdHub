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
  VirtualCare04,
  Purple
} from '../../assets'
import { useTranslation } from 'react-i18next'
import FAQ from '../../components/FAQ.jsx'

import { virtualDoctorHowItWorksData, virtualDoctorFAQData } from '../../constants'
import { VirtualDoctorServices } from '../../sections'

const WORDS = ["diagnosis", "prescriptions & renewals", "doctors notes", "referrals to specialists", "mental health", "general health advise", "lab requisitions"]

const ServicesVirtualDoctor = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className="font-main py-10">
      <header className="bg-virtualDoctor text-white w-full py-10 relative">
        <div className="max-w-[83rem] mx-auto flex flex-col justify-center h-full">
          <article className="px-4 space-y-5 flex flex-col items-center lg:items-start text-center">
            <h2 className="text-6xl lg:text-[88px]">
              {t('virtual-care')}
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p className="text-center lg:text-left">
                {t('never-wait-for-a-doctor-again-trips-to-the-walk-in-clinic-and-hospitals-are-costly-and-time-consuming-with-mdhub-treatment-and-diagnosis-for-70-of-medical-issues-can-be-done-virtually')}
              </p>
              <p className="text-center lg:text-left">
                {t('connect-with-a-doctor-in-minutes-24-7-or-book-an-appointment-with-a-specialist-no-referral-needed')}
              </p>

            </div>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border hover:border-[#1EBC91] bg-white hover:bg-[#1EBC91]  text-[#3F3F3F] hover:text-[white] border-white  transition-all ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={VirtualDoctorBanner} alt="virtual doctor" />
        </div>
      </header>





      <section className="lg:block relative bg-white py-14 pb-28">
        <div className="relative virtual-health text-center flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="text-5xl md:text-6xl">
                    {t(`${word}`)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <VirtualDoctorServices />
      <section className="py-10 bg-white text-gray-800 px-4">
        <h2 className="text-5xl text-center font-semibold pb-4">{t('how-it-works')}</h2>
        <div className="w-full max-w-[76rem] mx-auto">
          <section className="flex flex-col flex-wrap items-center text-center md:text-left lg:flex-row justify-between">
            <article className="max-w-[90vw] md:max-w-[560px] flex items-center justify-between bg-[#DDD8FF] p-6 rounded-lg mt-8">
              <div className='w-1/2'>
                <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                  1
                </div>
                <h2 className="text-2xl py-3 pb-4 mb-4 border-b border-dark leading-[1.2em] text-left">
                  {t('describe-your-symptoms-using-our-app')}
                </h2>
                <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                  {t('open-the-app-and-click-the-get-care-button-describe-your-symptoms-and-one-of-our-healthcare-providers-will-review-your-request-in-seconds')}
                </p>
              </div>
              <div className="pt-4">
                <img className="w-full max-w-[210px]" src={VirtualCare01} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[90vw] md:max-w-[560px] flex items-center justify-between bg-[#DDD8FF] p-6 rounded-lg mt-8">
              <div className="w-1/2">
                <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                  2
                </div>
                <h2 className="text-2xl py-3 pb-4 mb-4 border-b border-dark leading-[1.2em] text-left">
                  {t('chat-with-a-doctor-or-nurse-practitioner')}
                </h2>
                <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                  {t('typically-youll-be-connected-with-a-healthcare-provider-over-text-but-they-may-request-a-video-or-audio-chat-if-necessary')}
                </p>
              </div>
              <div className="pt-4">
                <img className="w-full max-w-[210px]" src={VirtualCare02} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[90vw] md:max-w-[560px] flex items-center justify-between bg-[#DDD8FF] p-8 rounded-lg mt-8">
              <div className="w-1/2">
                <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                  3
                </div>
                <h2 className="text-2xl text-dark py-3  pb-4 mb-4 leading-[1.2em] border-b border-dark text-left">
                  {t('get-a-diagnosis-or-prescription')}
                </h2>
                <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                  {t('our-virtual-doctors-can-diagnose-and-provide-prescriptions-and-prescription-delivery-is-available-at-no-extra-cost')}
                </p>
              </div>
              <div className="pt-4">
                <img className="w-full max-w-[210px]" src={VirtualCare03} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[90vw] md:max-w-[560px] flex items-center justify-between bg-[#DDD8FF] p-6 rounded-lg mt-8">
              <div className="w-1/2">
                <div className="bg-[#3F3F3F] text-white  rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                  4
                </div>
                <h2 className="text-2xl pt-3 pb-4 mb-4 leading-[1.2em] border-b border-dark text-left">
                  {t('return-to-your-mdhub-dashboard')}
                </h2>
                <p className="max-w-[260px] leading-[1.25em] font-body text-left">
                  {t('access-any-of-your-additional-member-benefits-like-our-online-pharmacy-nursing-services-or-lab-diagnostics')}
                </p>
              </div>
              <div className="pt-4">
                <img className="w-full max-w-[210px]" src={VirtualCare04} alt="How It Works" />
              </div>
            </article>
          </section>

          <div className="flex justify-center py-10">
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-[480px] group hover:ring-1 hover:ring-[#1EBC91] py-2 border flex justify-center items-center space-x-2  border-none bg-[#3F3F3F] hover:bg-[#1EBC91] transition-all ease-out duration-300 text-white font-helvetica px-4 font-normal`}
              >
                {t('sign-up-today')}
              </button>
            </Link>
          </div>

          <div className="px-4">
            <h3 className="text-center text-4xl md:text-5xl pt-10 py-20">
              {t('dont-just-take-it-from-us')}
            </h3>
            <div className="w-full max-w-6xl mx-auto flex md:flex-row gap-y-4 item-center justify-between text-center flex-wrap md:flex-nowrap">
              <article className="md:basis-auto basis-1/2 space-y-6 text-center">
                <h2 className="text-[#5345AD] text-7xl">4.9/5</h2>
                <p className="font-body mx-11 md:mx-0 lg:max-w-[170px]">{t('average-user-satisfaction-rating')}</p>
              </article>
              <article className="md:basis-auto basis-1/2 space-y-6 text-center">
                <h2 className="text-[#5345AD] text-7xl">91%</h2>
                <p className="font-body mx-11 md:mx-0 lg:max-w-[220px]">{t('of-medical-issues-resolved-in-the-first-interaction')}</p>
              </article>
              <article className="md:basis-auto basis-1/2 space-y-6 text-center">
                <h2 className="text-[#5345AD] text-7xl">65%</h2>
                <p className="font-body mx-11 md:mx-0 lg:max-w-[200px]">{t('of-visits-prevent-a-workplace-absence')}</p>
              </article>
              <article className="md:basis-auto basis-1/2 space-y-6 text-center">
                <h2 className="text-[#5345AD] text-7xl">3.6</h2>
                <p className="font-body mx-11 md:mx-0 lg:max-w-[170px]">{t('hours-saves-per-consultation-on-average')}</p>
              </article>
            </div>
          </div>
          <section className="py-10 font-body flex flex-col gap-y-5">
            {
              virtualDoctorFAQData.map(faqItem => (
                <FAQ
                  key={faqItem.id}
                  question={t(`${faqItem.question}`)}
                  bgColor={"#A293FF"}
                >
                  <p>
                    {t(`${faqItem.answer}`)}
                  </p>
                  {
                    faqItem.secondParagraph && (
                      <p className="pt-4">
                        {t(`${faqItem.secondParagraph}`)}
                      </p>
                    )
                  }
                </FAQ>
              ))
            }
          </section>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor