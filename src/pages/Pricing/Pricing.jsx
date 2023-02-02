import React, { useState } from 'react'
import { OkIcon } from '../../assets'

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("yearly")
  return (
    <section className="font-main">
      <header className="bg-[#F9F9F9] pt-20 pb-10 text-center space-y-6">
        <h2 className="text-4xl">MdHub Membership Plans</h2>
        <div className="flex items-center justify-center gap-x-6 text-3xl">
          <article
            onClick={() => setSelectedPackage("monthly")}
            className={`${selectedPackage === "monthly" ? "bg-primary text-white" : "bg-white"} cursor-pointer w-48 h-44 flex justify-center items-center  shadow-cardService rounded-3xl`}>
            Monthly
          </article>
          <article
            onClick={() => setSelectedPackage("yearly")}
            className={`relative ${selectedPackage === "yearly" ? "bg-primary text-white" : "bg-white"} cursor-pointer w-52 h-48 flex justify-center items-center shadow-glow rounded-3xl`}>
            <span>Yearly</span>
            <span className={`absolute transition-all ease-in-out duration-200 text-sm font-body ${selectedPackage === "yearly" ? "bottom-4" : "-bottom-8"} left-[73px]`}>
              Best Value
            </span>
          </article>
        </div>
      </header>

      <section className="py-20">
        <div className="flex justify-center space-x-20">
          <article className="w-full max-w-[500px] px-8 pt-8 pb-16 border-[0.25px] rounded-3xl shadow-cardService">
            <h2 className="text-4xl">Individual</h2>
            <div className="pt-8 pb-10 font-body">
              <h2 className="text-3xl font-semibold">
                {selectedPackage === "monthly" ? "$34.99/month*" : "$29.99/month*"}
              </h2>
              <p className="font-semibold text-sm">
                {selectedPackage === "monthly" ? "*3 months minimum" : "Unlimited usage"}
              </p>
            </div>
            <button className={`rounded-full text-lg group hover:ring-1 hover:ring-primary px-[2.2rem] py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Get Started
            </button>
          </article>
          <article className="w-full max-w-[500px] px-8 pt-8 pb-16 border-[0.25px] rounded-3xl shadow-cardService">
            <h2 className="text-4xl">
              Family
              <span className="text-base font-body font-light">(4 Members Included)</span>
            </h2>
            <div className="pt-8 pb-10 font-body">
              <h2 className="text-3xl font-semibold">
                {selectedPackage === "monthly" ? "$54.99/month*" : "$44.99/month*"}
              </h2>
              <p className="font-semibold text-sm">
                {selectedPackage === "monthly" ? "*3 months minimum" : "Unlimited usage"}
              </p>
            </div>
            <button className={`rounded-full text-lg group hover:ring-1 hover:ring-primary px-[2.2rem] py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Get Started
            </button>
          </article>
        </div>

        <div className="text-center text-xl font-body flex flex-col items-center pt-10 pb-16">
          <p>One time access to virtual doctor or nurse. </p>
          <h2 className="font-semibold pt-2 pb-5">$54.99/month*</h2>
          <button className={`font-main rounded-full text-lg group hover:ring-1 hover:ring-primary px-[2.2rem] py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
            Get Started
          </button>
        </div>

        <section className="space-y-16">
          <div className="w-full max-w-[1100px] mx-auto py-8 px-12 border-[0.25px] rounded-3xl shadow-cardService">
            <h2 className="text-3xl">Corporate</h2>
            <p className="font-body text-lg py-5">
              Contact our corporate sales team for attractive benefits that keep your company running smoothly.
            </p>
            <button className={`font-main rounded-full text-lg group hover:ring-1 hover:ring-primary px-[2.2rem] py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Contact Now
            </button>
          </div>

          <div className="w-full max-w-[1100px] mx-auto py-8 px-12 border-[0.25px] rounded-3xl shadow-cardService space-y-7 text-xl">
            <h2 className="text-3xl">Members Benefit From:</h2>
            <div className="flex gap-x-32 uppercase font-light font-body">
              <ul className="space-y-8">
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Free 24/7 Unlimited Access To</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Virtual Healthcare</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Professionals</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Mental Health</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Online Pharmacy</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Specialized Medicine</span>
                </li>
              </ul>

              <ul className="space-y-8">
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Mobile Nursing</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Homecare</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Laboratory Analysis</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Testing</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>Private Clinic Access</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <OkIcon className="text-primary" />
                  <span>+More</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Pricing