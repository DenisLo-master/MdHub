import React from 'react'
import { diagnosisHowItWorksData, diagnosticsFAQData } from '../../constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DiagnosticServices } from '../../sections'
import FAQ from '../../components/FAQ.jsx'
import { DiagnosticsHowItWorks01, DiagnosticsHowItWorks02, DiagnosticsHowItWorks03, DiagnosticsHowItWorks04 } from '../../assets'

const WORDS = ['virus', 'urine', 'blood', 'covid']

const ServicesDiagnostics = () => {
  const { t } = useTranslation()
  return (
    <section className="font-main text-dark py-10">
      <header className="bg-diagnostics diagnostics-bg text-white w-full py-20 relative text-center lg:text-left">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-2 flex flex-col items-center lg:items-start text-center w-full">
            <h2 className="text-center lg:text-left text-[55px] lg:text-[88px] max-w-[450px] leading-[80px] pb-5">
              {t('lab-testing-and-diagnostics')}
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg pb-8 leading-5 px-2">
              <p className="text-center lg:text-left font-body text-lg max-w-lg ">
                {t('get-safe-fast-and-professional-lab-testing-choose-from-service-at-our-multiple-labs-across-canada-or-have-our-medical-professionals-conduct-your-testing-the-comfort-of-your-home-or-office')}
              </p>
              <p className="text-center lg:text-left font-body text-lg max-w-lg ">
                {t('our-certified-partner-labs-can-process-over-300-different-screenings-for-medical-conditions-like-diabetes-and-heart-disease')}
              </p>
            </div>
            <Link className="flex lg:block justify-center px-2" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-[#3F3F3F] border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
        </div>
      </header>
      <section className="bg-white py-14 lg:py-14">
        <div className="relative virtual-health text-center flex justify-center flip-words mb-32">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="text-5xl md:text-6xl">
                    {t(`${word}`)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>

        <DiagnosticServices />

      </section>


      <section className="bg-white py-10 pb-24">
        <h2 className="text-4xl pb-10 text-center">
          {t('How It Works')}
        </h2>
        <section className="w-full max-w-6xl space-y-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <section className="flex flex-col flex-wrap items-center text-center md:text-left lg:flex-row justify-between">
              <article className="max-w-[90vw] md:max-w-[560px] flex justify-between bg-[#FBC7DA] p-8 rounded-lg mt-8">
                <div className='w-1/2'>
                  <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                    1
                  </div>

                  <div className='flex flex-col justify-between mt-5 h-4/5'>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-base text-left">
                      {t('Patients require a lab requisition. If you don’t have one – no problem!')}
                    </p>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-sm text-left">
                      {t('See a doctor now.')}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <img className="w-full max-w-[210px]" src={DiagnosticsHowItWorks01} alt="How It Works" />
                </div>
              </article>

              <article className="max-w-[90vw] md:max-w-[560px] flex justify-between bg-[#FBC7DA] p-8 rounded-lg mt-8">
                <div className="w-1/2">
                  <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                    2
                  </div>
                  <div className='flex flex-col justify-between mt-5 h-4/5'>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-base text-left">
                      {t('Upload your requisition, and our medical staff will call you within 24 hours to confirm your booking.')}
                    </p>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-sm text-left">
                      {t('*Mobile testing price for members starts at $99.')}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <img className="w-full max-w-[210px]" src={DiagnosticsHowItWorks02} alt="How It Works" />
                </div>
              </article>

              <article className="max-w-[90vw] md:max-w-[560px] flex justify-between bg-[#FBC7DA] p-8 rounded-lg mt-8">
                <div className="w-1/2">
                  <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                    3
                  </div>
                  <div className='flex flex-col justify-between mt-5 h-4/5'>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-base text-left">
                      {t('Schedule a time and place for your testing and complete your payment online. Or you can visit a testing centre at no extra cost (see locations here)')}
                    </p>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                      {t('')}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <img className="w-full max-w-[210px]" src={DiagnosticsHowItWorks03} alt="How It Works" />
                </div>
              </article>

              <article className="max-w-[90vw] md:max-w-[560px] flex justify-between bg-[#FBC7DA] p-8 rounded-lg mt-8">
                <div className="w-1/2">
                  <div className="bg-[#3F3F3F] text-white  rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                    4
                  </div>
                  <div className='flex flex-col justify-between mt-5 h-4/5'>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-base text-left">
                      {t('Once testing is complete, our labs will submit your results to your virtual MDHUB doctor and results may also be accessed on your virtual doctor profile. Access your dashboard here.')}
                    </p>
                    <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                      {t('')}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <img className="w-full max-w-[210px]" src={DiagnosticsHowItWorks04} alt="How It Works" />
                </div>
              </article>
            </section>
          </div>
        </section>
      </section>
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5 px-4">
        {
          diagnosticsFAQData.map(faqItem => (
            <FAQ
              key={faqItem.id}
              question={t(`${faqItem.question}`)}
              bgColor={"#e896ba"}
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

export default ServicesDiagnostics
