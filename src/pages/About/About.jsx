import React from 'react'
import { AboutHeroImage, OkIcon, CloseVector } from '../../assets'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className="py-20 font-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center relative text-white">
          <img src={AboutHeroImage} alt="About Us" />
          <div className="absolute bottom-16 left-32 space-y-4 max-w-[1000px]">
            <h2 className="text-4xl">{t('About Us')}</h2>
            <p className="hidden lg:block font-body">
              {t('were-a-group-of-passionate-individuals-that-believe-canadians-deserve-more-when-it-comes-to-their-healthcare-thats-why-we-created-the-ultimate-healthcare-solution-to-put-your-health-back-in-your-hands-while-virtual-healthcare-isnt-new-bridging-the-gap-between-virtual-and-physical-care-is-and-were-proud-to-be-a-disruptor-in-the-virtual-healthcare-industry-our-team-of-doctors-and-nurse-practitioners-is-here-to-help-when-you-need-them-so-you-your-family-and-team-can-access-quality-healthcare-fast-because-a-healthy-life-is-a-happy-life')}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center  py-16">
          <article className="py-10 px-4 lg:pl-16 rounded-lg">
            <h2 className="text-6xl text-dark text-center font-main pb-4">{t('them')}</h2>
            <ul className="font-body space-y-6 font-light text-lg">
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('24-7-access-to-real-doctors')} </span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('prescription-by-doctors')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('free-online-pharmacy')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('individual-family-or-corporate-coverage')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('quick-and-discounted-access-to-medical-specialists')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('worldwide-access-to-telemedicine')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('headspace-app')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <CloseVector />
                </div>
                <span>{t('centralized-health-records-and-platform')}</span>
              </li>
            </ul>
          </article>
          <article className="bg-primary text-white py-10 px-4 lg:px-20 rounded-lg bg-linearGradientPrimary shadow-cardService">
            <h2 className="text-6xl text-center font-main pb-4">{t('us')}</h2>
            <ul className="font-body grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-2 max-w-[550px] space-y-4 font-light text-lg">
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('24-7-access-to-real-doctors')} </span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('headspace-app')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('prescription-by-doctors')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('medical-notes')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('free-online-pharmacy')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('mental-health-frontline')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('individual-family-or-corporate-coverage')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('laboratories-and-testing-services')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('quick-and-discounted-access-to-medical-specialists')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('centralized-health-records-and-platform')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('worldwide-access-to-telemedicine')}</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>{t('nursing-and-homecare-1')}</span>
              </li>


            </ul>
          </article>
        </div>

      </div>
    </section>
  )
}

export default About