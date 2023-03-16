import React from 'react'
import { diagnosisHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const WORDS = ['virus', 'urine', 'blood', 'covid']

const ServicesDiagnostics = () => {
  const { t } = useTranslation()
  return (
    <section className="font-main text-dark py-10">
      <header className="bg-diagnostics diagnostics-bg text-white w-full py-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-2">
            <h2 className="text-[65px] lg:text-[88px] max-w-[450px] leading-[80px] pb-5">
              {t('lab-testing-and-diagnostics')}
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg pb-8 leading-5 px-2">
              <p>
                {t('avoid-the-wait-at-hospitals-and-clinics-with-safe-fast-and-professional-lab-testing-from-the-comfort-of-your-home-or-office')}
                <strong>{" "}{t('get-results-fast')}</strong>
              </p>
              <p>
                {t('our-certified-partner-labs-can-process-over-300-different-screenings-to-provide-you-with-a-comprehensive-health-assessment-and-get-you-answers-fast')}
              </p>
            </div>
            <Link className="block px-2" to="register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-diagnostics border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
        </div>
      </header>
      <section className="bg-white lg:py-14">
        <div className="hidden relative virtual-health text-center lg:flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="md:text-6xl">
                    {t(`${word}`)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 pb-24">
        <h2 className="text-4xl pb-10 text-center">
          How It Works
        </h2>
        <section className="w-full max-w-6xl space-y-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            {
              diagnosisHowItWorksData.map((step => (
                <article key={step.id} className="flex flex-col justify-between items-center">
                  <div className="flex flex-col gap-x-8">
                    <article className="pb-2">
                      <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                        {step.id}
                      </div>
                    </article>
                    <article className="w-full max-w-[220px] space-y-5 border-b border-dark pb-4 mb-4">
                      <p className="leading-[1.2em] text-2xl">
                        {step.text}
                        {step.id === 3 && (<span><strong>here</strong>{")"}</span>)}
                      </p>
                      {
                        step.id === 1 && (
                          <strong className="font-body block">
                            {t('see-a-doctor-now')}
                          </strong>
                        )
                      }
                      {
                        step.id === 3 && (
                          <p className="font-light text-sm font-body text-dark">
                            {t('please-note-member-pricing-is-99-for-this-service')}
                          </p>
                        )
                      }
                    </article>
                  </div>
                  <img className="w-full max-w-[224px] pt-4" src={step.image} alt={step.text} />
                </article>
              )))
            }
          </div>
        </section>
      </section>
    </section>
  )
}

export default ServicesDiagnostics
