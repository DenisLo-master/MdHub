import React from 'react'
import { HeadspaceLogo } from '../../assets'
import { useTranslation } from 'react-i18next'

const HeadspaceSection = () => {
  const { t } = useTranslation()
  return (
    <div className="py-10 flex justify-center font-main">
      <article className="max-w-[1200px] flex flex-col-reverse lg:flex-row justify-between items-center">
        <h3 className="text-3xl max-w-[600px] text-center lg:text-left">
          {t('free-3-months-of-headspace-membership-included-in-all-our-plans')}. ($36 {t('value')})
        </h3>
        <img className="w-full max-w-[500px]" src={HeadspaceLogo} alt="Headspace" />
      </article>
    </div>
  )
}

export default HeadspaceSection