import React, { useState } from 'react'
import {
  Membership01,
  Membership02,
  Membership03,
  Membership04,
  Membership05,
  Membership06,
  Membership07,
} from '../../assets'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'

const HomeMembershipBenefitsSection = () => {
  const [selectedBenefitId, setSelectedBenefitId] = useState(1)
  return (
    <section className="relative w-full md:min-h-[650px] font-main bg-[#F3F3F3] pb-20 flex flex-col md:flex-row">
      <article className="px-4 md:pl-20 w-full md:w-[calc(100vw-360px)]">
        <div className="space-y-2 md:pt-20 md:pl-32">
          <h2 className="w-full max-w-[200px] font-main text-center md:text-left text-4xl md:text-5xl">
            Membership Benefits
          </h2>
          <h3 className='w-full font-body text-base pb-8'>
            Your health, all in one place.
          </h3>
        </div>
        <div className="flex justify-end pr-14">
          <div
            className="w-full max-w-[620px] md:p-8 flex gap-x-5 border border-primary  bg-primary text-white rounded"
          >
            <div>
              <Membership01 />
            </div>
            <div className="space-y-6 max-w-[400px]">
              <h2 className="text-xl leading-7 font-bold">Unlimited access to doctors 24/7</h2>
              <p className="font-body text-lg">
                Our team of Canadian certified doctors and healthcare specialists are available for you and your family 24/7 from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </article>
      <aside className="absolute top-10 right-0">
        <ul>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0  bg-primary text-white"
          >
            <div>
              <Membership01 />
            </div>
            <h2 className="text-xl leading-7">Unlimited access to doctors 24/7</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0 bg-white text-primary"
          >
            <div>
              <Membership02 />
            </div>
            <h2 className="text-xl leading-7">Mental Healthcare</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0 bg-white text-primary"
          >
            <div>
              <Membership03 />
            </div>
            <h2 className="text-xl leading-7">Online Pharmacy</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0 bg-white text-primary"
          >
            <div>
              <Membership04 />
            </div>
            <h2 className="text-xl leading-7">Nursing and home care services</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0 bg-white text-primary"
          >
            <div>
              <Membership05 />
            </div>
            <h2 className="text-xl leading-7">Lab work and diagnostics</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary border-b-0 bg-white text-primary"
          >
            <div>
              <Membership06 />
            </div>
            <h2 className="text-xl leading-7">Access to specialists</h2>
          </li>
          <li
            className="w-full max-w-[360px] py-4 px-8 flex items-center gap-x-5 border border-primary bg-white text-primary"
          >
            <div>
              <Membership07 />
            </div>
            <h2 className="text-xl leading-7">Headspace app</h2>
          </li>
        </ul>
      </aside>
    </section>
  )
}

export default HomeMembershipBenefitsSection