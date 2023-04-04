import React from 'react'
import { Link } from 'react-router-dom'
import {
  DiagnosticServices01,
  DiagnosticServices02,
  DiagnosticServices03,
  DiagnosticServices04,
} from '../../assets'
import { useTranslation } from 'react-i18next'

const DiagnosticServices = () => {
	const { t } = useTranslation()

	return (
    <section className="bg-primary text-white py-14 px-4">
      <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
        <h3 className="text-4xl md:text-5xl">
          {t('get-on-site-lab-testing-and-diagnostics')}
        </h3>
        <p className="font-body text-light max-w-xl mx-auto">
          {t('mdhubs-comprehensive-on-site-lab-services-can-help-you-get-answers-fast-test-for-infections-stis-get-vaccines-and-more')}
        </p>
      </div>

      <section className="py-10 max-w-[70rem] mx-auto">
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={DiagnosticServices01} alt="General assessments" />
            <div className="py-4 text-center bg-white text-dark">
              {t('general-assessments')}
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices02} alt="Specific testing" />
            <div className="py-4 text-center bg-white text-dark">
              {t('specific-testing')}
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices03} alt="Genetic screening" />
            <div className="py-4 text-center bg-white text-dark">
              {t('genetic-screening')}
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices04} alt="Annual health checkups" />
            <div className="py-4 text-center bg-white text-dark">
              {t('annual-health-checkups')}
            </div>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <h2 className="text-3xl md:text-6xl whitespace-nowrap text-center">{t('many-more')}</h2>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/register">
              <button className="rounded-full w-full text-[12px] md:text-lg  flex justify-center py-3 text-primary bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-out">
                {t('sign-up-today')}
              </button>
            </Link>
            <Link className="block w-full" to="/dashboard">
              <button className="rounded-full w-full text-[12px] md:text-lg  flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                {t('get-care-now')}
              </button>
            </Link>
          </article>
        </div>
      </section>
    </section>
  )
}

export default DiagnosticServices;
