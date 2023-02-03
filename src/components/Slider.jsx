import React, { useState } from 'react'
import { ArrowIcon } from '../assets'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div>
      <div className="w-full max-w-[500px] mx-auto relative">
        <button disabled={currentSlide > 2} onClick={() => setCurrentSlide(currentSlide + 1)} className="absolute top-20 -right-20">
          <ArrowIcon className="text-primary" />
        </button>
        <button disabled={currentSlide < 1} onClick={() => setCurrentSlide(currentSlide - 1)} className="absolute top-20 -left-20">
          <ArrowIcon className="text-primary transform rotate-180" />
        </button>
      </div>
      <div className="w-full max-w-[500px] mx-auto overflow-hidden rounded-[35px]">
        <div className={`flex transform transition-transform duration-300 ease-in-out text-2xl tracking-normal ${currentSlide === 0 ? "translate-x-0" : currentSlide === 1 ? "-translate-x-[375px] md:-translate-x-[500px]" : currentSlide === 2 ? "-translate-x-[750px] md:-translate-x-[1000px]" : "-translate-x-[1125px] md:-translate-x-[1500px]"} text-white font-body`}>
          <div className="min-w-[375px] md:min-w-[500px] h-[240px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 1</h2>
            <p className="font-light">Describe your symptoms</p>
          </div>
          <div className="min-w-[375px] md:min-w-[500px] h-[240px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 2</h2>
            <p className="font-light">Chat with a medical professional</p>
          </div>
          <div className="min-w-[375px] md:min-w-[500px] h-[240px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 3</h2>
            <p className="font-light">Get a diagnosis, prescription, and
              if required, a lab requisition</p>
          </div>
          <div className="min-w-[375px] md:min-w-[500px] h-[240px] bg-primary p-6 md:p-8">
            <h2 className="font-semibold pb-2">Step 4</h2>
            <p className="font-light">Utilize our services to get treatment, online pharmacy, mobile nurse, or lab testing</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-4">
        <span onClick={() => setCurrentSlide(0)} className={`h-[5px] w-24 transition-colors ease-in duration-200 ${currentSlide === 0 ? "bg-primary" : "bg-gray-300"}`} />
        <span onClick={() => setCurrentSlide(1)} className={`h-[5px] w-24 transition-colors ease-in duration-200 ${currentSlide === 1 ? "bg-primary" : "bg-gray-300"}`} />
        <span onClick={() => setCurrentSlide(2)} className={`h-[5px] w-24 transition-colors ease-in duration-200 ${currentSlide === 2 ? "bg-primary" : "bg-gray-300"}`} />
        <span onClick={() => setCurrentSlide(3)} className={`h-[5px] w-24 transition-colors ease-in duration-200 ${currentSlide === 3 ? "bg-primary" : "bg-gray-300"}`} />
      </div>
    </div>
  )
}

export default Slider