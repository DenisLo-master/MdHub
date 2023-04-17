import React from 'react'
import { HeadspaceLogoWhite } from '../../assets'
import { useTranslation } from 'react-i18next'

const HeadspaceSection = () => {
  const { t } = useTranslation()
  return (
    <div className="md:mt-0 py-32 text-white bg-headspace font-main px-4">
      <article className="flex flex-col-reverse lg:flex-row-reverse justify-around items-center">
        <h3 className="text-3xl max-w-[600px] text-center lg:text-left">
          {t('free-3-months-of-headspace-membership-included-in-all-our-plans')}. ($36 {t('value')})
        </h3>
        <img className="w-full max-w-[450px]" src={HeadspaceLogoWhite} alt="Headspace" />
      </article>
    </div>
  )
}

export default HeadspaceSection