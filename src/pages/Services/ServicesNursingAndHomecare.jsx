import React from 'react'
import { Link } from 'react-router-dom'
import { NursingAndHomecareBanner } from '../../assets'
import { nursingServices, nursingAndHomecareHowItWorksData } from '../../constants'
import { useTranslation } from 'react-i18next'
import { NursingAndHomecareServices } from '../../sections'

const WORDS = ['mobile vaccination', 'wound care and treatment', 'palliative care', 'post surgery care', "IV medication", "injection infusions", "vital signs monitoring"];

const ServicesNursingAndHomecare = () => {
  const { t } = useTranslation()
  return (
    <section className="py-10 font-main">
      <header className="bg-nursingHomecare text-white w-full lg:h-[530px] py-10 relative text-center lg:text-left">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4">
            <h2 className="text-[55px] lg:text-[88px]">
              {t('nursing-and-homecare')}
            </h2>
            <div className="space-y-3 leading-6 font-body text-lg max-w-lg">
              <p>
                {t('our-professional-nurses-come-directly-to-you-plus-our-team-of-homecare-agents-are-there-when-you-need-them-offering-compassionate-care-for-seniors-people-requiring-post-operative-care-and-people-with-disabilities')}
              </p>
              <p>
                {t('whether-its-medical-services-or-homecare-we-can-help-you-with-most-of-your-needs')}
              </p>
            </div>
            <Link className="flex justify-center lg:block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-nursingHomecare border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={NursingAndHomecareBanner} alt="Nursing and Homecare" />
        </div>
      </header>
      <section className="bg-white pt-14">
        <div className="hidden relative virtual-health text-center lg:flex justify-center flip-words mb-32">
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

        <NursingAndHomecareServices/>

        <section className=" pt-32 py-10">
          <h2 className="text-4xl pb-4 text-center">
            {t('How It Works')}
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              {
                nursingAndHomecareHowItWorksData.map((step => (
                  <article key={step.id} className="flex flex-col justify-between items-center">
                    <div className="flex flex-col gap-x-8">
                      <article className="pb-2 w-[220px]">
                        <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                          {step.id}
                        </div>
                      </article>
                      <article className="w-full max-w-[220px] space-y-5 border-b border-dark pb-4 mb-4">
                        <p className="leading-[1.2em] text-2xl">
                          {t(`${step.text}`)}
                          
                        </p>
                        {
                          step.note && (
                            <p className="font-body text-dark text-sm">{t(`${step.note}`)}</p>
                          )
                        }
                      </article>
                    </div>
                    <img className="w-full pt-4 max-w-[220px]" src={step.image} alt={step.text} />
                  </article>
                )))
              }
            </div>
          </section>
        </section>
      </section>
      <section className="bg-white">
        <div className="w-full max-w-[1200px] mx-auto pt-12">
          <h2 className="md:pl-14 font-main text-[30px] text-center md:text-left text-black pb-4">
            {t('services-suitable-for-all-your-needs')}
          </h2>
          <section className="flex justify-center flex-wrap gap-8 text-center">
            {
              nursingServices.map((item, index) => (
                <article key={index} className={`shadow-cardService w-[127px] h-[120px] text-xs text-center flex justify-center items-center border-[0.25px] border-[#cfc5c5] font-main ${index === 0 ? "bg-primary text-white" : 'bg-white text-gray-800'}`}>
                  <h2 className="max-w-[100px]">{t(`${item}`)}</h2>
                </article>
              ))
            }
          </section>
          <div className="text-sm font-body md:pl-14 text-gray-800 px-4">
            <h2 className="py-6 font-semibold">
              {t('require-a-different-service-send-us-an-email-here')}
            </h2>
            <p className="max-w-[1100px]">
              <strong className="font-bold">{t('note')}:</strong> {t('above-pricing-does-not-include-laboratory-fees-or-additional-materials-such-as-vitamin-drips-or-the-cost-of-medication-our-team-will-confirm-all-appointments-by-email-or-phone-and-advice-of-any-additional-fees-homecare-services-require-a-minimum-booking-of-3-hours-for-montreal-and-4-hours-for-outside-of-montreal')}.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesNursingAndHomecare
