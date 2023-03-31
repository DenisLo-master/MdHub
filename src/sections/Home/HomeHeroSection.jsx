import React, { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'
import { HeroGif, HeroBg, HomeHeroImage } from '../../assets'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const WORDS = [
  "diagnosis",
  "prescriptions & renewals",
  "doctors notes",
  "referrals to specialists",
  "mental health",
  "general health advise",
  "lab requisitions",
  "anxiety",
  "mood changes",
  "depression",
  "seasonal depression",
  "insomnia",
  "stress",
  "birth control",
  "erectile dysfunction",
  "plan b",
  "antibiotics",
  "pain control and management",
  "mental health medication",
  "virus",
  "urine",
  "blood",
  "covid",
  "mobile vaccination",
  "wound care and treatment",
  "palliative care",
  "post surgery care",
  "IV medication",
  "injection infusions",
  "vital signs monitoring"
]

const HomeHeroSection = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const { t } = useTranslation()

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
    <div className="md:pt-40 md:py-20 md:pb-10 bg-home-gradient px-4">
      <section className="max-w-[90rem] mx-auto flex flex-col-reverse gap-y-6 md:flex-row items-center relative">
        <article data-aos="fade-up" className="flex-1 px-4 md:pl-20">
          <h2 className="w-full max-w-[750px] font-main text-center md:text-left text-3xl md:text-6xl">
            {t('Accessible, quality healthcare at your fingertips.')}
          </h2>
          <p className="w-full text-base font-body text-center md:text-left font-extralight text-gray-900 md:text-xl py-4 md:py-8 max-w-[630px]">
            {t('From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.')}
          </p>
          <div className='flex flex-col md:flex-row items-center gap-y-4 justify-center md:justify-start space-x-2 md:space-x-6 font-main text-gray-700'>
            <Link to="/login">
              <Button wide gradient>
                <span>{t('See A Doctor')}</span> 
              </Button>
            </Link>
            <Link to="/register">
              <Button wide gradient>
                <span>Sign Up For $29.99</span> 
              </Button>
            </Link>
          </div>
          <div className="pt-8 max-w-[400px] w-full flex gap-x-2 items-center gap-y-4 text-center md:text-left justify-center md:justify-between font-main">
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">1500+</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">Active Doctors</p>
            </article>
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">15K+</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">Active Users</p>
            </article>
            <article className="flex md:block flex-col items-center">
              <h2 className="text-4xl md:text-5xl text-primary">94%</h2>
              <p className="font-body text-[#ACACAC] md:max-w-[50px]">Symptoms Treated</p>
            </article>
          </div>
        </article>
        <article data-aos="fade-up" className="w-full max-w-[630px] flex justify-center relative">
          <img className="hidden md:block relative z-10 w-full max-w-[430px]" src={HomeHeroImage} alt="Hero" />
        </article>
      </section>
    </div>
  )
}

export default HomeHeroSection