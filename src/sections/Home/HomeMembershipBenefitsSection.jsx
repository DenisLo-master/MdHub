import React from 'react'
import {
  Membership01,
  Membership02,
  Membership03,
  Membership04,
  Membership05,
  Membership06,
  OkIcon
} from '../../assets'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../components/Button'

const HomeMembershipBenefitsSection = () => {
  return (
    <section className="w-full max-w-[90rem] mx-auto pb-20 flex flex-col md:flex-row">
      <article className="px-4 md:pl-20 w-full max-w-[700px]">
        <h2 className="w-full font-main text-center md:text-left text-4xl md:text-5xl pb-6">Membership Benefits</h2>
        <h3 className='w-full font-body text-[22px] pb-8'>
          Lorem ipsum dolor sit amet consectetur. At volutpat at vel integer. Lorem ipsum dolor sit.
        </h3>
        <ul className="space-y-3 max-w-[530px] md:text-xl px-4 md:px-0 pb-10">
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Free unlimited access to doctors 24/7</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Free online pharmacy an delivery</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Free Headspace membership</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Access to private labs with a 25% discount</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Mobile nursing and Homecare with a 25% discount</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary w-8 h-8" />
            <p>Virus testing with 25% discount + free rush service</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <div>
              <OkIcon className="text-primary w-8 h-8" />
            </div>
            <p>Access to specialists and mental health professionals with a 15% discount</p>
          </li>
        </ul>
        <Button>
          <span className="font-main text-xl">Learn More</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
        </Button>
      </article>
      <article className="flex-1 space-y-8 gap-y-6 pt-6 md:pt-0">
        <ul className="space-y-3">
          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership01 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                24/7 unlimited access to medical professionals
              </h2>
              <p className="leading-5 font-body text-base max-w-[370px]">
                Our team of certified doctors are available for you and your family when you need them.
              </p>
            </div>
          </li>
          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership02 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                Online Pharmacy
              </h2>
              <p className="leading-5 font-body text-base max-w-[450px]">
                Get same-day prescription fulfillment for common treatments for birth control, erectile dysfunction, acne, and more.
              </p>
            </div>
          </li>
          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership03 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                Access to specialists
              </h2>
              <p className="leading-5 font-body text-base max-w-[450px]">
                If you require testing or to see a nurse in-person, our mobile nursing team can treat you at your home or office.
              </p>
            </div>
          </li>

          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership04 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                Nursing services on-the-go
              </h2>
              <p className="leading-5 font-body text-base max-w-[370px]">
                Access our specialists and receive care at discounted rates.
              </p>
            </div>
          </li>
          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership05 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                Your health, all in one place
              </h2>
              <p className="leading-5 font-body text-base max-w-[430px]">
                MDHUB uses leading technology to power our holistic platform, built to address all of your health needs.
              </p>
            </div>
          </li>
          <li className="bg-primary rounded flex items-center gap-x-8 py-2 px-8">
            <Membership06 className="w-12 h-12" />
            <div className="text-white space-y-2">
              <h2 className="font-main text-2xl">
                Bilingual and accessible
              </h2>
              <p className="leading-5 font-body text-base max-w-[430px]">
                Connect to a bilingual healthcare professional via phone, video call, or text.
              </p>
            </div>
          </li>

        </ul>
      </article>
    </section>
  )
}

export default HomeMembershipBenefitsSection