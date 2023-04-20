import React from 'react'
import { Link } from 'react-router-dom'
import {
  DiagnosticServices01,
  DiagnosticServices02,
  DiagnosticServices03,
  DiagnosticServices04,
  Pink,
  PinkFrench
} from '../../assets'
import { useTranslation } from 'react-i18next'

const DiagnosticServices = () => {
  const { i18n, t } = useTranslation()

  return (
    <section className="bg-[#FBC7DA] text-dark w-full lg:h-[530px] py-10 relative">
      <div className="max-w-[83rem] mx-auto flex flex-col justify-center h-full">
        <article className="px-8 space-y-5 flex flex-col items-center lg:items-start text-center">
          <h2 className="text-5xl lg:text-[48px] text_black max-w-lg text-center md:text-left">
            {t('get-on-site-lab-testing-and-diagnostics')}
          </h2>
          <div className="space-y-5 font-body text-lg max-w-lg">
            <p className="text-center lg:text-left text_black text-base leading-6">
              {t('mdhubs-comprehensive-on-site-lab-services-can-help-you-get-answers-fast-test-for-infections-stis-get-vaccines-and-more-0')}
            </p>
          </div>
          <Link className="block" to="/register">
            <button className="rounded-full w-[240px] md:w-[480px] mt-[48px] text-lg flex justify-center py-3 border bg-[#3F3F3F] hover:bg-[#1EBC91] border-none hover:opacity-80 transition-all ease-in-out duration-300 text-white font-helvetica">
              {t('sign-up-today')}
            </button>
            <button className="rounded-full w-[240px] md:w-[480px] mt-8 text-lg flex justify-center py-3 border bg-white hover:bg-[#1EBC91] border-none hover:opacity-80 transition-all ease-in-out duration-300 text-[#3F3F3F] hover:text-white font-helvetica">
              {t('get-care-now')}
            </button>
          </Link>
        </article>
        <img className="hidden lg:block absolute right-5 top-5" src={i18n.language !== "en" ? PinkFrench : Pink} alt="virtual doctor" />
      </div>

    </section>
  )
}

export default DiagnosticServices;
