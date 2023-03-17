import React from 'react'
import { useTranslation } from 'react-i18next'

const PricingHeader = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-gradient-primary text-center text-7xl text-white py-20">
      <h2>{t('rates')}</h2>
    </div>
  )
}

export default PricingHeader