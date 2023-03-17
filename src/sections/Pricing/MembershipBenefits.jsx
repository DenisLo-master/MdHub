import React from 'react'
import { Link } from 'react-router-dom'
import { OkIcon } from '../../assets'
import { useTranslation } from 'react-i18next'

const MembershipBenefits = () => {
  const { t } = useTranslation()
  return (
    <section className="flex justify-center py-10">
      <div className="w-full max-w-[1000px] rounded-lg bg-gradient-primary text-white py-10 px-8 lg:px-16">
        <h2 className="text-4xl text-center pb-7">
          {t('members-benefit-from')}:
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          <li className="flex gap-x-4 items-center">
            <div>
              <OkIcon className="w-8 h-8" />
            </div>
            <p className="text-2xl">
              {t('free-24-7-unlimited-access-to-doctors')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('mobile-nursing')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('access-to-specialists')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('homecare-0')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <div>
              <OkIcon className="w-8 h-8" />
            </div>
            <p className="text-2xl">
              {t('mental-health-platform-and-support')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('laboratory-analysis')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('online-pharmacy-0')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('testing')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              {t('vaccination')}
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              +{t('more')}
            </p>
          </li>
          <li>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
                {t('sign-up-today')}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MembershipBenefits