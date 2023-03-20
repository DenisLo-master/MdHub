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

const OnlinePharmacyServices = () => {
	const { t } = useTranslation()
  return (
    <section className="bg-primary text-white py-14 px-4">
      <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
        <h3 className="text-4xl md:text-5xl">
          {t('get-medical-treatment-online')}
        </h3>
        <p className="font-body text-ligh">
          {t('our-online-doctors-can-treat-your-health-conditions-and-concerns-without-you-ever-having-to-leave-home-book-an-appointment-with-specialists-like-dermatologists-endocrinologists-mental-health-therapists-gynecologists-and-more')}
        </p>
      </div>

      <section className="py-10 max-w-[70rem] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={MedicalTreatmentBC} alt="Birth Control" />
            <div className="py-4 text-center bg-white text-dark">
              {t('birth-control')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentED} alt="Erectile Dysfunction" />
            <div className="py-4 text-center bg-white text-dark">
              {t('erectile-dysfunction')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentAcne} alt="Acne" />
            <div className="py-4 text-center bg-white text-dark">
              {t('acne')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentUTI} alt="Urinary Tract Infections" />
            <div className="py-4 text-center bg-white text-dark">
              {t('urinary-tract-infections')}
            </div>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>{t('dermatology')}</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>{t('mental-health-therapy')}</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>{t('endocrinology')}</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>{t('naturopathy')}</p>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <h2 className="text-6xl whitespace-nowrap text-center">{t('many-more')}</h2>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/register">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-out">
                {t('sign-up-today')}
              </button>
            </Link>
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

export default OnlinePharmacyServices