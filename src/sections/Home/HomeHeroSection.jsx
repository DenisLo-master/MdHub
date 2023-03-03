import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'
import { HeroGif, HeroBg } from '../../assets'
import { Link } from 'react-router-dom'

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
  // "seasonal depression",
  // "insomnia",
  // "stress",
  // "birth control",
  // "erectile dysfunction",
  // "plan b",
  // "antibiotics",
  // "pain control and management",
  // "mental health medication",
  // "virus",
  // "urine",
  // "blood",
  // "covid",
  // "mobile vaccination",
  // "wound care and treatment",
  // "palliative care",
  // "post surgery care",
  // "IV medication",
  // "injection infusions",
  // "vital signs monitoring"
]

const HomeHeroSection = () => {
  return (
    <div className="md:py-20 bg-white">
      <section className="max-w-[90rem] mx-auto flex flex-col-reverse gap-y-6 md:flex-row items-center relative">
        <aside className="hidden lg:block absolute -left-[70px] 2xl:-left-[150px] top-[430px] text-black opacity-20 transform -rotate-90">
          &copy; 2023 MDHUB Inc
        </aside>
        <article data-aos="fade-up" className="flex-1 px-4 md:pl-20">
          <h2 className="w-full max-w-[750px] font-main text-center md:text-left text-4xl md:text-6xl">
            Accessible, quality healthcare at your fingertips.
          </h2>
          <p className="font-body text-center md:text-left font-extralight text-gray-900 md:text-xl py-4 md:py-8 max-w-[630px]">
            From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.
          </p>
          <div className='flex justify-center md:justify-start space-x-2 md:space-x-6 font-main text-gray-700'>
            <Link to="services">
              <Button wide>
                <span>See A Doctor</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
              </Button>
            </Link>
            <Link to="/register">
              <Button wide>
                <span>Sign Up</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
              </Button>
            </Link>
          </div>
        </article>
        <article data-aos="fade-up" className="w-full max-w-[630px] flex justify-center relative">
          <img className="relative z-10 w-full max-w-[430px]" src={HeroGif} alt="Hero" />
          <img alt="Hero Bg" src={HeroBg} className="absolute max-w-[550px] top-0 right-16 z-0" />
        </article>
      </section>
      <div className="relative homepage text-center flex justify-center flip-words">
        <h2 className="text-primary text-center text-5xl md:text-6xl relative right-[245px]">
          Get care today for
        </h2>
        <div>
          {
            WORDS.map(word => (
              <span className="md:text-6xl left-[780px] 2xl:left-[850px]">
                {word}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeHeroSection