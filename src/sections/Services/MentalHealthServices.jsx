import React from 'react'
import { Link } from 'react-router-dom'
import {
  VirtualDoctorBanner,
  MentalHealthServices01,
  MentalHealthServices02,
  MentalHealthServices03,
  MentalHealthServices04,
  OkIconWhite,
  VirtualCare01,
  VirtualCare02,
  VirtualCare03,
  VirtualCare04,
  Yellow,
  YellowFrench
} from '../../assets'
import { useTranslation } from 'react-i18next'

const MentalHealthServices = () => {
  const { i18n, t } = useTranslation()
  return (
    <section className="bg-[#F6E2B0] text-dark w-full lg:h-[530px] py-10 relative">
      <div className="max-w-[83rem] mx-auto flex flex-col">
        <article className="px-4 space-y-5 flex flex-col items-center lg:items-start text-center">
          <h2 className="text-5xl lg:text-[48px] text_black font-semibold max-w-lg text-left">
            {t('get-care-for-your-mental-health')}
          </h2>
          <div className="space-y-5 font-body text-lg max-w-lg">
            <p className="text-center lg:text-left text_black text-base leading-4">
              {t('we-can-all-use-a-little-help-sometimes-get-mental-health-care-and-support-with-mdhubs-suite-of-mental-health-services-so-you-can-feel-your-best-0')}
            </p>
          </div>
          <Link className="block" to="/register">
            <button className="rounded-full w-[480px] mt-[48px] text-lg flex justify-center py-3 border bg-[#3F3F3F] hover:bg-[#1EBC91] border-none hover:opacity-80 transition-all ease-in-out duration-300 text-white font-helvetica">
              {t('sign-up-today')}
            </button>
            <button className="rounded-full w-[480px] mt-8 text-lg flex justify-center py-3 border bg-white hover:bg-[#1EBC91] border-none hover:opacity-80 transition-all ease-in-out duration-300 text-[#3F3F3F] hover:text-white font-helvetica">
              {t('get-care-now')}
            </button>
          </Link>
        </article>
        <img className="hidden lg:block absolute right-5 top-5" src={i18n.language !== "en" ? YellowFrench : Yellow} alt="virtual doctor" />
      </div>

    </section>
  )
}

export default MentalHealthServices;
