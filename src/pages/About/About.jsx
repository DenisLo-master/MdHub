import React from 'react'
import { AboutHeroImage, OkIcon, CloseVector } from '../../assets'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player/youtube'

const About = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className="py-20 pt-28 font-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center relative text-white">
          <ReactPlayer
            width={"100%"}
            height={600}
            url={`${i18n.language === "en" ? "https://youtu.be/nkOUkOTj6Ps" : "https://youtu.be/Kfdf2SzAdrU"}`}
          />
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