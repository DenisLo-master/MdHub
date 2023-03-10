import React from 'react'
import Slider from '../../components/Slider'

const HomeHowItWorksSection = () => {
  return (
    <section>
      <article className="hidden lg:block w-full max-w-[90rem] mx-auto pt-10">
        <h2 className="text-4xl font-main text-center">How It Works</h2>
        <Slider />
      </article>
    </section>
  )
}

export default HomeHowItWorksSection