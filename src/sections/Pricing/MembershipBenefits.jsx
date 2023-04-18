import React from 'react'
import { Link } from 'react-router-dom'
import { OkIcon } from '../../assets'
import { useTranslation } from 'react-i18next'

const MembershipBenefits = () => {
  const { t } = useTranslation()
  return (
    <section className="flex flex-col md:flex-row  md:h-[700px]">
      <article className="flex-1 py-8 md:py-0 text-4xl text-center md:text-left md:text-6xl px-8 flex md:justify-end items-center">
        <h2 className>{t('members-benefit-from-0')}</h2>
      </article>
      <article className="md:w-[912px] p-4 flex flex-col md:flex-row md:justify-end bg-primary md:bg-transparent bg-blue-circle">
        <div className="flex items-center w-full md:w-[90%]">
          <ul className="flex flex-col gap-y-8">
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('free-24-7-unlimited-access-to-doctors')}</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('access-to-specialists')}</p>
              </div>
            </li>
            <li className="flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('mental-health-platform-and-support')}</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('online-pharmacy-0')}</p>
              </div>
            </li>
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('vaccination')}</p>
              </div>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-8">
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('mobile-nursing')}</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('homecare-0')}</p>
              </div>
            </li>
            <li className="flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('laboratory-analysis')}</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">{t('testing')}</p>
              </div>
            </li>
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <div>
                  <OkIcon className=" w-10 h-10" />
                </div>
                <p className="text-lg md:text-xl md:max-w-[240px]">+{t('more-0')}</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default MembershipBenefits