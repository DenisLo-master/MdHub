import React from 'react'
import { Link } from 'react-router-dom'
import {
  HearBrainImage,
  MeditationImage,
  MentalHealthBanner,
  MentalHealthImg,
  HeadspaceLogo
} from '../../assets'
import { useTranslation } from 'react-i18next'
import {MentalHealthServices} from '../../sections'
import { mentalHealthFAQData } from '../../constants'
import FAQ from "../../components/FAQ.jsx"


const WORDS = ['anxiety', 'mood changes', 'depression', 'seasonal depression', "insomnia", "stress"]

const ServicesMentalHealth = () => {
  const { t } = useTranslation()
  return (
    <section className="font-main bg-white py-10">
      <header className="bg-mentalHealth text-white w-full lg:h-[560px] py-10">
        <div className="max-w-[86rem] mx-auto flex justify-between px-4">
          <article className="space-y-5 flex flex-col items-center lg:items-start">
            <h2 className="w-full text-center lg:text-left text-[44px] lg:text-[88px] leading-[90px] max-w-[280px]">
              {t('mental health')}
            </h2>
            <p className="text-center lg:text-left font-body text-lg max-w-lg py-3">
              {t('in-todays-fast-paced-modern-and-ultra-connected-world-your-mental-health-is-more-important-than-ever-with-mdhub-you-can-easily-get-mental-health-support-when-you-need-it-most')}
            </p>
            <Link to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border bg-white text-mentalHealth border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block" src={MentalHealthBanner} alt="mental health" />
        </div>
      </header>

      <section className="bg-white py-8 lg:py-14 px-4">
        <div className="hidden relative virtual-health text-center lg:flex justify-center flip-words mb-32">
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

        <MentalHealthServices/>

        <h3 className="text-center text-4xl md:text-5xl lg:pt-32 py-10 lg:py-20">
          {t('mdhub-members-can-benefit-from')}
        </h3>
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row item-center justify-between text-center">
          <article className="space-y-6 flex flex-col items-center">
            <img src={MentalHealthImg} alt="mental health" />
            <p className="font-body">{t('mental-health-frontline')}</p>
          </article>
          <article className="space-y-6 pt-6 flex flex-col items-center">
            <img src={HearBrainImage} alt="heart and brain" />
            <p className="md:pt-2 font-body">{t('mental-health-specialists')}</p>
          </article>
          <article className="space-y-6 flex flex-col items-center md:-mt-3">
            <img src={MeditationImage} alt="meditation" />
            <p className="max-w-[180px] font-body">{t('headspace-wellness-and-meditation-app')}</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-x-12 px-4 text-center lg:text-left py-10 lg:py-20">
        <div>
          <img src={HeadspaceLogo} alt="Headspace" />
        </div>
        <div className="w-full max-w-[530px] space-y-4">
          <h2 className="text-4xl">{t('what-is-headspace')}?</h2>
          <p className="font-body">
            {t('headspace-is-an-app-that-teaches-you-how-to-meditate-meditation-has-been-shown-to-help-people-stress-less-focus-more-and-sleep-better-headspace-is-meditation-made-simple-teaching-you-life-changing-mindfulness-skills-in-just-a-few-minutes-a-day')}
          </p>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <h2 className="text-4xl text-center pb-16">{t('how-it-works')}</h2>
        <div className="w-full px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-y-5 justify-between">
          <article className="w-full max-w-[464px] shadow-glow py-5 px-8">
            <h2 className="text-3xl">{t('see-a-mental-health-physician')}</h2>
            <p className="font-body py-7">
              {t('log-into-your-mdhub-account-and-select-mental-health-physician-from-the-menu-of-specialists-next-choose-a-date-and-time-that-works-for-you-quickly-speak-with-a-mental-health-physician-for-an-initial-assessment-or-follow-up-30-minute-initial-appointments-are-315-and-30-minute-follow-up-appointments-are-230')}
            </p>
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <article className="w-full max-w-[464px] shadow-glow py-5 px-8">
            <h2 className="text-3xl">{t('see-a-mental-health-therapist')}</h2>
            <p className="font-body py-7">
              {t('see-a-mental-health-therapist-with-no-appointment-necessary-all-you-need-to-do-is-choose-the-topic-youd-like-to-discuss-with-a-therapist-and-book-an-appointment-sessions-are-50-minutes-in-length-the-fee-for-a-session-ranges-from-120-160-depending-on-your-region-if-you-have-insurance-this-fee-is-often-covered-by-health-benefits')}
            </p>
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
        </div>
      </section>
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5">
      {
        mentalHealthFAQData.map(faqItem => (
          <FAQ 
            key={faqItem.id}
            question={faqItem.question}
          >
              <p>
                {faqItem.answer}
              </p>
          </FAQ>
        ))
      }
            
          </section>
    </section>
  )
}

export default ServicesMentalHealth