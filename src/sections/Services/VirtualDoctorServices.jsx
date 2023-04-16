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
  VirtualCare04,
  Purple
} from '../../assets'
import { useTranslation } from 'react-i18next'

const VirtualDoctorServices = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-virtualDoctor text-white w-full lg:h-[530px] py-10 relative">
      <div className="max-w-[83rem] mx-auto flex flex-col justify-center h-full">
        <article className="px-4 space-y-5 flex flex-col items-center lg:items-start text-center">
          <h2 className="text-5xl lg:text-[48px] text_black font-semibold max-w-lg text-left">
            {t('Most medical conditions can be treated online')}
          </h2>
          <div className="space-y-5 font-body text-lg max-w-lg">
            <p className="text-center lg:text-left text_black text-base leading-4">
              {t('Our online doctors can diagnose and treat your medical needs from the comfort of your phone or computer. Book an appointment with specialists, like dermatologists, endocrinologists, mental health therapists, gynecologists, and more.')}
            </p>
          </div>
          <Link className="block" to="/register">
            <button className="rounded-full w-[480px] mt-[48px] text-lg flex justify-center py-3 border bg-[#3F3F3F] border-none hover:opacity-80 transition-opacity ease-in-out duration-300 text-white font-helvetica">
              {t('sign-up-today')}
            </button>
            <button className="rounded-full w-[480px] mt-8 text-lg flex justify-center py-3 border bg-white border-none hover:opacity-80 transition-opacity ease-in-out duration-300 text-[#3F3F3F] font-helvetica">
              {t('Get Care Now')}
            </button>
          </Link>
          </article>
        <img className="hidden lg:block absolute right-5 top-5" src={Purple} alt="virtual doctor" />
        </div>

    </section>
  )
}

export default VirtualDoctorServices