import React from 'react'
import { OnlinePharmacyBanner, LogoWhite } from '../../assets'
import { onlinePharmacyHowItWorksData } from '../../constants'
import { Link } from 'react-router-dom'

const ServicesOnlinePharmacy = () => {
  return (
    <section className="font-main">
      <header className="bg-[#90C387] text-white w-full py-10 pb-20 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px] max-w-[380px] leading-[80px] pb-5">
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
              <button className="rounded-full w-[240px] mt-10 text-lg flex justify-center py-3 border border-white">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img className="absolute right-0 top-16" src={OnlinePharmacyBanner} alt="virtual doctor" />
        </div>
      </header>
      <section className="bg-white py-14">
        <h2 className="text-primary text-center text-5xl md:text-7xl pb-10">
          Get care today for <span className="text-gray-800">antibiotics.</span>
        </h2>
        <div className="bg-[#F9F9F9] py-10">
          <h2 className="text-4xl pb-4 text-center">
            How It Works
          </h2>
          <section className="w-full max-w-4xl space-y-6 mx-auto">
            {
              onlinePharmacyHowItWorksData.map((step => (
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
                    </article>
                  </div>
                  <img src={step.image} alt={step.text} />
                </article>
              )))
            }
            <div className="md:pl-28">
              <Link to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-primary">
                  Sign Up Today
                </button>
              </Link>
            </div>
          </section>
        </div>
        <section className="flex justify-center gap-x-8 py-12">
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
            <Link className="block" to="register">
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