import React from 'react'
import { Link } from 'react-router-dom'
import {
  OkIconPrimary,
  Benefit
} from '../../assets'


const HomeMembershipBenefitsSection = () => {
  return (
    <section className="relative w-full font-main bg-white py-20">
      <div className="w-full flex justify-between">
        <div className="flex">
          <article className="w-52" />
          <article>
            <article className="px-4 md:px-0 w-full">
              <div className="space-y-2">
                <h2 className="w-full font-main text-center md:text-left text-4xl md:text-5xl">
                  Membership Benefits
                </h2>
                <h3 className='w-full font-body text-base pb-8'>
                  Your health, all in one place.
                </h3>
              </div>
            </article>
            <ul className="font-body space-y-7 pb-8 max-w-sm">
              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Free unlimited access to doctors 24/7</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Free online pharmacy and delivery</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Free Headspace membership</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Access to private labs with a 25% discount</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Mobile nursing and homecare with a 25% discount</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Virus testing with a 25% discount + free rush service</p>
              </li>

              <li className='flex items-center gap-x-3'>
                <div>
                  <OkIconPrimary className="w-7 h-7" />
                </div>
                <p>Access to specialists and mental health professionals with a 15% discount</p>
              </li>
            </ul>
            <Link to="/rates">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
            </Link>
          </article>
        </div>
        <div>
          <img className="max-w-4xl 3xl:max-w-[86rem] 3xl:object-cover 3xl:max-h-[700px]" src={Benefit} alt="Benefit" />
        </div>
      </div>
    </section>
  )
}

export default HomeMembershipBenefitsSection