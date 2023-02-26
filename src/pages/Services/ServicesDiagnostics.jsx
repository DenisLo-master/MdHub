import React from 'react'
import { diagnosisHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'

const ServicesDiagnostics = () => {
  return (
    <section className="font-main text-dark ">
      <header className="bg-[#F6A9CB] diagnostics-bg text-white w-full py-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px] max-w-[380px] leading-[80px] pb-5">
              diagnostics
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg pb-8">
              <p>
                Safe, fast and professional testing on your schedule in the comfort and privacy of your own home or office. Avoid the wait at hospitals and clinics
              </p>
              <p>
                Our certified partner labs can quickly process over 300 different screenings and assays in order to provide a comprehensive health assessment.
              </p>
            </div>
            <Link to="register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
                Sign Up Today
              </button>
            </Link>
          </article>
        </div>
      </header>
      <section className="bg-white py-14">
        <h2 className="text-primary text-center text-5xl md:text-7xl pb-10">
          Get care today for <span className="text-gray-800">blood testing.</span>
        </h2>
      </section>
      <section className="bg-[#F9F9F9] py-10 pb-24">
        <h2 className="text-4xl pb-4 text-center">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto space-y-5">
          {
            diagnosisHowItWorksData.map(step => (
              <article key={step.id} className="flex justify-between items-center">
                <div className="flex items-center gap-x-8">
                  <article>
                    <div className="w-20 h-20 text-3xl font-body font-semibold bg-primary text-white rounded-full flex justify-center items-center">
                      {step.id}
                    </div>
                  </article>
                  <article className="w-full max-w-[640px] space-y-5">
                    <div>
                      <p className="font-body text-lg leading-5">
                        {step.text} {
                          step.id === 2 && <strong className="font-semibold">(see locations here)</strong>
                        }
                        {
                          step.id === 4 && <strong className="font-semibold">here</strong>
                        }
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