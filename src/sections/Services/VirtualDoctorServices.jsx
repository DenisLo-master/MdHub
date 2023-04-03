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

const VirtualDoctorServices = () => {
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
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={MedicalTreatmentBC} alt="Birth Control" />
            <div className="md:py-4 text-center bg-white text-dark">
              {t('birth-control')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentED} alt="Erectile Dysfunction" />
            <div className="md:py-4 text-center bg-white text-dark">
              {t('erectile-dysfunction')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentAcne} alt="Acne" />
            <div className="md:py-4 text-center bg-white text-dark">
              {t('acne')}
            </div>
          </article>
          <article>
            <img className="w-full" src={MedicalTreatmentUTI} alt="Urinary Tract Infections" />
            <div className="md:py-4 text-center bg-white text-dark">
              {t('urinary-tract-infections')}
            </div>
          </article>

          <article className="flex justify-center items-center relative p-4 bg-white text-center text-dark rounded-md">
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
            <h2 className="text-6xl flex justify-center text-center">{t('many-more')}</h2>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/register">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-out">
                {t('sign-up-today')}
              </button>
            </Link>
            <Link className="block w-full" to="/dashboard">              
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                {t('See A Doctor')}
              </button>
            </Link>
          </article>
        </div>

        <div className="grid grid-cols-1 justify-cente lg:grid-cols-4 pt-16 py-10 gap-x-4 gap-y-8">
          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('diagnosis')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>prescriptions & renewals</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('lab requisitions')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('24-7-unlimited-access')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('doctors notes')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('referrals to specialists')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('mental health')}</h2>
          </article>

          <article className="flex items-center text-xl gap-x-3 text-white">
            <OkIconWhite />
            <h2>{t('general-health-advice')}</h2>
          </article>
        </div>
      </section>
    </section>
  )
}

export default VirtualDoctorServices