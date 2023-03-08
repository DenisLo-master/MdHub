import React from 'react'
import { Link } from 'react-router-dom'
import {
  HearBrainImage,
  MeditationImage,
  MentalHealthBanner,
  MentalHealthImg,
  HeadspaceLogo
} from '../../assets'


const WORDS = ['anxiety', 'mood changes', 'depression', 'seasonal depression', "insomnia", "stress"]

const ServicesMentalHealth = () => {
  return (
    <section className="font-main bg-white py-10">
      <header className="bg-mentalHealth text-white w-full h-[560px] py-10">
        <div className="max-w-[86rem] mx-auto flex justify-between">
          <article className="space-y-5">
            <h2 className="text-[88px] leading-[90px] max-w-[250px]">
              mental health
            </h2>
            <p className="font-body text-lg max-w-lg py-3">
              In today’s fast-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.
            </p>
            <Link to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border bg-white text-primary border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img src={MentalHealthBanner} alt="mental health" />
        </div>
      </header>

      <section className="bg-white py-14">
        <div className="relative virtual-health text-center flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            Get care today for
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="md:text-6xl">
                    {word}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        <h3 className="text-center text-4xl md:text-5xl pt-32 py-20">
          MDHUB members can benefit from:
        </h3>
        <div className="w-full max-w-4xl mx-auto flex item-center justify-between text-center">
          <article className="space-y-6 flex flex-col items-center">
            <img src={MentalHealthImg} alt="mental health" />
            <p className="font-body">Mental health frontline</p>
          </article>
          <article className="space-y-6 pt-6 flex flex-col items-center">
            <img src={HearBrainImage} alt="heart and brain" />
            <p className="md:pt-2 font-body">Mental health specialists</p>
          </article>
          <article className="space-y-6 flex flex-col items-center md:-mt-3">
            <img src={MeditationImage} alt="meditation" />
            <p className="max-w-[180px] font-body">Headspace wellness & meditation app.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#F9F9F9] flex justify-center items-center gap-x-12 py-20">
        <div>
          <img src={HeadspaceLogo} alt="Headspace" />
        </div>
        <div className="w-full max-w-[530px] space-y-4">
          <h2 className="text-4xl">What is Headspace?</h2>
          <p className="font-body">
            Headspace is an app that teaches you how to meditate.
            Meditation has been shown to help people stress less, focus more and sleep better. Headspace is meditation made simple, teaching you life-changing mindfulness skills in just a few minutes a day.
          </p>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl text-center pb-16">What is Headspace?</h2>
        <div className="w-full max-w-6xl mx-auto flex justify-between">
          <article className="w-full max-w-[430px]">
            <h2 className="text-3xl">See a mental health professional</h2>
            <p className="font-body py-7">
              Log into your MDHUB account and select “Mental Health Physician” from the menu of specialists. Next, choose a date and time that works for you. Quickly speak with a mental health physician for an initial assessment or follow-up. 30-minute initial appointments are $315, and 30-minute follow-up appointments are $230.
            </p>
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Sign Up Today
              </button>
            </Link>
          </article>
          <article className="w-full max-w-[430px]">
            <h2 className="text-3xl">See a mental health specialist</h2>
            <p className="font-body py-7">
              See a mental health therapist, with no appointment necessary. All you need to do is choose the topic you’d like to discuss with a therapist and book an appointment. Sessions are 50 minutes in length. The fee for a session ranges from $120-$160, depending on your region. If you have insurance, this fee is often covered by health benefits.
            </p>
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Sign Up Today
              </button>
            </Link>
          </article>

        </div>
      </section>
    </section>
  )
}

export default ServicesMentalHealth