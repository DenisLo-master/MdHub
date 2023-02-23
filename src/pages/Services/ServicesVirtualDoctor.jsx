import React from 'react'
import {
  VirtualDoctorBanner,
  HowItWorksMobile01
} from '../../assets'

import { medicalTreatmentData, virtualDoctorHowItWorksData } from '../../constants'


const ServicesVirtualDoctor = () => {
  return (
    <section className="font-main py-10">
      <header className="bg-[#A293FF] text-white w-full h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px]">
              virtual doctor
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p>
                Treatment and diagnosis for 70% of medical issues can be done virtually.
              </p>
              <p>
                Connect with a virtual doctor in minutes, 24/7. Or, book an appointment with a specialist – no referral needed.
              </p>
            </div>
            <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
              Sign Up Today
            </button>
          </article>
          <img className="absolute right-0 top-0 h-full" src={VirtualDoctorBanner} alt="virtual doctor" />
        </div>
      </header>

      <section className="bg-white py-14">
        <h2 className="text-primary text-center text-5xl md:text-7xl">
          Get care today for <span className="text-gray-800">birth control pills.</span>
        </h2>
        <h3 className="text-center text-4xl md:text-5xl py-20">
          Don't just take it from us
        </h3>
        <div className="w-full max-w-6xl mx-auto flex item-center justify-between text-center">
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">4.9/5</h2>
            <p className="font-body max-w-[170px]">Average user satisfaction rating</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">91%</h2>
            <p className="font-body max-w-[220px]">Of medical issues resolved in the first interaction</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">65%</h2>
            <p className="font-body max-w-[200px]">Of visits prevent a workplace absence</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">3.6</h2>
            <p className="font-body max-w-[170px]">Hours saves per consultation on average</p>
          </article>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-14">
        <div className="w-full max-w-[38rem] mx-auto text-center space-y-4">
          <h3 className="text-4xl md:text-5xl">
            Get medical treatment online
          </h3>
          <p className="font-body text-light text-dark">
            Our online doctors can treat your health conditions and concerns without you ever having to leave home. Book an appointment with specialists, like dermatologists, endocrinologists, mental health therapists, gynecologists, and more.
          </p>
        </div>
        <div className="py-10 max-w-[83rem] mx-auto grid grid-cols-4 gap-x-4 gap-y-10">
          {
            medicalTreatmentData.map(item => (
              <article
                key={item.id}
                className="max-w-[280px] shadow-cardService rounded-t"
              >
                <img className="w-full" src={item.image} alt="Diagnosis" />
                <div className="bg-white flex flex-col items-center py-4 px-6">
                  <h2 className="text-lg text-center pb-2">{item.title}</h2>
                  <p className="font-body">
                    {item.text}
                  </p>
                </div>
              </article>
            ))
          }
          <article className="max-w-[280px] rounded-t">
            <div className="bg-primary h-[260px] flex justify-center items-center text-white mb-5">
              <h2 className="text-3xl max-w-[100px] text-center">Sign Up Today</h2>
            </div>
            <button className="w-full border text-2xl border-dark h-36 flex justify-center items-center">
              See A Doctor
            </button>
          </article>
        </div>
      </section>

      <section className="py-10 bg-white text-gray-800">
        <div className="w-full max-w-[83rem] mx-auto">
          <h2 className="text-4xl pb-4 text-center">
            How It Works
          </h2>
          <section>
            {
              virtualDoctorHowItWorksData.map(step => (
                <article key={step.id} className="flex justify-between items-center">
                  <div className="flex gap-x-8">
                    <article className="w-20 h-20 text-3xl font-body font-semibold bg-primary text-white rounded-full flex justify-center items-center">
                      {step.id}
                    </article>
                    <article className="w-full max-w-[590px] space-y-5">
                      <h2 className="text-4xl">{step.title}</h2>
                      <p className="font-body text-lg">
                        {step.description}
                      </p>
                    </article>
                  </div>
                  <img src={step.image} alt={step.title} />
                </article>
              ))
            }
          </section>
          <div className="md:pl-28">
            <button className="rounded-full text-center w-44 py-1 border border-primary">
              Sign Up Today
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor