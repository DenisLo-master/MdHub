import React from 'react'
import { ForYouHeaderBg } from '../../assets'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ForYouHeaderSection = ({ family }) => {
  const { t } = useTranslation()
  return (
    <section className={`relative lg:h-[390px] flex items-center font-main ${family ? "bg-[#BE74D0]" : "bg-[#FF7455]"}`}>
      <div className="w-full px-4 text-center md:text-left md:w-[clamp(60rem,80vw,95rem)] mx-auto">
        <h2 className="w-full py-10 px-5 mx-auto md:mx-0 text-[4em] md:text-[5em] leading-[1em] text-white max-w-[650px]">
          {family ? t('the-whole-family-in-one-plan') : t('healthcare-without-the-headaches-0')}
        </h2>
      </div>
    </section>
  )
}

export default ForYouHeaderSection