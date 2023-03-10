import React from 'react'
import { OnlinePharmacyBanner, LogoWhite } from '../../assets'
import { onlinePharmacyHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'

const WORDS = ["birth control", "erectile dysfunction", "plan b", "antibiotics", "pain control and management", "mental health medication"]

const ServicesOnlinePharmacy = () => {
  return (
    <section className="font-main py-10">
      <header className="bg-onlinePharmacy text-white w-full py-10 pb-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 px-4">
            <h2 className="text-[70px] lg:text-[88px] max-w-[380px] leading-[80px] pb-5">
              online pharmacy
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p>
                Stop wasting time chasing down refills or waiting in line. Easily access our online pharmacy to get prescriptions filled or renewed and delivered right to your door
              </p>
              <strong className="block pb-4">
                Your pharmacist is just a text away.
              </strong>
              <p>
                With our membership, you'll get:
              </p>
              <ul className="list-disc pl-8">
                <li>Free delivery in Quebec</li>
                <li>Automatic refills</li>
                <li>24/7 emergency service</li>
              </ul>
            </div>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] mt-10 text-lg flex justify-center py-3 border bg-white text-primary border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-16" src={OnlinePharmacyBanner} alt="virtual doctor" />
        </div>
      </header>
      <section className="bg-white py-14">
        <div className="relative virtual-health text-center hidden lg:flex justify-center flip-words">
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
        <div className="lg:pt-32 py-10">
          <h2 className="text-4xl pb-10 text-center">
            How It Works
          </h2>
          <section className="w-full max-w-5xl space-y-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-y-5 justify-between">
              {
                onlinePharmacyHowItWorksData.map((step => (
                  <article key={step.id} className="flex max-w-[260px] flex-col justify-between items-center">
                    <div className="flex flex-col gap-x-8">
                      <article className="pb-2">
                        <div className="w-14 h-14 text-3xl font-body font-semibold bg-gradient-primary text-white rounded-full flex justify-center items-center">
                          {step.id}
                        </div>
                      </article>
                      <article className="w-full space-y-5 border-b border-dark pb-2">
                        <p className={`leading-5 text-lg ${step.id === 2 ? "pr-5" : ""}`}>
                          {step.text}
                        </p>
                      </article>
                    </div>
                    <img className="pt-8 w-full" src={step.image} alt={step.text} />
                  </article>
                )))
              }
            </div>
          </section>
        </div>
        <section className="flex flex-col lg:flex-row justify-center gap-x-8 py-12">
          <article className="w-full font-body max-w-sm rounded bg-gradient-primary text-white p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-semibold">Invoice</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>Delivery</p>
                <p className="text-xs">Free</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>24/7 Emergency Service</p>
                <p className="text-xs">Free</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>Personalized Packaging</p>
                <p className="text-xs">Free</p>
              </li>
              <li className="flex justify-between items-center text-light border-b border-b-white pb-2">
                <p>Medications</p>
                <p className="text-xs">Please contact your insurance provider</p>
              </li>
              <li>
                <img src={LogoWhite} alt="MDHUB" />
              </li>
            </ul>
          </article>
          <article className="p-6 md:p-8 space-y-4">
            <p className="text-3xl  w-full font-body font-thin max-w-[450px]">
              Get top-tier service at a great price. When you use our online pharmacy, you only pay the amount that isn't covered by your insurance.
            </p>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-primary">
                Sign Up Today
              </button>
            </Link>
          </article>
        </section>
      </section>

    </section>
  )
}

export default ServicesOnlinePharmacy