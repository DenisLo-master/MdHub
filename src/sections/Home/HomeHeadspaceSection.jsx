import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MentalHealth } from '../../assets'


const HomeHeadspaceSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row py-20">
      <article className="flex-1">
        <div className="bg-gray-100 p-8 font-body">
          <p className="text-2xl md:text-3xl text-gray-700 max-w-[440px] pb-10 md:pb-44">Speak with the right health care professionals to help get you in the right headspace.</p>
          <p className="text-2xl md:text-3xl flex md:justify-end font-main items-center space-x-2">
            <span>Dive into our Headspace</span> <FiArrowUpRight />
          </p>
        </div>

        <div className="bg-primary p-8 font-body text-2xl md:text-3xl text-white space-y-2">
          <p className="max-w-[630px] pt-10 md:pt-44">"Your present circumstances don't determine where you can go; they merely determine where you start."</p>
          <p>- <span className="italic font-main">Nido Qubein</span></p>
        </div>
      </article>
      <article className="flex-1">
        <img className="w-full h-auto md:h-[779px] md:object-cover" src={MentalHealth} alt="Mental Health" />
      </article>
    </section>
  )
}

export default HomeHeadspaceSection