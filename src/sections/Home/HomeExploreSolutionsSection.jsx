import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  MedicalBenefitsInfograph,
  NeverWaitForDoctorAgainImage,
  MedicalBenefitsBg
} from '../../assets'

const HomeExploreSolutionsSection = () => {
  return (
    <section className="flex flex-col md:flex-row pb-20 overflow-y-hidden">
      <article className="flex-1 relative overflow-y-hidden">
        <img className="w-full -ml-10 md:ml-0 relative z-10 max-w-[650px]" src={MedicalBenefitsInfograph} alt="medical benefits inforgraph" />
        <img className="absolute -top-28 2xl:-top-[9.6rem] left-0 " src={MedicalBenefitsBg} alt="Medical Benefits Background" />
        <FiArrowUpRight className="text-2xl absolute bottom-0 left-full md:left-20" />
      </article>
      <article className="flex-1 relative font-main bg-gray-100">
        <div>
          <img className="w-full h-96 md:h-auto object-cover" src={NeverWaitForDoctorAgainImage} alt="never wait for doctor again" />
          <h2 className="text-4xl absolute z-10 top-6 left-8">Never wait for a <br /> doctor again.</h2>
        </div>
        <div className="p-10 flex flex-col items-center md:block font-body text-2xl">
          <p className=" text-gray-700 w-full text-center md:text-left tracking-wide max-w-[440px] pb-24">Spend more time with the people you love and less time in waiting rooms with MDHub.</p>
          <h2 className="font-main flex items-center space-x-2"><span>Explore our 360 solutions.</span> <FiArrowUpRight /></h2>
        </div>
      </article>
    </section>
  )
}

export default HomeExploreSolutionsSection