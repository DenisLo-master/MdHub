import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  HeartLeft,
  HeartRight
} from '../../assets'

const HomeMembershipCostCtaSection = () => {
  return (
    <section className="bg-primary relative z-10 overflow-hidden text-white font-main p-12 lg:p-24">
      <img className="w-16 md:w-36 opacity-30 absolute -top-16 left-0" src={HeartLeft} alt="Heart" />
      <img className="w-32 md:w-80 opacity-30 absolute top-2 right-0" src={HeartRight} alt="Heart" />
      <div className="relative z-10 flex flex-col md:flex-row md:space-x-20 gap-y-6">
        <h2 className="text-3xl text-center md:text-left md:text-5xl font-medium max-w-[800px]">
          Your membership can cost you as little as $29.99 a month.
        </h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          <button className="text-lg transition-opacity ease-in duration-200 hover:opacity-80 md:text-xl rounded-full w-64 py-2 border flex justify-center items-center space-x-2  border-transparent shadow-dark text-primary bg-white">
            <span>Membership Sign Up</span> <FiArrowUpRight className="text-lg" />
          </button>
          <button className="text-lg transition-opacity ease-in duration-200 hover:opacity-80 md:text-xl rounded-full w-52 py-2  border flex justify-center items-center space-x-2  border-white text-white bg-transparent ring-1 shadow-white ring-white">
            <span>For Employees</span> <FiArrowUpRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeMembershipCostCtaSection