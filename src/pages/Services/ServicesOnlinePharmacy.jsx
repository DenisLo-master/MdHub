import React from 'react'
import { OnlinePharmacyBanner, LogoWhite, OnlinePharmacyHowItWorks01, OnlinePharmacyHowItWorks02, OnlinePharmacyHowItWorks03 } from '../../assets'
import { onlinePharmacyHowItWorksData, onlinePharmacyFAQData } from '../../constants'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import FAQ from '../../components/FAQ.jsx'
import { OnlinePharmacyServices } from '../../sections'

const WORDS = ["birth control", "erectile dysfunction", "plan b", "antibiotics", "mental health medication"]

const ServicesOnlinePharmacy = () => {
  const { t } = useTranslation()
  return (
    <section className="font-main py-10">
      <header className="bg-onlinePharmacy text-white w-full py-10 pb-20 relative text-center lg:text-left">
        <div className="max-w-[83rem] mx-auto flex items-center justify-between">
          <article className="space-y-5 px-8 flex flex-col items-center lg:items-start text-center w-full">
            <h2 className="text-center lowercase lg:text-left text-[70px] lg:text-[88px] max-w-[300px] leading-[80px] pb-5">
              {t('Online Pharmacy')}
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p className="text-center lg:text-left font-body text-lg max-w-lg ">
                {t('stop-wasting-time-chasing-down-refills-or-waiting-in-line-easily-access-our-online-pharmacy-to-get-prescriptions-filled-or-renewed-and-delivered-right-to-your-door')} {" "}
              </p>

              <p className="text-center lg:text-left font-body text-lg max-w-lg py-3">
                {t('with-our-membership-youll-get-free-delivery-in-quebec-automatic-refills-and-24-7-emergency-service')}
              </p>
            </div>
            <Link className="flex lg:block justify-center" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border hover:border-[#1EBC91] bg-white hover:bg-[#1EBC91]  text-[#3F3F3F] hover:text-[white] border-white  transition-all ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-16" src={OnlinePharmacyBanner} alt="virtual doctor" />
        </div>
      </header>
      <section className="bg-white pt-14">
        <div className="relative virtual-health text-center flex justify-center flip-words mb-32">
          <h2 className="text-primary text-center text-3xl md:text-5xl lg:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-12 md:top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="text-3xl md:text-5xl lg:text-6xl">
                    {t(`${word}`)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        <OnlinePharmacyServices />
        <div className="py-10 px-4 text-center md:text-left">
          <h2 className="text-4xl pb-10 text-center">
            {t('How It Works')}
          </h2>
          <section className="w-full max-w-7xl space-y-6 mx-auto">
            <div className="font-body flex flex-col gap-y-3 text-center">
              <p className='w-full max-w-5xl mx-auto'>
                <Trans
                  i18nKey="if-you-already-have-a-prescription-follow-the-steps-below-for-a-less-than-strong-greater-than-new-prescription-less-than-strong-greater-than-first-visit-our-less-than-strong-greater-than-virtual-care-less-than-strong-greater-than-link-from-your-user-dashboard-to-see-a-doctor-and-obtain-one-once-finished-directly-click-to-transfer-it-to-our-pharmacy-affiliate-medzy-or-choose-your-own-local-pharmacy"
                />
              </p>
              <p>
                {t('when-transferring-to-medzy-x-mdhub-follow-the-below-steps')}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-5 justify-center ">
              <section className="flex flex-col flex-wrap items-center text-center md:text-left lg:flex-row justify-center">
                <article className="max-w-[90vw] md:max-w-[400px] flex  justify-between bg-[#C3EABC] p-6 rounded-lg mt-8 lg:mr-5">
                  <div className='w-1/2'>
                    <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                      1
                    </div>

                    <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                      {t('once-logged-into-your-member-dashboard-click-online-pharmacist-sign-up-and-complete-your-health-profile-in-5-minutes')}
                    </p>
                  </div>
                  <div className="pt-4">
                    <img className="w-full max-w-[210px]" src={OnlinePharmacyHowItWorks01} alt="How It Works" />
                  </div>
                </article>

                <article className="max-w-[90vw] md:max-w-[400px] flex justify-between bg-[#C3EABC] p-6 rounded-lg mt-8 lg:mr-5">
                  <div className="w-1/2">
                    <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                      2
                    </div>

                    <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                      {t('well-transfer-your-prescriptions-from-your-old-pharmacy-if-required-or-will-input-new-prescriptions-obtained-during-virtual-care-consultation')}
                    </p>
                  </div>
                  <div className="pt-4">
                    <img className="w-full max-w-[210px]" src={OnlinePharmacyHowItWorks02} alt="How It Works" />
                  </div>
                </article>

                <article className="max-w-[90vw] md:max-w-[400px] flex justify-between bg-[#C3EABC] p-8 rounded-lg mt-8 lg:mr-5">
                  <div className="w-1/2">
                    <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                      3
                    </div>

                    <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                      {t('after-verifying-the-prescription-well-deliver-your-medicine-directly-to-your-door')}
                    </p>
                  </div>
                  <div className="pt-4">
                    <img className="w-full max-w-[210px]" src={OnlinePharmacyHowItWorks03} alt="How It Works" />
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>

        <section className="flex flex-col items-center lg:flex-row justify-center gap-x-8 py-12">
          <article className="w-full font-body max-w-lg rounded bg-[#90C387] text-white p-6 md:p-8 space-y-5">
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
              <li className="flex justify-between items-center text-light pb-6">
                <p>{t('medications')}</p>
                <p className="text-xs">{t('please-contact-your-insurance-provider')}</p>
              </li>
              <li>
                <img src={LogoWhite} alt="MDHUB" className='w' />
              </li>
            </ul>
          </article>
          <article className="p-6 md:p-8 space-y-4">
            <p className="text-xl  w-full font-body font-thin max-w-[450px] pb-5">
              {t('get-top-tier-service-at-a-great-price-when-you-use-our-online-pharmacy-you-only-pay-the-amount-that-isnt-covered-by-your-insurance')}
            </p>
            <Link className="block" to="/register">
              <button className="rounded-full w-full text-lg flex justify-center py-2 border-none transition-all ease-out duration-300 bg-[#3F3F3F] hover:bg-[#1EBC91] text-white font-helvetica">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
        </section>
      </section>
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5 px-4">
        <h2 className="text-5xl text-center font-main pb-4">{t("FAQ's")}</h2>
        {
          onlinePharmacyFAQData.map(faqItem => (
            <FAQ
              key={faqItem.id}
              question={t(`${faqItem.question}`)}
              bgColor={"#90C387"}
            >
              <p>
                {t(`${faqItem.answer}`)}
              </p>
            </FAQ>
          ))
        }
      </section>
    </section>
  )
}

export default ServicesOnlinePharmacy
