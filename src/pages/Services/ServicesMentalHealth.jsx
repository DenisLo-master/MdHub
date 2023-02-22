import React from 'react'
import { MentalHealthBanner } from '../../assets'


const ServicesMentalHealth = () => {
  return (
    <section className="font-main">
      <header className="bg-[#F6BA21] text-white w-full h-[530px] py-10">
        <div className="max-w-[86rem] mx-auto flex justify-between">
          <article className="space-y-5">
            <h2 className="text-8xl max-w-[250px]">
              mental health
            </h2>
            <p className="font-body text-lg max-w-lg py-3">
              In today’s faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.
            </p>
            <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
              Sign Up Today
            </button>
          </article>
          <img src={MentalHealthBanner} alt="mental health" />
        </div>
      </header>
    </section>
  )
}

export default ServicesMentalHealth