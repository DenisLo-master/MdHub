import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PricingSliderDesktop from './PricingSliderDesktop'
import PricingSliderMobile from './PricingSliderMobile'

const PricingSlider = () => {
  const [selectedPackage, setSelectedPackage] = useState("single")
  const { t } = useTranslation()
  return (
    <section className="lg:py-10 lg:pt-20 px-4">
      <h2 className="text-center text-4xl">{t('plan-type')}</h2>
      <div className="pb-10 pt-3 lg:pb-3 lg:py-3 px-4 lg:my-10 font-main text-lg flex flex-col md:flex-row items-center justify-between gap-x-4 w-full rounded-b-full lg:rounded-full bg-white lg:bg-[#F1F1F1] shadow-sliderNav max-w-[485px] mx-auto">
        <button
          onClick={() => setSelectedPackage("single")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full  ${selectedPackage === "single" ? "bg-[#1EBC91] text-white" : "text-dark"}`}>
          {t('single')}
        </button>
        <button
          onClick={() => setSelectedPackage("family")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full
            ${selectedPackage === "family" ? "bg-[#1EBC91] text-white" : "text-dark"}`}>
          {t('family-0')}
        </button>
        <button
          onClick={() => setSelectedPackage("corporate")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full
            ${selectedPackage === "corporate" ? "bg-[#1EBC91] text-white" : "text-dark"}`}>
          {t('corporate-0')}
        </button>
      </div>

      <PricingSliderDesktop
        selectedPackage = {selectedPackage}
      />
      <PricingSliderMobile
        selectedPackage = {selectedPackage}
      />
    </section>
  )
}

export default PricingSlider
