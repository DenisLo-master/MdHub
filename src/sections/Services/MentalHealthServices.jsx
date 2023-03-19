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
  VirtualCare04
} from '../../assets'
import { useTranslation } from 'react-i18next'

const MentalHealthServices = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-primary text-white py-14 px-4">
      <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
        <h3 className="text-4xl md:text-5xl">
          {t('get-care-for-your-mental-health')}
        </h3>
        <p className="font-body max-w-xl mx-auto text-ligh">
          {t('we-can-all-use-a-little-help-sometimes-get-mental-health-care-and-support-with-mdhubs-suite-of-mental-health-services-so-you-can-feel-your-best')}
        </p>
      </div>

      <section className="py-10 max-w-[70rem] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={MentalHealthServices01} alt="Anxiety" />
            <div className="py-4 text-center bg-white text-dark">
              {t('anxiety-0')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MentalHealthServices02} alt="Depression" />
            <div className="py-4 text-center bg-white text-dark">
              {t('depression-0')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MentalHealthServices03} alt="Disordered eating" />
            <div className="py-4 text-center bg-white text-dark">
              {t('disordered-eating')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MentalHealthServices04} alt="Sleep issues" />
            <div className="py-4 text-center bg-white text-dark">
              {t('sleep-issues')}
            </div>
          </article>

          <article className="lg:col-span-2 relative p-4 bg-white text-center text-dark rounded-md">
            <p>
              {t('loss-of-focus')}
            </p>
          </article>

          <article className="lg:col-span-2 relative p-4 bg-white text-center text-dark rounded-md">
            <p>
              {t('suicidal-thoughts')}
            </p>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/register">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-out">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/dashboard">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                {t('get-care-now')}
              </button>
            </Link>
          </article>
        </div>
      </section>
    </section>
  )
}

export default MentalHealthServices;