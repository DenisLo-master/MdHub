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

const HomeMembershipBenefitsSection = () => {
  return (
    <section className="w-full max-w-[90rem] mx-auto pb-20 flex flex-col md:flex-row">
      <article className="px-4 md:pl-20 w-full max-w-[700px]">
        <h2 className="w-full font-main text-center md:text-left text-4xl md:text-5xl pb-6">Membership Benefits</h2>
        <ul className="space-y-3 max-w-[530px] md:text-xl px-4 md:px-0">
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Free unlimited access to doctors 24/7</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Free online pharmacy an delivery</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Free Headspace membership</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Access to private labs with a 25% discount</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Mobile nursing and Homecare with a 25% discount</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <OkIcon className="text-primary" />
            <p>Virus testing with 25% discount + free rush service</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <div>
              <OkIcon className="text-primary" />
            </div>
            <p>Access to specialists and mental health professionals with a 15% discount</p>
          </li>
        </ul>
      </article>
      <article className="flex-1 space-y-8 gap-y-6 pt-6 md:pt-0">
        <ul className="flex justify-center flex-wrap gap-y-6 md:space-x-8 text-center md:text-left">
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership01} alt="Fitbit" />
            <h2 className="font-main text-xl">
              24/7 unlimited access to medical professionals
            </h2>
            <p className="font-body text-xs text-gray-700">
              Our team of Canadian-certified doctors is available virtually 7 days a week for you and your family
            </p>
          </li>
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership02} alt="Magnifying Glass" />
            <h2 className="font-main text-xl">
              Access to <br /> specialists
            </h2>
            <p className="font-body text-xs text-gray-700">
              Any treatment that may require testing or a nurse intervention may be treated by our mobile nursing team at your home or office
            </p>
          </li>
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership03} alt="Location" />
            <h2 className="font-main text-xl">
              Nursing service at your home or office
            </h2>
            <p className="font-body text-xs text-gray-700">
              Members may also access specialist doctors' care at discounted rates.
            </p>
          </li>
        </ul>

        <ul className="flex justify-center flex-wrap gap-y-6 md:space-x-8 text-center md:text-left">
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership04} alt="Pharmacy" />
            <h2 className="font-main text-xl">
              Online <br /> pharmacy
            </h2>
            <p className="font-body text-xs text-gray-700">
              Same day prescription fulfilment. Birth control, erectile dysfunction, hair loss and acne are just some of the  multiple treatments and prescriptions our team can instantly process.
            </p>
          </li>
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership05} alt="Healthcare" />
            <h2 className="font-main text-xl">
              All your mental & physical <br /> health in one platform
            </h2>
            <p className="font-body text-xs text-gray-700">
              A technology powered platform to create a 360 hub for patients to address most of their mental and physical health requirements.
            </p>
          </li>
          <li className="max-w-[220px] flex flex-col items-center md:block space-y-3">
            <img className="w-20 h-20 object-cover" src={Membership06} alt="Bilingual and Accessible" />
            <h2 className="font-main text-xl">
              Bilingual and <br /> accessible
            </h2>
            <p className="font-body text-xs text-gray-700">
              Connect to bilingual healthcare professionals via video, phone, or text.
            </p>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default HomeMembershipBenefitsSection