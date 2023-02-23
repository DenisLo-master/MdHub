import React from 'react'
import { NursingAndHomecareBanner } from '../../assets'
import { nursingAndHomecareServices, nursingAndHomecareHowItWorksData } from '../../constants'

const ServicesNursingAndHomecare = () => {
  return (
    <section className="py-20 font-main">
      <header className="bg-[#F78839] text-white w-full h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px]">
              nursing & homecare
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p>
                Our professional nurses come directly to you. Plus, our team of homecare agents are there when you need them, offering compassionate care for seniors, people requiring post-operative care, and people with disabilities.
              </p>
              <p>
                Whether it's medical services or homecare, we can help you with most of your needs.
              </p>
            </div>
            <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
              Sign Up Today
            </button>
          </article>
          <img className="absolute right-0 top-0 h-full" src={NursingAndHomecareBanner} alt="Nursing and Homecare" />
        </div>
      </header>
      <section className="bg-white py-14">
        <h2 className="text-primary text-center text-5xl md:text-7xl pb-10">
          Get care today for <span className="text-gray-800">palliative care.</span>
        </h2>
        <section className="bg-[#F9F9F9] py-10">
          <h2 className="text-4xl pb-4 text-center">
            How It Works
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            {
              nursingAndHomecareHowItWorksData.map((step => (
                <article key={step.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-x-8">
                    <article>
                      <div className="w-20 h-20 text-3xl font-body font-semibold bg-primary text-white rounded-full flex justify-center items-center">
                        {step.id}
                      </div>
                    </article>
                    <article className="w-full max-w-[590px] space-y-5">
                      <p className="font-body text-lg">
                        {step.text}
                      </p>
                      {
                        step.note && (
                          <small>
                            {step.note}
                          </small>
                        )
                      }
                    </article>
                  </div>
                  <img src={step.image} alt={step.text} />
                </article>
              )))
            }
          </section>
        </section>
      </section>
      <div className="w-full max-w-[1200px] mx-auto pt-12">
        <h2 className="md:pl-14 font-main text-[30px] text-center md:text-left text-black pb-4">
          Services suitable for all your needs
        </h2>
        <section className="flex justify-center flex-wrap gap-8 text-center">
          {
            nursingAndHomecareServices.map((item, index) => (
              <article key={index} className={`shadow-cardService w-[127px] h-[120px] text-xs text-center flex justify-center items-center border-[0.25px] border-[#cfc5c5] font-main ${index === 0 ? "bg-primary text-white" : 'bg-white text-gray-800'}`}>
                <h2 className="max-w-[100px]">{item}</h2>
              </article>
            ))
          }
        </section>
        <div className="text-sm font-body md:pl-14 text-gray-800">
          <h2 className="py-6 font-semibold">
            Require a different service? Send us an email here.
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