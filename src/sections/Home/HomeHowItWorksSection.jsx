import React from 'react'
import Slider from '../../components/Slider'

const HomeHowItWorksSection = () => {
  return (
    <section className="bg-how-it-works">
      <article className="w-full max-w-[90rem] mx-auto pt-10 pb-20">
        <h2 className="text-4xl font-main text-center">How It Works</h2>
        <p className="max-w-[480px] mx-auto text-center pt-3">
          Lorem ipsum dolor sit amet consectetur. Ac varius eleifend auctor laoreet tempor fringilla dolor viverra. Sagittis imperdiet ut ut urna pharetra malesuada fames elementum. Gravida nunc erat eu pharetra sit.
        </p>
      <Slider />
        <div className="mx-auto w-full max-w-[1000px] h-[450px] mt-8 bg-gray-500 text-white flex justify-center items-center">
          Video
        </div>
      </article>
    </section>
  )
}

export default HomeHowItWorksSection