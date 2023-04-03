import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PricingSlider = () => {
  const [selectedPackage, setSelectedPackage] = useState("single")
  const { t } = useTranslation()
  return (
    <section className="lg:py-10 px-4">
      <div className="pb-10 pt-3 lg:pb-3 lg:py-3 px-4 lg:my-10 font-main text-lg flex flex-col md:flex-row items-center justify-between gap-x-4 w-full rounded-b-full lg:rounded-full bg-white lg:bg-[#F1F1F1] shadow-sliderNav max-w-[485px] mx-auto">
        <button
          onClick={() => setSelectedPackage("single")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full  ${selectedPackage === "single" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          {t('single')}
        </button>
        <button
          onClick={() => setSelectedPackage("family")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full
            ${selectedPackage === "family" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          {t('family-0')}
        </button>
        <button
          onClick={() => setSelectedPackage("corporate")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full
            ${selectedPackage === "corporate" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          {t('corporate-0')}
        </button>
      </div>

      <section className={`relative transition-all ease-in-out duration-700 ${selectedPackage === "corporate" ? "h-[900px] lg:h-[300px]" : "h-[900px] lg:h-[490px]"}`}>
        <div className={`w-full font-body flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14 absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "single" ? "opacity-100" : "opacity-0"}`}>
          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow">
            <h2 className="text-3xl font-main">{t('monthly')}</h2>
            <div className="text-primary pt-8">
              <h2 className="text-[40px] leading-9">$29.99</h2>
              <p className="text-base text-dark text-center">{t('per-month')}</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white" to="/register">
                {t('get-started')}
              </Link>
              <p className="text-sm text-primary">{t('3-months-minimum')}*</p>
            </div>
          </article>

          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow relative">
            <section className="absolute -top-7 left-0 w-full flex justify-center">
              <div className="absolute flex justify-center items-center top-0 left-1/2 transform translate-x-[-50%] bg-gradient-primary rounded-2xl w-56 h-16 text-white font-main text-center">
                {t('save-25-compared-to-monthly-plan')}
              </div>
            </section>
            <h2 className="text-5xl font-main pt-12">{t('yearly')}</h2>
            <div className="text-primary pt-14 py-10">
              <h2 className="text-[52px] leading-9">$24.99</h2>
              <p className="text-base text-dark text-center">{t('per-month')}</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  {t('get-started')}
                </button>
              </Link>
              <p className="text-sm text-primary">{t('12-months-minimum')}*</p>
            </div>
          </article>
        </div>

        <div className={`w-full font-body flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14 absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "family" ? "opacity-100" : "opacity-0"}`}>
          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow">
            <div className="space-y-2 text-center font-main">
              <h2 className="text-3xl">{t('monthly')}</h2>
              <h4 className="text-base">{t('includes-all-family-members-in-the-same-household')}</h4>
            </div>
            <div className="text-primary pt-8">
              <h2 className="text-[40px] leading-9">$49.99</h2>
              <p className="text-base text-dark text-center">{t('per-month')}</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  {t('get-started')}
                </button>
              </Link>
              <p className="text-sm text-primary">{t('3-months-minimum')}*</p>
            </div>
          </article>

          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow relative">
            <section className="absolute -top-7 left-0 w-full flex justify-center">
              <div className="absolute flex justify-center items-center top-0 left-1/2 transform translate-x-[-50%] bg-gradient-primary rounded-2xl w-56 h-16 text-white font-main text-center">
                {t('save-25-compared-to-monthly-plan')}
              </div>
            </section>
            <div className="font-main text-center">
              <h2 className="text-5xl pt-12">{t('yearly')}</h2>
              <h4 className="text-base">{t('includes-all-family-members-in-the-same-household')}</h4>
            </div>
            <div className="text-primary pt-14 py-10">
              <h2 className="text-[52px] leading-9">$39.99</h2>
              <p className="text-base text-dark text-center">{t('per-month')}</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  {t('get-started')}
                </button>
              </Link>
              <p className="text-sm text-primary">12 {t('months-minimum')}*</p>
            </div>
          </article>
        </div>

        <div className={`w-full font-body  absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "corporate" ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14">
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">10-50 {t('employees')}</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$19.99</h2>
                <p className="text-base text-dark text-center">{t('per-month')}</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    {t('get-started')}
                  </button>
                </Link>
              </div>
            </article>
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">51-100 {t('employees-0')}</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$17.99</h2>
                <p className="text-base text-dark text-center">{t('per-month')}</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    {t('get-started')}
                  </button>
                </Link>
              </div>
            </article>
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">101+ {t('employees-0')}</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$14.99</h2>
                <p className="text-base text-dark text-center">{t('per-month')}</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    {t('get-started')}
                  </button>
                </Link>
              </div>
            </article>
          </div>
          <p className="text-center text-sm pt-8 text-primary">
            *{t('price-is-per-employee')}, {t('per-month')}, {t('for-a-minimum-term-of-12-months')}
          </p>
        </div>
      </section>
    </section>
  )
}

export default PricingSlider
