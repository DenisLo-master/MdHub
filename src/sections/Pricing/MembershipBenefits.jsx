import React from 'react'
import { Link } from 'react-router-dom'
import { OkIcon } from '../../assets'

const MembershipBenefits = () => {
  return (
    <section className="flex justify-center py-10">
      <div className="w-full max-w-[1000px] rounded-lg bg-gradient-primary text-white py-10 px-16">
        <h2 className="text-4xl text-center pb-7">
          Members Benefit From:
        </h2>
        <ul className="grid grid-cols-2 gap-x-16 gap-y-8">
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Free 24/7 unlimited access to doctors
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Mobile nursing
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Access to specialists
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Homecare
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Mental health platform and support
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Laboratory analysis
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Online pharmacy
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Testing
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              Vaccination
            </p>
          </li>
          <li className="flex gap-x-4 items-center">
            <OkIcon className="w-8 h-8" />
            <p className="text-2xl">
              +More
            </p>
          </li>
          <li>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
                Sign Up Today
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MembershipBenefits