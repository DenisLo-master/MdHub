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
import { MentalHealthServices } from '../../sections'
import { mentalHealthFAQData } from '../../constants'
import FAQ from "../../components/FAQ.jsx"


const WORDS = ['anxiety', 'mood changes', 'depression', 'seasonal depression', "insomnia", "stress"]

const ServicesMentalHealth = () => {
  const { i18n, t } = useTranslation()
  return (
    <section className="font-main bg-white py-10">
      <header className="bg-mentalHealth  text-white w-full py-10">
        <div className="max-w-[83rem] mx-auto flex items-center justify-between px-4">
          <article className="space-y-5 flex flex-col items-center lg:items-start text-center w-full">
            <h2 className="w-full text-center lg:text-left text-[44px] lg:text-[88px] leading-[90px] max-w-[260px]">
              {t('mental health')}
            </h2>
            <p className="text-center lg:text-left font-body text-lg max-w-lg py-3">
              {t('mental-health-includes-our-emotional-psychological-and-social-well-being-it-affects-how-we-think-feel-and-act-it-also-helps-determine-how-we-handle-stress-relate-to-others-and-make-healthy-choices-mental-health-has-also-been-proven-to-play-a-key-role-in-our-physical-well-being-and-is-a-key-support-benefit-with-all-mdhub-memberships'
              )
              }
            </p>
            <Link to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border hover:border-[#1EBC91] bg-white hover:bg-[#1EBC91]  text-[#3F3F3F] hover:text-[white] border-white  transition-all ease-in-out duration-300">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <img className="hidden lg:block" src={MentalHealthBanner} alt="mental health" />
        </div>
      </header>

      <section className="bg-white py-8 lg:py-14">
        <div className="relative virtual-health text-center flex justify-center flip-words mb-32 px-4">
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

        <MentalHealthServices />

        <h3 className="text-center text-4xl md:text-5xl lg:pt-32 py-10 lg:py-20">
          {t('mdhub-members-can-benefit-from')}
        </h3>
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row item-center justify-between text-center">
          <article className="space-y-6 lg:w-[151px] flex flex-col items-center">
            <img src={MentalHealthImg} alt="mental health" />
            <p className="font-body">{t('mental-health-physicians')}</p>
          </article>
          <article className="space-y-6 lg:w-[151px]  flex flex-col items-center">
            <img src={HearBrainImage} alt="heart and brain" />
            <p className="md:pt-2 font-body">{t('mental-health-therapists')}</p>
          </article>
          <article className="space-y-6 lg:w-[151px] flex flex-col items-center mt-3">
            <img src={MeditationImage} alt="meditation" />
            <p className="max-w-[180px] font-body">{t('headspace-wellness-and-meditation-app-0')}</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse flex-col-reverse justify-center items-center gap-x-12 px-4 text-center lg:text-left py-10 lg:py-20 bg-[#F6E2B0]">
        <div>
          <img src={HeadspaceLogo} alt="Headspace" />
        </div>
        <div className="w-full max-w-[530px] space-y-4">
          <h2 className="text-4xl">{t('what-is-headspace')}?</h2>
          <p className="font-body">
            {t('you-can-think-of-headspace-as-your-minds-best-friend-through-science-backed-meditation-and-mindfulness-tools-headspace-helps-you-create-life-changing-habits-to-support-your-mental-health-and-find-a-healthier-happier-you-with-your-mdhub-membership-you-can-enjoy-3-months-free-with-your-mdhub-membership-download-the-app-and-start-feeling-better-in-just-a-few-minutes-a-day')}
          </p>
          <p className="font-body">
            {t('download-the-app-and-start-feeling-better-in-just-a-few-minutes-a-day')}
          </p>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="w-full px-4 max-w-6xl mx-auto flex flex-col lg:flex-col gap-y-5 justify-between">
          <div>
            <h2 className="text-4xl text-left">{t('how-it-works')}</h2>
            <p className="font-body py-7">
              {t('our-frontline-care-can-be-accessed-24-7-by-simply-logging-into-your-virtual-doctor-platform-and-seeing-a-general-doctor-for-a-more-specialized-practitioner-members-are-encouraged-to-book-an-on-demand-appointment-with-a-mental-health-physician-or-therapist')}
            </p>
          </div>
          <div className='flex justify-between'>
            <article className="w-full max-w-[528px] bg-[#ECB118] py-5 px-8 rounded-lg">
              <h2 className="text-3xl">{t('see-a-mental-health-therapist')}</h2>
              <p className="font-body py-7">
                {t('access-your-mdhub-account-and-navigate-to-the-specialists-menu-select-mental-health-physician-from-the-options-provided-then-pick-a-suitable-date-and-time-you-can-discuss-your-mental-health-concerns-during-an-initial-assessment-or-follow-up-session-with-a-mental-health-physician')}
              </p>
              <Link to="/register">
                <button
                  type="button"
                  className={`rounded-full font-main group py-2 border-none justify-center items-center space-x-2 transition-all ease-out duration-300  bg-[#3F3F3F] hover:bg-[#1EBC91] px-4 flex w-full text-white`}
                >
                  {t('sign-up-today')}
                </button>
              </Link>
            </article>
            <article className="w-full max-w-[528px] bg-[#ECB118] py-5 px-8">
              <h2 className="text-3xl">{t('see-a-mental-health-therapist')}</h2>
              <p className="font-body py-7">
                {t('talk-to-a-mental-health-therapist-without-scheduling-an-appointment-simply-access-your-mdhub-account-and-navigate-to-the-specialists-menu-select-mental-health-therapist-from-the-options-provided-and-choose-the-topic-youd-like-to-discuss-then-book-a-session')}
              </p>
              <Link className={`${i18n.language !=="en" && "pt-4"} block`} to="/register">
                <button
                  type="button"
                  className={`rounded-full font-main group  py-2 border-none justify-center items-center space-x-2  bg-[#3F3F3F] hover:bg-[#1EBC91] transition-all ease-out duration-300 px-4 flex w-full text-white mt-1`}
                >
                  {t('sign-up-today')}
                </button>
              </Link>
            </article>
          </div>

        </div>
      </section>
      <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5 px-4">
        {
          mentalHealthFAQData.map(faqItem => (
            <FAQ
              key={faqItem.id}
              question={t(`${faqItem.question}`)}
              bgColor={"#ECB118"}
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

export default ServicesMentalHealth