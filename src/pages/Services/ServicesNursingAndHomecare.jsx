import React from 'react'
import { NursingHeroImage } from '../../assets'
import { nursingAndHomecareServices } from '../../constants'

const ServicesNursingAndHomecare = () => {
  return (
    <section className="py-20 font-body">
      <div className="w-full max-w-[1000px] mx-auto relative text-white">
        <img className="w-full" src={NursingHeroImage} alt="Nursing And Homecare"/>
        <article className="absolute top-8 left-8 z-10">
          <h2 className="text-4xl font-main">Mobile Nurse & <br/> Homecare</h2>
          <p className="max-w-[230px] font-light text-sm leading-5 pt-4 tracking-tight text-justify">
            MD HUB has one of the largest teams of registered nurses and homecare agents in Quebec who are ready to assist you or your relatives in most medical and home assistance cases. Please review our list below to directly book a service or message us with any request and our customer service team will reply within 24 hours.
          </p>
        </article>
        <article className="absolute top-40 right-8 z-10 text-right">
          <div className="pb-6">
            <h2 className="text-lg">Nursing Member Pricing</h2>
            <p className="font-light text-sm">
              Starting at $149/hour
            </p>
          </div>

          <div>
            <h2 className="text-lg">Home Care Member Pricing</h2>
            <p className="font-light text-sm">
              Starting at $59/hour
            </p>
          </div>
        </article>
      </div>
      <div className="w-full max-w-[1200px] mx-auto pt-12">
        <h2 className="font-main text-[30px] text-center text-black pb-4">
          Select The Service That Most Suits Your Needs In Order To Book Your Appointment
        </h2>
        <section className="flex justify-center flex-wrap gap-8 text-center">
          {
            nursingAndHomecareServices.map((item, index) => (
              <article key={index} className={`shadow-cardService w-[127px] h-[120px] rounded-2xl text-xs text-center flex justify-center items-center border-[0.25px] border-[#cfc5c5] font-main ${index === 0 ? "bg-primary text-white" : 'bg-white text-gray-800'}`}>
                <h2 className="max-w-[100px]">{item}</h2>
              </article>
            ))
          }
        </section>
        <div className="text-sm md:pl-14 text-gray-800">
          <h2 className="py-6">
            For all other services non mentioned in our list, please click <strong className="font-bold">here</strong> to send us an email about your request.
          </h2>
          <p className="max-w-[1100px]">
            <strong className="font-bold">NOTE:</strong> Above pricing does not include laboratory fees or additional materials such as vitamin drips or the cost of medication. Our team will confirm all appointments by email or phone and advice of any additional fees. Homecare services require a minimum booking of 3 hours for Montreal and 4 hours for outside of Montreal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesNursingAndHomecare