import React, { useState } from 'react'
import { ArrowIcon } from '../assets'
import {
  HowItWorks01,
  HowItWorks02,
  HowItWorks03,
  HowItWorks04
} from '../assets'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="w-full max-w-[500px] mx-auto relative">
        <button disabled={currentSlide > 2} onClick={() => setCurrentSlide(currentSlide + 1)} className="absolute top-20 -right-20">
          <ArrowIcon className="text-primary" />
        </button>
        <button disabled={currentSlide < 1} onClick={() => setCurrentSlide(currentSlide - 1)} className="absolute top-20 -left-20">
          <ArrowIcon className="text-primary transform rotate-180" />
        </button>
      </div>
      <div className="py-3 px-4 my-10 font-main text-lg flex justify-between space-x-4 w-full rounded-full bg-[#F1F1F1]">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`transition-colors ease-in duration-200 px-8 py-2 rounded-full ${currentSlide === 0 ? "bg-primary text-white" : "bg-[#F1F1F1] text-gray-800"}`}>
          Step 1
        </button>
        <button
          onClick={() => setCurrentSlide(1)}
          className={`transition-colors ease-in duration-200 px-8 py-2 rounded-full ${currentSlide === 1 ? "bg-primary text-white" : "bg-[#F1F1F1] text-gray-800"}`}>
          Step 2
        </button>
        <button
          onClick={() => setCurrentSlide(2)}
          className={`transition-colors ease-in duration-200 px-8 py-2 rounded-full ${currentSlide === 2 ? "bg-primary text-white" : "bg-[#F1F1F1] text-gray-800"}`}>
          Step 3
        </button>
        <button
          onClick={() => setCurrentSlide(3)}
          className={`transition-colors ease-in duration-200 px-8 py-2 rounded-full ${currentSlide === 3 ? "bg-primary text-white" : "bg-[#F1F1F1] text-gray-800"}`}>
          Step 4
        </button>
      </div>
      <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-[35px]">
        <div className={`w-full flex transform transition-transform duration-300 ease-in-out text-2xl tracking-normal ${currentSlide === 0 ? "translate-x-0" : currentSlide === 1 ? "-translate-x-[375px] md:-translate-x-[768px]" : currentSlide === 2 ? "-translate-x-[750px] md:-translate-x-[1536px]" : "-translate-x-[1125px] md:-translate-x-[2304px]"} text-gray-800 font-body`}>
          <article className="min-w-[375px] md:min-w-[768px] flex flex-wrap justify-around items-center px-6 md:px-8">
            <div>
              <h2 className="font-body font-semibold max-w-[140px] text-5xl border-b border-gray-800 pb-2">
                Step 1
              </h2>
              <p className="text-light pt-4">
                Describe your symptoms.
              </p>
            </div>
            <img src={HowItWorks01} alt="Describe your symptoms" />
          </article>
          <div className="min-w-[375px] md:min-w-[768px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 2</h2>
            <p className="font-light">Chat with a medical professional</p>
          </div>
          <div className="min-w-[375px] md:min-w-[768px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 3</h2>
            <p className="font-light">Get a diagnosis, prescription, and
              if required, a lab requisition</p>
          </div>
          <div className="min-w-[375px] md:min-w-[768px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 4</h2>
            <p className="font-light">Utilize our services to get treatment, online pharmacy, mobile nurse, or lab testing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider