import React from 'react'
import { Link } from 'react-router-dom'
import {
  NursingAndHomeCareServices01,
  NursingAndHomeCareServices02,
  NursingAndHomeCareServices03,
  NursingAndHomeCareServices04,
  Orange,
  OrangeFrench
} from '../../assets'
import { useTranslation } from 'react-i18next'

const NursingAndHomecareServices = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-[#FFB683] text-dark w-full lg:h-[530px] py-10 relative">
      <div className="max-w-[83rem] mx-auto flex flex-col justify-center h-full">
        <article className="px-4 space-y-5 flex flex-col items-center lg:items-start text-center">
          <h2 className="text-5xl lg:text-[48px] text_black font-semibold max-w-lg text-left">
            {t('get-access-to-nursing-and-homecare')}
          </h2>
          <div className="space-y-5 font-body text-lg max-w-lg">
            <p className="text-center lg:text-left text_black text-base leading-4">
              {t('if-you-or-a-loved-one-have-a-medical-condition-that-requires-immediate-or-ongoing-treatment-nursing-can-make-life-much-easier-or-if-they-need-some-extra-help-at-home-our-homecare-helpers-can-help-shoulder-the-burden')}
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
        <img className="hidden lg:block absolute right-5 top-5" src={Orange} alt="virtual doctor" />
      </div>

    </section>
  )
}

export default NursingAndHomecareServices;
