import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PricingSlider = () => {
  const [selectedPackage, setSelectedPackage] = useState("single")
  return (
    <section className="lg:py-10">
      <div className="pb-10 pt-3 lg:pb-3 lg:py-3 px-4 lg:my-10 font-main text-lg flex flex-col md:flex-row items-center justify-between gap-x-4 w-full rounded-b-full lg:rounded-full bg-white lg:bg-[#F1F1F1] shadow-sliderNav max-w-[485px] mx-auto">
        <button
          onClick={() => setSelectedPackage("single")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full  ${selectedPackage === "single" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          single
        </button>
        <button
          onClick={() => setSelectedPackage("family")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full
            ${selectedPackage === "family" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          family
        </button>
        <button
          onClick={() => setSelectedPackage("corporate")}
          className={`transition-colors w-[128px] ease-in duration-200 px-8 py-[10px] rounded-full 
            ${selectedPackage === "corporate" ? "bg-gradient-primary text-white" : "text-dark"}`}>
          corporate
        </button>
      </div>

      <section className={`relative transition-all ease-in-out duration-700 ${selectedPackage === "corporate" ? "h-[900px] lg:h-[300px]" : "h-[900px] lg:h-[490px]"}`}>
        <div className={`w-full font-body flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14 absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "single" ? "opacity-100" : "opacity-0"}`}>
          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow">
            <h2 className="text-3xl font-main">Monthly</h2>
            <div className="text-primary pt-8">
              <h2 className="text-[40px] leading-9">$34.99</h2>
              <p className="text-base text-dark text-center">per month</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white" to="/register">
                Get Started
              </Link>
              <p className="text-sm text-primary">3 months minimum*</p>
            </div>
          </article>

          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow relative">
            <section className="absolute -top-7 left-0 w-full flex justify-center">
              <div className="absolute flex justify-center items-center top-0 left-20 bg-gradient-primary rounded-2xl w-48 h-16 text-white font-main text-center">
                Save 25% compared
                to monthly plan
              </div>
            </section>
            <h2 className="text-5xl font-main pt-12">Yearly</h2>
            <div className="text-primary pt-14 py-10">
              <h2 className="text-[52px] leading-9">$29.99</h2>
              <p className="text-base text-dark text-center">per month</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="relative z-10 rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  Get Started
                </button>
              </Link>
              <p className="text-sm text-primary">12 months minimum*</p>
            </div>
          </article>
        </div>

        <div className={`w-full font-body flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14 absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "family" ? "opacity-100" : "opacity-0"}`}>
          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow">
            <div className="space-y-2 text-center font-main">
              <h2 className="text-3xl">Monthly</h2>
              <h4 className="text-base">includes up to 4 family members</h4>
            </div>
            <div className="text-primary pt-8">
              <h2 className="text-[40px] leading-9">$49.99</h2>
              <p className="text-base text-dark text-center">per month</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  Get Started
                </button>
              </Link>
              <p className="text-sm text-primary">3 months minimum*</p>
            </div>
          </article>

          <article className="p-8 px-12 flex flex-col items-center rounded-lg shadow-glow relative">
            <section className="absolute -top-7 left-0 w-full flex justify-center">
              <div className="absolute flex justify-center items-center top-0 left-20 bg-gradient-primary rounded-2xl w-48 h-16 text-white font-main text-center">
                Save 25% compared
                to monthly plan
              </div>
            </section>
            <div className="font-main text-center">
              <h2 className="text-5xl pt-12">Yearly</h2>
              <h4 className="text-base">includes up to 4 family members</h4>
            </div>
            <div className="text-primary pt-14 py-10">
              <h2 className="text-[52px] leading-9">$39.99</h2>
              <p className="text-base text-dark text-center">per month</p>
            </div>
            <div className="pt-8 space-y-2 text-center">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                  Get Started
                </button>
              </Link>
              <p className="text-sm text-primary">12 months minimum*</p>
            </div>
          </article>
        </div>

        <div className={`w-full font-body  absolute left-0 top-10 transition-opacity ease-in-out duration-700 ${selectedPackage === "corporate" ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-14">
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">10-50 Employees</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$19.99</h2>
                <p className="text-base text-dark text-center">per month</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </article>
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">51-100 Employees</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$17.99</h2>
                <p className="text-base text-dark text-center">per month</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </article>
            <article className="p-4 px-12 flex flex-col items-center rounded-lg shadow-glow">
              <div className="text-center font-main">
                <h2 className="text-3xl">101+ Employees</h2>
              </div>
              <div className="text-primary pt-8">
                <h2 className="text-[40px] leading-9">$14.99</h2>
                <p className="text-base text-dark text-center">per month</p>
              </div>
              <div className="pt-4 space-y-2 text-center">
                <Link className="block" to="/register">
                  <button className="rounded-full w-[240px] text-lg flex justify-center py-2 bg-gradient-primary text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </article>
          </div>
          <p className="text-center text-sm pt-8 text-primary">
            *Price is per employee, per month, for a minimum term of 12 months
          </p>
        </div>
      </section>
    </section>
  )
}

export default PricingSlider