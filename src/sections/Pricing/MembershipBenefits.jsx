import React from 'react'
import { Link } from 'react-router-dom'
import { OkIcon } from '../../assets'
import { useTranslation } from 'react-i18next'

const MembershipBenefits = () => {
  const { t } = useTranslation()
  return (
    <section className="flex h-[700px]">
      <article className="flex-1 text-6xl px-8 flex justify-end items-center">
        <h2>Members Benefit From:</h2>
      </article>
      <article className="md:w-[912px] flex justify-end bg-blue-circle">
        <div className="flex items-center w-full md:w-[90%]">
          <ul className="flex flex-col gap-y-8">
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Free 24/7 unlimited access to doctors</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Access to specialists</p>
              </div>
            </li>
            <li className="flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Mental health platform and support</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Online pharmacy</p>
              </div>
            </li>
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Vaccination</p>
              </div>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-8">
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Mobile nursing</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Homecare</p>
              </div>
            </li>
            <li className="flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Laboratory analysis</p>
              </div>
            </li>
            <li className="md:pl-8 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">Testing</p>
              </div>
            </li>
            <li className="md:pl-16 flex font-body text-white">
              <div className="flex items-center gap-x-3">
                <OkIcon className=" w-10 h-10" />
                <p className="text-xl max-w-[240px]">+more</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default MembershipBenefits