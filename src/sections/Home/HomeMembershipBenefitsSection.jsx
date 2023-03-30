import React from 'react'
import { Link } from 'react-router-dom'
import {
  OkIconPrimary,
  MembershipBenefitsCover,
  MembershipBenefit01,
  MembershipBenefit02,
  MembershipBenefit03,
  MembershipBenefit04,
  MembershipBenefit05,
  MembershipBenefit06
} from '../../assets'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'


const HomeMembershipBenefitsSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative w-full font-main bg-white py-8 lg:pb-20">
      <div className="w-full max-w-7xl mx-auto flex gap-x-12 flex-col-reverse lg:flex-row justify-between">
        <div>
          <img className="w-full max-w-[460px]" src={MembershipBenefitsCover} alt="Benefits" />
        </div>
        <div className="flex-1 pt-10 flex flex-col gap-y-4">
          <h2 className="text-5xl">Membership Benefits</h2>
          <p className="font-body max-w-[680px] text-2xl pb-6">Virtual and physical healthcare services through an affordable membership, offering mobile nursing, pharmacy, lab testing, and mental health specialists.</p>
          <div className="grid grid-cols-3 gap-8">
            <article className='flex flex-col items-center'>
              <MembershipBenefit01 />
              <h2 className="text-center max-w-[150px] pt-2">Access to Canadian certified doctors 24/7.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <MembershipBenefit02 />
              <h2 className="text-center max-w-[150px] pt-2">Free and fast delivery Online pharmacy.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <MembershipBenefit03 />
              <h2 className="text-center max-w-[150px] pt-2">Free Headspace membership.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <MembershipBenefit04 />
              <h2 className="text-center max-w-[150px] pt-2">Access to qualified Mobile nurses.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <MembershipBenefit05 />
              <h2 className="text-center max-w-[150px] pt-2">Access specialist doctors at discounted rates.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <MembershipBenefit06 />
              <h2 className="text-center max-w-[150px] pt-2">Fast and convenient lab testing and diagnostics.</h2>
            </article>
          </div>
          <div className="flex justify-around pt-4 md:pt-12">
            <h2 className="text-2xl">Take control of your health today.</h2>
            <Link to="/register">
              <Button wide gradient>
                <span>Sign Up Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeMembershipBenefitsSection