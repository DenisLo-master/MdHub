import React from 'react'
import { useTranslation } from 'react-i18next'

const ServicesCard = ({ title, children, bgPrimary }) => {
  const { i18n } = useTranslation()
  return (
    <article className={`flex justify-center gap-x-2 items-center ${bgPrimary ? 'bg-primary shadow-cardService' : 'bg-transparent'} ${i18n.language === "en" ? "w-[200px]" : "w-auto px-4"} py-3 rounded-full `}>
      {
        children
      }
      <p className={`text-lg leading-5 ${bgPrimary ? "text-white" : "text-gray-800"}`}>{title}</p>
    </article>
  )
}

export default ServicesCard