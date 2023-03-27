import React from 'react'
import { ForYouHeaderBg } from '../../assets'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ForYouHeaderSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative bg-[#DB8E96] font-main">
      <img className="hidden lg:block absolute  object-cover w-full h-[420px]" src={ForYouHeaderBg} alt="For You" />
      <div className="relative z-10 w-full max-w-[900px] md:pl-10 2xl:pl-20 py-10 px-4 text-center lg:text-left space-y-4 flex flex-col items-center md:items-start">
        <h2 className="text-[70px] lg:text-[88px] leading-[80px] text-white">
          {t('healthcare-without-the-headaches')}
        </h2>
        <p className="font-body text-white">
          {t('with-mdhub-our-members-can-say-goodbye-to-weeks-of-waiting-for-doctor-appointments-or-long-waits-at-hospitals-forget-driving-and-parking-to-get-a-treatment-our-team-of-over-1-500-canadian-certified-medical-practitioners-is-available-on-demand-from-anywhere-allowing-you-to-take-back-control-of-your-health-members-have-full-control-of-when-and-how-they-access-medical-services-and-can-benefit-from-being-proactive-with-their-care-choices')}
        </p>
        <Link className="block" to="/register">
          <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-virtualDoctor border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
            {t('sign-up-today')}
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ForYouHeaderSection