import React from 'react'
import { diagnosisHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'

const WORDS = ['virus', 'urine', 'blood', 'covid']

const ServicesDiagnostics = () => {
  return (
    <section className="font-main text-dark py-10">
      <header className="bg-diagnostics diagnostics-bg text-white w-full py-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px] max-w-[450px] leading-[80px] pb-5">
              lab testing & diagnostics
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg pb-8 leading-5">
              <p>
                Avoid the wait at hospitals and clinics with safe, fast, and professional lab testing from the comfort of your home or office.
              </p>
              <strong className="block">Get results fast</strong>
              <p>
                Our certified partner labs can process over 300 different screenings to provide you with a comprehensive health assessment – and get you answers fast. 
              </p>
            </div>
            <Link to="register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-primary border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
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
      </section>
      <section className="bg-white py-10 pb-24">
        <h2 className="text-4xl pb-4 text-center">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto space-y-7">
          {
            diagnosisHowItWorksData.map(step => (
              <article key={step.id} className="flex justify-between items-center">
                <div className="flex items-center gap-x-8">
                  <article>
                    <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                      {step.id}
                    </div>
                  </article>
                  <article className="w-full max-w-[870px] space-y-5">
                    <div>
                      <p className="font-body text-lg leading-5">
                        {step.text} 
                      </p>
                    </div>
                    {step.note && <small className="font-body">{step.note}</small>}
                  </article>
                </div>
              </article>
            ))
          }
          <div className="md:pl-24">
            <Link to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-primary">
                Sign Up Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesDiagnostics