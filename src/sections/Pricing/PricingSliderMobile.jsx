import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const PricingSliderMobile = ({selectedPackage}) => {
  const { t } = useTranslation()
  
  return (
    <section className={`block py-10 md:hidden relative transition-all ease-in-out duration-700`}>
    <div className={`w-full font-body flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-10 gap-x-14 transition-opacity ease-in-out duration-700 ${selectedPackage === "single" ? "block" : "hidden"}`}>
      <article className="max-w-[400px] flex flex-col items-center rounded-t-[32px] bg-[#299EBF] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-main pb-2">{t('on-demand')}</h2>
          <p className="font-body leading-5">{t('an-on-demand-plan-for-full-access-to-our-services-with-a-single-payment-per-consultation-for-our-virtual-doctors-and-mental-health')}</p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body">
            <h2 className="text-6xl font-semibold">$0</h2>
            <p>{t('per-month')}</p>
            <p className="pt-6 pb-4">{t('89-per-consultation')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
          </div>
        </div>
      </article>


      <article className="max-w-[400px] mt-8 flex flex-col items-center rounded-t-[32px] bg-[#1EBC91] text-white relative">
        <section className="absolute -top-7 left-0 w-full flex justify-center">
          <div className="absolute flex justify-center items-center top-0 left-1/2 transform translate-x-[-50%] bg-white rounded-2xl w-44 h-16 text-dark font-main text-center">
            {t('save-25-compared-to-monthly-plan')}
          </div>
        </section>
        <div className="text-center pt-12 p-8">
          <h2 className="text-5xl font-main pb-2">Yearly</h2>
          <p className="font-body leading-5">{t('one-annual-payment-saving-25-to-have-full-access-to-all-of-our-services')}</p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#1B5747] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body pb-14">
            <h2 className="text-6xl font-semibold">$24.99</h2>
            <p>{t('per-month')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
            <p className="text-center font-body pt-3">
              {t('12-months-minimum')}*
            </p>
          </div>
        </div>
      </article>

      <article className="max-w-[400px] flex flex-col items-center rounded-t-[32px] bg-[#299EBF] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-main pb-2">{t('monthly')}</h2>
          <p className="font-body leading-5">A preferred monthly rate to have full access to all of our services.
          </p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body">
            <h2 className="text-6xl font-semibold">$29.99</h2>
            <p>{t('per-month')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
            <p className="text-center font-body pt-3">
              {t('12-months-minimum')}*
            </p>
          </div>
        </div>
      </article>
    </div>

    <div className={`w-full font-body flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-10 gap-x-14  transition-opacity ease-in-out duration-700 ${selectedPackage === "family" ? "block" : "hidden"}`}>
      <article className="max-w-[400px] flex flex-col items-center rounded-t-[32px] bg-[#299EBF] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-main pb-2">{t('on-demand')}</h2>
          <p className="font-body leading-5">{t('an-on-demand-plan-for-full-access-to-our-services-with-a-single-payment-per-consultation-for-our-virtual-doctors-and-mental-health')}</p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body">
            <h2 className="text-6xl font-semibold">$0</h2>
            <p>{t('per-month')}</p>
            <p className="pt-6 pb-4">{t('89-per-consultation')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
          </div>
        </div>
      </article>


      <article className="max-w-[400px] mt-8 flex flex-col items-center rounded-t-[32px] bg-[#1EBC91] text-white relative">
        <section className="absolute -top-7 left-0 w-full flex justify-center">
          <div className="absolute flex justify-center items-center top-0 left-1/2 transform translate-x-[-50%] bg-white rounded-2xl w-44 h-16 text-dark font-main text-center">
            {t('save-25-compared-to-monthly-plan')}
          </div>
        </section>
        <div className="text-center pt-12 p-8">
          <h2 className="text-5xl font-main pb-2">{t('yearly')}</h2>
          <p className="font-body leading-5">{t('one-annual-payment-saving-25-to-have-full-access-to-all-of-our-services')}</p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#1B5747] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body pb-14">
            <h2 className="text-6xl font-semibold">$39.99</h2>
            <p>{t('per-month')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
            <p className="text-center font-body pt-3">
              {t('12-months-minimum')}*
            </p>
          </div>
        </div>
      </article>

      <article className="max-w-[400px] flex flex-col items-center rounded-t-[32px] bg-[#299EBF] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-main pb-2">{t('monthly')}</h2>
          <p className="font-body leading-5">{t('a-preferred-monthly-rate-to-have-full-access-to-all-of-our-services')}
          </p>
        </div>
        <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
          <div className="text-center font-body">
            <h2 className="text-6xl font-semibold">$49.99</h2>
            <p>{t('per-month')}</p>
          </div>
          <div>
            <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
              {t('sign-up-today')}
            </Link>
            <p className="text-center font-body pt-3">
              {t('12-months-minimum')}*
            </p>
          </div>
        </div>
      </article>
    </div>

    <div className={`w-full font-body transition-opacity ease-in-out duration-700 ${selectedPackage === "corporate" ? "block" : "hidden"}`}>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14">
        <article className="w-full max-w-[400px] flex flex-col rounded-t-[32px] bg-[#299EBF] text-white items-center">
          <div className="text-center py-8 font-main">
            <h2 className="text-3xl">10-50 {t('employees')}</h2>
          </div>
          <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
            <div className="text-center font-body pb-10">
              <h2 className="text-6xl font-semibold">$19.99</h2>
              <p>{t('per-month')}</p>
          </div>
            <div>
              <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
                {t('sign-up-today')}
            </Link>
          </div>
          </div>
        </article>
        <article className="w-full max-w-[400px] flex flex-col rounded-t-[32px] bg-[#1EBC91] text-white items-center">
          <div className="text-center py-8 font-main">
            <h2 className="text-3xl">51-100 {t('employees')}</h2>
          </div>
          <div className="w-full rounded-t-[32px] bg-[#1B5747] pt-8 p-6 flex flex-col items-center">
            <div className="text-center font-body pb-10">
              <h2 className="text-6xl font-semibold">$17.99</h2>
              <p>per month</p>
          </div>
            <div>
              <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
                Sign Up Today
            </Link>
          </div>
          </div>
        </article>
        <article className="w-full max-w-[400px] flex flex-col rounded-t-[32px] bg-[#299EBF] text-white items-center">
          <div className="text-center py-8 font-main">
            <h2 className="text-3xl">101+ {t('employees')}</h2>
          </div>
          <div className="w-full rounded-t-[32px] bg-[#0B637B] pt-8 p-6 flex flex-col items-center">
            <div className="text-center font-body pb-10">
              <h2 className="text-6xl font-semibold">$14.99</h2>
              <p>{t('per-month')}</p>
          </div>
            <div>
              <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-white text-dark font-main" to="/register">
                {t('sign-up-today')}
            </Link>
          </div>
          </div>
        </article>
      </div>
      <p className="text-center text-sm pt-8 text-dark">
        *{t('price-is-per-employee')}, {t('per-month')}, {t('for-a-minimum-term-of-12-months')}
      </p>
    </div>
  </section>
  )
}

export default PricingSliderMobile