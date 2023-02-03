import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'
import { Hero } from '../../assets'

const HomeHeroSection = () => {
  return (
    <div className="md:py-20 bg-white">
      <section className="max-w-[90rem] mx-auto flex flex-col-reverse gap-y-6 md:flex-row items-center relative">
        <aside className="hidden lg:block absolute -left-[70px] 2xl:-left-[150px] top-[430px] text-black opacity-20 transform -rotate-90">
          &copy; 2023 MDHub Inc
        </aside>
        <article className="flex-1 px-4 md:pl-20">
          <h2 className="font-main text-center md:text-left text-4xl md:text-8xl max-w-[700px]">Your health care,  <span className="md:pl-6">in your hands.</span></h2>
          <p className="font-body text-center md:text-left font-extralight text-gray-900 md:text-xl py-4 md:py-8 max-w-[630px]">
            From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.
          </p>
          <div className='flex justify-center md:justify-start space-x-2 md:space-x-6 font-main text-gray-700'>
            <Button wide>
              <span>See A Doctor</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
            </Button>
            <Button>
              <span>Sign Up</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
            </Button>
          </div>
        </article>
        <article className="flex-1 flex justify-center">
          <img className="w-full max-w-[550px]" src={Hero} alt="Hero" />
        </article>
      </section>
      <h2 className="text-primary text-center font-main text-5xl md:text-7xl py-10">
        Get care today for <span className="text-gray-800">birth control.</span>
      </h2>
    </div>
  )
}

export default HomeHeroSection