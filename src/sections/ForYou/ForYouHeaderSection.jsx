import React from 'react'
import { ForYouHeaderBg } from '../../assets'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ForYouHeaderSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative lg:h-[390px] flex items-center bg-[#FF7455] font-main">
      <div className="w-full px-4 text-center md:text-left md:w-[clamp(60rem,80vw,95rem)] mx-auto">
        <h2 className="w-full py-12 max-w-[270px] mx-auto md:mx-0 text-[96px] leading-[90px] text-white">
          {t('for you')}
        </h2>
      </div>
    </section>
  )
}

export default ForYouHeaderSection