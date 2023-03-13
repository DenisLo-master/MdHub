import React from 'react'
import { Link } from 'react-router-dom'
import { NursingAndHomecareBanner } from '../../assets'
import { nursingServices, nursingAndHomecareHowItWorksData } from '../../constants'

const WORDS = ['mobile vaccination', 'wound care and treatment', 'palliative care', 'post surgery care', "IV medication", "injection infusions", "vital signs monitoring"];

const ServicesNursingAndHomecare = () => {
  return (
    <section className="py-10 font-main">
      <header className="bg-nursingHomecare text-white w-full lg:h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4">
            <h2 className="text-[70px] lg:text-[88px]">
              nursing & homecare
            </h2>
            <div className="space-y-3 leading-6 font-body text-lg max-w-lg">
              <p>
                Our professional nurses come directly to you. Plus, our team of homecare agents are there when you need them, offering compassionate care for seniors, people requiring post-operative care, and people with disabilities.
              </p>
              <p>
                Whether it's medical services or homecare, we can help you with most of your needs.
              </p>
            </div>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-nursingHomecare border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={NursingAndHomecareBanner} alt="Nursing and Homecare" />
        </div>
      </header>
      <section className="bg-white pt-14">
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
        <section className=" pt-32 py-10">
          <h2 className="text-4xl pb-4 text-center">
            How It Works
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              {
                nursingAndHomecareHowItWorksData.map((step => (
                  <article key={step.id} className="flex flex-col justify-between items-center">
                    <div className="flex flex-col gap-x-8">
                      <article className="pb-2 w-[220px]">
                        <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                          {step.id}
                        </div>
                      </article>
                      <article className="w-full max-w-[220px] space-y-5 border-b border-dark pb-4 mb-4">
                        <p className="leading-[1.2em] text-2xl">
                          {step.text}
                          
                        </p>
                        {
                          step.note && (
                            <p className="font-body text-dark text-sm">{step.note}</p>
                          )
                        }
                      </article>
                    </div>
                    <img className="w-full pt-4 max-w-[220px]" src={step.image} alt={step.text} />
                  </article>
                )))
              }
            </div>
          </section>
        </section>
      </section>
      <section className="bg-white">
        <div className="w-full max-w-[1200px] mx-auto pt-12">
          <h2 className="md:pl-14 font-main text-[30px] text-center md:text-left text-black pb-4">
            Services suitable for all your needs
          </h2>
          <section className="flex justify-center flex-wrap gap-8 text-center">
            {
              nursingServices.map((item, index) => (
                <article key={index} className={`shadow-cardService w-[127px] h-[120px] text-xs text-center flex justify-center items-center border-[0.25px] border-[#cfc5c5] font-main ${index === 0 ? "bg-primary text-white" : 'bg-white text-gray-800'}`}>
                  <h2 className="max-w-[100px]">{item}</h2>
                </article>
              ))
            }
          </section>
          <div className="text-sm font-body md:pl-14 text-gray-800 px-4">
            <h2 className="py-6 font-semibold">
              Require a different service? Send us an email here.
            </h2>
            <p className="max-w-[1100px]">
              <strong className="font-bold">NOTE:</strong> Above pricing does not include laboratory fees or additional materials such as vitamin drips or the cost of medication. Our team will confirm all appointments by email or phone and advice of any additional fees. Homecare services require a minimum booking of 3 hours for Montreal and 4 hours for outside of Montreal.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesNursingAndHomecare
