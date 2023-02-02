import React from 'react'
import { PhoneIcon, LocationIcon } from '../../assets'

const Contact = () => {
  return (
    <section className="py-20 flex justify-center text-white">
      <article className="flex items-center">
        <div className="bg-primary rounded-tl-[35px] rounded-bl-[35px] p-10 font-main space-y-4 h-[500px] shadow-cardService">
          <h1 className="text-4xl">Contact Us</h1>
          <ul>
            <li className='flex items-center gap-x-2'>
              <PhoneIcon className="w-4" /> <span>+1 514 88M-DHUB</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <LocationIcon className="w-4" /> <span>Montreal, QC</span>
            </li>
          </ul>
        </div>
        <div className="py-16 px-12 bg-[#f9f9f9] shadow-cardService rounded-[35px] text-gray-800 font-body">
          <h3 className="pb-4">Required Field *</h3>
          <form className="space-y-4 w-[500px] text-gray-800">
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder="Full Name" />
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="email" placeholder="Your Email Address" />
            </div>
            <div className="w-full">
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder="Organization/Company" />
            </div>
            <div className="w-full">
              <textarea className="w-full h-[300px] p-6 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" placeholder="Your message here..." />
            </div>
            <div className='w-full pt-3'>
              <button type="submit" className={`rounded-full font-main text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}

export default Contact