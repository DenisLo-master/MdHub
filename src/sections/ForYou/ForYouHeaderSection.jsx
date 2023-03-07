import React from 'react'
import { forYouNavDetails } from '../../constants'
import ForYouNavCard from '../../components/ForYouNavCard'

const ForYouHeaderSection = () => {
  return (
    <section className="for-you-hero-bg font-main bg-cover bg-no-repeat bg-center">
      <div className="w-full max-w-7xl mx-auto h-[390px] flex items-center">
        <h2 className="text-[88px] max-w-[450px] leading-[80px] pb-5 text-white">
          healthcare, without the headaches
        </h2>
      </div>
    </section>
  )
}

export default ForYouHeaderSection