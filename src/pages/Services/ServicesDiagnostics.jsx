import React from 'react'
import { diagnosisHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'

const WORDS = ['virus', 'urine', 'blood', 'covid']

const ServicesDiagnostics = () => {
  return (
    <section className="font-main text-dark py-10">
      <header className="bg-diagnostics lg:diagnostics-bg text-white w-full py-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-2">
            <h2 className="text-[65px] lg:text-[88px] max-w-[450px] leading-[80px] pb-5">
              lab testing & diagnostics
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg pb-8 leading-5 px-2">
              <p>
                Avoid the wait at hospitals and clinics with safe, fast, and professional lab testing from the comfort of your home or office.
              </p>
              <strong className="block">Get results fast</strong>
              <p>
                Our certified partner labs can process over 300 different screenings to provide you with a comprehensive health assessment – and get you answers fast. 
              </p>
            </div>
            <Link className="block px-2" to="register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-diagnostics border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
        </div>
      </header>
      <section className="bg-white lg:py-14">
        <div className="hidden relative virtual-health text-center lg:flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            Get help for
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
      </section>
      <section className="bg-white py-10 pb-24">
        <h2 className="text-4xl pb-10 text-center">
          How It Works
        </h2>
        <section className="w-full max-w-6xl space-y-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            {
              diagnosisHowItWorksData.map((step => (
                <article key={step.id} className="flex flex-col justify-between items-center">
                  <div className="flex flex-col gap-x-8">
                    <article className="pb-2">
                      <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                        {step.id}
                      </div>
                    </article>
                    <article className="w-full max-w-[220px] space-y-5 border-b border-dark pb-2">
                      <p className="leading-5 text-2xl">
                        {step.text} 
                        {step.id === 3 && (<span><strong>here</strong>{")"}</span>)}
                        {step.id === 4 && (<strong className="ml-1">here.</strong>)}
                      </p>
                      {
                        step.id === 1 && (
                          <strong className="font-body block">
                            See a doctor now.
                          </strong>
                        )
                      }
                      {
                        step.id === 3 && (
                          <p className="font-light text-sm font-body text-dark">
                            *Please note: member pricing is $99 for this service.
                          </p>
                        )
                      }
                    </article>
                  </div>
                  <img className="w-full max-w-[224px] pt-4" src={step.image} alt={step.text} />
                </article>
              )))
            }
          </div>
        </section>
      </section>
    </section>
  )
}

export default ServicesDiagnostics