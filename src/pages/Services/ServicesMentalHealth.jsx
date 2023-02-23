import React from 'react'
import {
  HearBrainImage,
  MeditationImage,
  MentalHealthBanner,
  MentalHealthImg,
  ListIconImage,
  CalenderIcon
} from '../../assets'


const ServicesMentalHealth = () => {
  return (
    <section className="font-main">
      <header className="bg-[#F6BA21] text-white w-full h-[560px] py-10">
        <div className="max-w-[86rem] mx-auto flex justify-between">
          <article className="space-y-5">
            <h2 className="text-[88px] leading-[90px] max-w-[250px]">
              mental health
            </h2>
            <p className="font-body text-lg max-w-lg py-3">
              In today’s faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.
            </p>
            <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-white">
              Sign Up Today
            </button>
          </article>
          <img src={MentalHealthBanner} alt="mental health" />
        </div>
      </header>

      <section className="bg-white py-14">
        <h2 className="text-primary text-center text-5xl md:text-7xl">
          Get care today for <span className="text-gray-800">anxiety.</span>
        </h2>
        <h3 className="text-center text-4xl md:text-5xl py-20">
          MDHUB members can benefit from:
        </h3>
        <div className="w-full max-w-4xl mx-auto flex item-center justify-between text-center">
          <article className="space-y-6 flex flex-col items-center">
            <img src={MentalHealthImg} alt="mental health" />
            <p className="font-body">Mental health physicians.</p>
          </article>
          <article className="space-y-6 pt-6 flex flex-col items-center">
            <img src={HearBrainImage} alt="heart and brain" />
            <p className="md:pt-2 font-body">Mental health therapists.</p>
          </article>
          <article className="space-y-6 flex flex-col items-center md:-mt-3">
            <img src={MeditationImage} alt="meditation" />
            <p className="max-w-[180px] font-body">Headspace wellness & meditation app.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-10">
        <div className="w-full max-w-[85rem] mx-auto">
          <h2 className="md:text-5xl text-center pb-12">How It Works</h2>
          <div className="space-y-16">
            <article className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl">See a mental health physician</h2>
                <p className="pt-10 pb-14 max-w-[650px]">Log into your MDHUB account and select “Mental Health Physician” from the menu of specialists. Next, choose a date and time that works for you. Quickly speak with a mental health physician for an initial assessment or follow-up. 30-minute initial appointments are $315, and 30-minute follow-up appointments are $230.</p>
                <button className="rounded-full text-center w-44 py-1 border border-primary">
                  Sign Up Today
                </button>
              </div>
              <img src={ListIconImage} alt="List Icon" />
            </article>
            <article className="flex justify-between items-center">
              <img src={CalenderIcon} alt="Calender" />
              <div className="text-right">
                <h2 className="text-3xl">See a mental health therapist</h2>
                <p className="pt-10 pb-14 max-w-[650px]">See a mental health therapist, with no appointment necessary. All you need to do is choose the topic you’d like to discuss with a therapist and book an appointment. Sessions are 50 minutes in length. The fee for a session ranges from $120-$160, depending on your region. If you have insurance, this fee is often covered by health benefits.</p>
                <button className="rounded-full text-center w-44 py-1 border border-primary">
                  Sign Up Today
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesMentalHealth