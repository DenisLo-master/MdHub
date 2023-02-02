import React from 'react'
import {
  HowItWorks01,
} from '../../assets'
import Slider from '../../components/Slider'

const HomeHowItWorksSection = () => {
  return (
    <section className="bg-how-it-works">
      <article className="w-full max-w-[90rem] mx-auto pt-10 pb-20">
      <h2 className="text-4xl font-main text-center">How It Works</h2>
      <img className="w-44 mx-auto" src={HowItWorks01} />
      <Slider />
        <div className="mx-auto w-full max-w-[1000px] h-[450px] mt-8 bg-gray-500 text-white flex justify-center items-center">
          Video
        </div>
      </article>
    </section>
  )
}

export default HomeHowItWorksSection