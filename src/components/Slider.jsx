import React, { useState } from 'react'
import { ArrowIcon } from '../assets'
import { howItWorksData } from '../constants'


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="py-3 px-4 my-10 font-main text-lg flex justify-between space-x-4 w-full rounded-full bg-[#F1F1F1] shadow-sliderNav">
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
          {
            howItWorksData.map(item => (
              <article
                key={item.id}
                className="min-w-[375px] md:min-w-[768px] flex flex-wrap justify-around items-center px-6 md:px-8"
              >
                <div>
                  <h2 className="font-body font-semibold max-w-[140px] text-5xl border-b border-[#3F3F3F] pb-2">
                    {item.title}
                  </h2>
                  <p className="text-light pt-4 max-w-[350px]">
                    {item.description}
                  </p>
                </div>
                <img src={item.image} alt={item.description} />
              </article>
            ))
          }
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto relative">
        <button
          disabled={currentSlide > 2}
          onClick={() => setCurrentSlide(currentSlide + 1)}
          className={`absolute -top-60 -right-40 ${currentSlide > 2 && "opacity-60"}`}>
          <ArrowIcon className="text-primary w-14 h-14" />
        </button>
        <button
          className={`absolute -top-60 -left-44 ${currentSlide < 1 && "opacity-60"}`}
          disabled={currentSlide < 1}
          onClick={() => setCurrentSlide(currentSlide - 1)}
        >
          <ArrowIcon className="text-primary transform rotate-180 w-14 h-14" />
        </button>
      </div>
    </div>
  )
}

export default Slider