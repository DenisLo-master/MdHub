import React from 'react'
import { OnlinePharmacyBanner, LogoWhite } from '../../assets'
import { onlinePharmacyHowItWorksData, onlinePharmacyFAQData } from '../../constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FAQ from '../../components/FAQ.jsx'

const WORDS = ["birth control", "erectile dysfunction", "plan b", "antibiotics", "pain control and management", "mental health medication"]

const ServicesOnlinePharmacy = () => {
  const { t } = useTranslation()
  return (
    <section className="font-main py-10">
      <header className="bg-onlinePharmacy text-white w-full py-10 pb-20 relative text-center lg:text-left">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4">
            <h2 className="text-[70px] lg:text-[88px] max-w-[380px] leading-[80px] pb-5">
              {t('online-pharmacy')}
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p>
                {t('stop-wasting-time-chasing-down-refills-or-waiting-in-line-easily-access-our-online-pharmacy-to-get-prescriptions-filled-or-renewed-and-delivered-right-to-your-door')} {" "}
                <strong>{t('your-pharmacist-is-just-a-text-away')}</strong>
              </p>

              <p>
                {t('with-our-membership-youll-get')}:
              </p>
              <ul className="lg:list-disc lg:pl-8">
                <li>{t('free-delivery-in-quebec')}</li>
                <li>{t('automatic-refills')}</li>
                <li>{t('24-7-emergency-service')}</li>
              </ul>
            </div>
            <Link className="flex lg:block justify-center" to="/register">
              <button className="rounded-full w-[240px] mt-10 text-lg flex justify-center py-3 border bg-white text-onlinePharmacy border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-16" src={OnlinePharmacyBanner} alt="virtual doctor" />
        </div>
      </header>
      <section className="bg-white py-14">
        <div className="relative virtual-health text-center hidden lg:flex justify-center flip-words mb-20">
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

        <div className="py-10">
          <h2 className="text-4xl pb-10 text-center">
            {t('How It Works')}
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-y-5 justify-between">
              {
                onlinePharmacyHowItWorksData.map((step => (
                  <article key={step.id} className="flex max-w-[260px] flex-col justify-between items-center">
                    <div className="flex flex-col gap-x-8">
                      <article className="pb-2">
                        <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                          {step.id}
                        </div>
                      </article>
                      <article className="w-full space-y-5 border-b border-dark pb-4 mb-4">
                        <p className={`leading-[1.2em] text-2xl ${step.id === 2 ? "pr-5" : ""}`}>
                          {t(`${step.text}`)}
                        </p>
                      </article>
                    </div>
                    <img className="pt-8 w-full" src={step.image} alt={step.text} />
                  </article>
                )))
              }
            </div>
          </section>
        </div>
        <section className="flex flex-col lg:flex-row justify-center gap-x-8 py-12">
          <article className="w-full font-body max-w-sm rounded bg-gradient-primary text-white p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-semibold">{t('invoice')}</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>{t('delivery')}</p>
                <p className="text-xs">{t('free')}</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>{t('24-7-emergency-service-0')}</p>
                <p className="text-xs">{t('free')}</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>{t('personalized-packaging')}</p>
                <p className="text-xs">{t('free')}</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>{t('medications')}</p>
                <p className="text-xs">{t('please-contact-your-insurance-provider')}</p>
              </li>
              <li>
                <img src={LogoWhite} alt="MDHUB" />
              </li>
            </ul>
          </article>
          <article className="p-6 md:p-8 space-y-4">
            <p className="text-3xl  w-full font-body font-thin max-w-[450px]">
              {t('get-top-tier-service-at-a-great-price-when-you-use-our-online-pharmacy-you-only-pay-the-amount-that-isnt-covered-by-your-insurance')}
            </p>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-primary">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
        </section>
      </section>
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5">
        {
          onlinePharmacyFAQData.map(faqItem => (
            <FAQ 
              key={faqItem.id}
              question={faqItem.question}
            >
                <p>
                  {faqItem.answer}
                </p>
            </FAQ>
          ))
        }  
      </section>
    </section>
  )
}

export default ServicesOnlinePharmacy