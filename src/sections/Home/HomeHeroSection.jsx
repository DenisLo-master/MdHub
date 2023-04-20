import React, { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'
import { HeroGif, HeroBg, HomeHeroImage } from '../../assets'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const WORDS = [
  'Virtual Doctor',
  'mental-health',
  'birth-control',
  'diagnostics-0',
  'erectile-dysfunction',
  'nursing',
  'Companion Care',
]

const HomeHeroSection = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const { i18n, t } = useTranslation()

  useEffect(() => {
    setSelectedValues(() => {
      const randomValues = []; // Initialize an array to store selected values
      while (randomValues.length < 10) { // Select 10 random values
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        randomValues.push(WORDS[randomIndex]);
      }
      return randomValues
    })
  }, [])

  return (
    <div className="pt-12 md:pt-40 bg-home-gradient px-8">
      <section className="max-w-[90rem] mx-auto flex flex-col gap-y-6 md:flex-row items-center relative">
        <article data-aos="fade-up" className="flex-1 px-4 md:pl-20">
          <h2 className="w-full max-w-[500px] font-main text-center md:text-left text-5xl md:text-6xl">
            {t('Accessible, quality healthcare at your fingertips.')}
          </h2>
          <p className="w-full text-base font-body text-center md:text-left font-extralight text-gray-900 md:text-xl py-4 md:py-8 max-w-[540px]">
            {t('From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.')}
          </p>
          <div className='flex flex-col md:flex-row items-center gap-y-4 justify-center md:justify-start space-x-2 md:space-x-6 font-main text-gray-700'>
          <Link className="block" to="/register">
              <button className={`flex justify-center items-center rounded-full group hover:ring-1 transition-all ease-out duration-300 hover:ring-primary bg-primary hover:bg-[#1EBC91] text-white py-2 ${i18n.language === "en" ? "w-[210px]" : "w-[260px]"}`}>
                {t('sign-up-for-free')}
              </button>
            </Link>
            <Link className="block" to="/login">
              <buttton className={`flex justify-center items-center rounded-full group hover:ring-1 transition-all ease-out duration-300 hover:ring-[#1EBC91] bg-[#1EBC91] hover:bg-white hover:text-dark text-white py-2 ${i18n.language === "en" ? "w-[210px]" : "w-[260px]"}`}>
                {t('See A Doctor')}
              </buttton>
            </Link>
          </div>
          <div className="pt-8 max-w-[400px] w-full flex gap-x-2 items-center gap-y-4 text-center md:text-left justify-center md:justify-between font-main">
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">1500+</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">{t('active-doctors')}</p>
            </article>
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">15K+</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">{t('active-users')}</p>
            </article>
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">94%</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">{t('symptoms-treated')}</p>
            </article>
          </div>
        </article>
        <article data-aos="fade-up" className="w-full max-w-[630px] flex justify-center relative">
          <img className="relative z-10 w-full max-w-[430px]" src={HomeHeroImage} alt="Hero" />
        </article>
      </section>
      <div className="relative font-main virtual-health text-center flex justify-center flip-words mt-10 mb-28">
        <h2 className="text-primary text-center text-[2.2rem] md:text-5xl lg:text-6xl">
          {t('get-help-for')}
        </h2>
        <div className="w-full absolute left-0 top-11 md:top-16">
          <div className="w-full h-16 overflow-y-hidden flex justify-center">
            {
              WORDS.map(word => (
                <span className="block w-full whitespace-normal lowercase text-[2.2rem] md:text-5xl lg:text-6xl">
                  {t(`${word}`)}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeroSection
