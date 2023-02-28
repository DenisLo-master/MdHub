import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CorporateOverview01,
  CorporateOverview02,
  CorporateOverview03,
  CorporateOverview04,
  CorporateBenefits01,
  CorporateBenefits02,
  CorporateBenefits03
} from '../../assets'
import { registerationStore } from '../../store/registerationStore'

const CorporateOverview = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  return (
    <section className="font-main pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <article>
          <div className="relative flex">
            <img className="w-full" src={CorporateOverview01} alt="Corporate Overview" />
            <h2 className="absolute bottom-8 left-8 text-white text-4xl">Corporate Overview</h2>
          </div>
          <div className="py-10 flex justify-center gap-x-10 text-center">
            <article>
              <h2 className="text-primary text-8xl">91%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of medical issues resolved in the first interaction
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">65%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of visits prevent a workplace absense
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">3.6</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Hours saves per consultation on average
              </p>
            </article>
          </div>
          <div>
            <p className="font-body text-xl text-center py-8 font-light">
              We offer holistic corporate plans to suit any size of business.
            </p>
            <div className="flex justify-center gap-x-12">
              <Link
                to="/register"
                onClick={() => changeSelectedAccountType("corporate")}
              >
                <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  5-10 Employees
                </button>
              </Link>
              <a href="mailto:info@mdhub.com?subject=Corporate%20Inquiry%20-%2010%2B%20Employees">
                <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  10-50 Employees
                </button>
              </a>
              <a href="mailto:info@mdhub.com?subject=Corporate%20Inquiry%20-%2010%2B%20Employees">
                <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  51+ Employees
                </button>
              </a>
            </div>
          </div>
        </article>

        <article className="text-center pt-10 space-y-6">
          <h2 className="text-4xl">The ultimate benefits solution that your teams will actually use and love.</h2>
          <div className="flex justify-between">
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={CorporateBenefits01} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Whole-person care anytime, anywhere</h2>
                <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem]">
                  Support every person on your team with access to quality healthcare available 24/7, like virtual appointments and prescription delivery.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={CorporateBenefits02} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Family & pediatric care</h2>
                <p className="font-body font-thin text-sm w-full max-w-[380px] leading-[1.4rem]">
                  With MDHUB corporate plans, your employee’s family and children can receive healthcare, too. Designed specifically for busy families, your employees’ families can get care fast. 
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={CorporateBenefits03} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Increased ROI & employee satisfaction</h2>
                <p className="font-body font-thin text-sm w-full max-w-[380px] leading-[1.4rem]">
                  Your corporate membership is tax-deductible, but it also means less out-of-pocket expenses for your people. Plus, you can feel good knowing they're well taken care of.
                </p>
              </div>
            </article>
          </div>
        </article>

        <article className="flex justify-between text-center">
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview02} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Healthy people, happier organizations
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview03} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Mental health & well-being
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview04} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Chat with specialists
            </p>
          </div>
        </article>

        <article className="text-center px-5">
          <h2 className="text-[2.5rem]">Improving community wellness </h2>
          <p className="font-body font-light py-4 text-sm">
            A corporate membership, to us, is more like a partnership. When individuals and their families are taken care of and valued, it creates a ripple effect. Organizations become happier, healthier and more productive. When organizations become healthier, so do entire communities, and that’s something you can be proud of.
          </p>
        </article>
      </div>
    </section>
  )
}

export default CorporateOverview