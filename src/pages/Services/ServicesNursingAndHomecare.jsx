import React from 'react'
import { Link } from 'react-router-dom'
import { NursingAndHomecareBanner } from '../../assets'
import { nursingServices, nursingAndHomecareHowItWorksData, nursingHomecareFAQData } from '../../constants'
import { useTranslation } from 'react-i18next'
import { NursingAndHomecareServices } from '../../sections'
import FAQ from '../../components/FAQ'



const ServicesNursingAndHomecare = () => {
  const { t } = useTranslation()

  const WORDS = [t('mobile vaccination'), t('wound care and treatment'), t('palliative care'), t('post surgery care'), t('IV medication'), t('injection infusions'), t('vital signs monitoring')]

  return (
    <section className="py-10 font-main">
      <header className="bg-nursingHomecare text-white w-full lg:h-[560px] py-10 relative text-center lg:text-left">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4">
            <h2 className="text-[55px] lg:text-[88px]">
              {t('nursing-and-homecare')}
            </h2>
            <div className="space-y-3 leading-6 font-body text-lg max-w-lg">
              <p>
                {t('life-is-busy-but-you-want-to-ensure-your-loved-ones-are-taken-care-of-our-nurses-and-homecare-helpers-come-directly-to-you-when-you-need-them')}
              </p>
              <p>
                {t('our-team-of-certified-nurses-are-fully-capable-of-assisting-with-many-medical-needs-whether-its-checking-vitals-and-assisting-ongoing-medical-conditions-post-operative-care-or-testing-theyre-here-to-help')}
              </p>
            </div>
            <Link className="flex justify-center lg:block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-nursingHomecare border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={NursingAndHomecareBanner} alt="Nursing and Homecare" />
        </div>
      </header>
      <section className="bg-white pt-14">
        <div className="hidden relative virtual-health text-center lg:flex justify-center flip-words mb-32">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="md:text-6xl">
                    {word}
                  </span>
                ))
              }
            </div>
          </div>
        </div>

        <NursingAndHomecareServices/>

        <section className=" pt-32 py-10">
          <h2 className="text-4xl pb-4 text-center">
            {t('How It Works')}
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              {
                nursingAndHomecareHowItWorksData.map((step => (
                  <article key={step.id} className="flex flex-col justify-between items-center">
                    <div className="flex flex-col gap-x-8">
                      <article className="pb-2 w-[220px]">
                        <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                          {step.id}
                        </div>
                      </article>
                      <article className="w-full max-w-[220px] space-y-5 border-b border-dark pb-4 mb-4">
                        <p className="leading-[1.2em] text-2xl">
                          {t(`${step.text}`)}
                          
                        </p>
                        {
                          step.note && (
                            <p className="font-body text-dark text-sm">{t(`${step.note}`)}</p>
                          )
                        }
                      </article>
                    </div>
                    <img className="w-full pt-4 max-w-[220px]" src={step.image} alt={step.text} />
                  </article>
                )))
              }
            </div>
          </section>
        </section>
      </section>
      
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5 px-4">
        {
          nursingHomecareFAQData.map(faqItem => (
            <FAQ 
              key={faqItem.id}
              question={t(`${faqItem.question}`)}
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

export default ServicesNursingAndHomecare
