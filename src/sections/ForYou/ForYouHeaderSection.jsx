import React from 'react'
import { ForYouHeaderBg } from '../../assets'

const ForYouHeaderSection = () => {
  return (
    <section className="relative bg-[#DB8E96] font-main bg-cover bg-no-repeat bg-center px-4">
      <img className="hidden lg:block absolute object-cover w-full h-[400px]" src={ForYouHeaderBg} alt="For You" />
      <div className="relative z-10 w-full max-w-7xl mx-auto h-[390px] flex items-center">
        <h2 className="text-[70px] lg:text-[88px] max-w-[450px] leading-[80px] pb-5 text-white">
          healthcare, without the headaches
        </h2>
      </div>
    </section>
  )
}

export default ForYouHeaderSection