import React from 'react'
import { Link } from 'react-router-dom'
import { NursingAndHomecareBanner, NursingAndHomecareHowItWorks01, NursingAndHomecareHowItWorks02, NursingAndHomecareHowItWorks03 } from '../../assets'
import { nursingServices, nursingAndHomecareHowItWorksData, nursingHomecareFAQData } from '../../constants'
import { useTranslation } from 'react-i18next'
import { NursingAndHomecareServices } from '../../sections'
import FAQ from '../../components/FAQ'



const ServicesNursingAndHomecare = () => {
  const { i18n, t } = useTranslation()

  const WORDS = [t('mobile vaccination'), t('wound care and treatment'), t('palliative care'), t('post surgery care'), t('IV medication'), t('injection infusions'), t('vital signs monitoring')]

  return (
    <section className="py-10 font-main">
      <header className={`bg-nursingHomecare text-white w-full py-10 relative text-center lg:text-left`}>
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4 flex flex-col items-center lg:items-start text-center w-full">
            <h2 className="text-center lg:text-left text-[55px] lg:text-[88px] max-w-[340px] leading-[5rem]">
              {t('nursing-and-homecare')}
            </h2>
            <div className="space-y-3 leading-6 font-body text-lg max-w-lg">
              <p className="text-center lg:text-left font-body text-lg max-w-lg ">
                {t('life-is-busy-but-you-want-to-ensure-your-loved-ones-are-taken-care-of-our-nurses-and-homecare-helpers-come-directly-to-you-when-you-need-them')}
              </p>
              <p className="text-center lg:text-left font-body text-lg max-w-lg ">
                {t('our-team-of-certified-nurses-are-fully-capable-of-assisting-with-many-medical-needs-whether-its-checking-vitals-and-assisting-ongoing-medical-conditions-post-operative-care-or-testing-theyre-here-to-help')}
              </p>
            </div>
            <Link className="flex justify-center lg:block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border hover:border-[#1EBC91] bg-white hover:bg-[#1EBC91]  text-[#3F3F3F] hover:text-[white] border-white  transition-all ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={NursingAndHomecareBanner} alt="Nursing and Homecare" />
        </div>
      </header>
      <section className="bg-white py-14">
        <div className="relative virtual-health text-center flex justify-center flip-words mb-32">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            {t('get-help-for')}
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="text-5xl md:text-6xl">
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
          <section className="w-full max-w-7xl space-y-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col lg:flex-row gap-y-5 justify-center ">
                <section className="flex flex-col flex-wrap items-center text-center md:text-left lg:flex-row justify-center">
                  <article className="max-w-[90vw] md:max-w-[400px] flex  justify-between bg-[#FFB683] p-6 rounded-lg mt-8 lg:mr-5">
                    <div className='w-1/2'>
                      <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                        1
                      </div>

                      <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                        {t('once-logged-into-your-member-dashboard-click-online-pharmacist-sign-up-and-complete-your-health-profile-in-5-minutes')}
                      </p>
                    </div>
                    <div className="pt-4">
                      <img className="w-full max-w-[210px]" src={NursingAndHomecareHowItWorks01} alt="How It Works" />
                    </div>
                  </article>

                  <article className="max-w-[90vw] md:max-w-[400px] flex justify-between bg-[#FFB683] p-6 rounded-lg mt-8 lg:mr-5">
                    <div className="w-1/2">
                      <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                        2
                      </div>

                      <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                        {t('well-transfer-your-prescriptions-from-your-old-pharmacy-if-required-or-will-input-new-prescriptions-obtained-during-virtual-care-consultation')}
                      </p>
                    </div>
                    <div className="pt-4">
                      <img className="w-full max-w-[210px]" src={NursingAndHomecareHowItWorks02} alt="How It Works" />
                    </div>
                  </article>

                  <article className="max-w-[90vw] md:max-w-[400px] flex justify-between bg-[#FFB683] p-8 rounded-lg mt-8 lg:mr-5">
                    <div className="w-1/2">
                      <div className="bg-[#3F3F3F] text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl mb-7">
                        3
                    </div>

                      <p className="max-w-[260px] font-body leading-[1.25em] text-left">
                        {t('after-verifying-the-prescription-well-deliver-your-medicine-directly-to-your-door')}
                      </p>
                    </div>
                    <div className="pt-4">
                      <img className="w-full max-w-[210px]" src={NursingAndHomecareHowItWorks03} alt="How It Works" />
                    </div>
                  </article>
                </section>
              </div>
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
              bgColor={"#F78839"}
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
