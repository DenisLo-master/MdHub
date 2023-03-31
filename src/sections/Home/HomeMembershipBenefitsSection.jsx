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
  MembershipBenefit06,
  HomeMembershipBenefitsVideo
} from '../../assets'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'


const HomeMembershipBenefitsSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative w-full font-main py-8 lg:pb-20">
      <div className="w-full max-w-[70rem] 3xl:max-w-7xl mx-auto flex gap-y-5 gap-x-12 flex-col-reverse lg:flex-row justify-between">
        <img className="block lg:hidden w-full max-w-[460px]" src={MembershipBenefitsCover} alt="Benefits" />
        <div className="hidden lg:block">
          <ReactPlayer
            width={395}
            height={700}
            url={HomeMembershipBenefitsVideo}
            controls
          />
        </div>
        <div className="flex-1 pt-10 flex flex-col gap-y-4 px-4 text-center lg:text-left">
          <h2 className="text-5xl">Membership Benefits</h2>
          <p className="font-body max-w-[680px] text-2xl pb-6">Virtual and physical healthcare services through an affordable membership, offering mobile nursing, pharmacy, lab testing, and mental health specialists.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit01} alt="Membership benefit" />
              <h2 className="text-center max-w-[150px] pt-2">Access to Canadian certified doctors 24/7.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-24 h-24" src={MembershipBenefit02} alt="Membership benefit" />
              <h2 className="text-center max-w-[150px] pt-2 -mt-3">Free and fast delivery Online pharmacy.</h2>
            </article>
            <article className='flex flex-col items-center pt-8'>
              <img className="w-14 h-14" src={MembershipBenefit03} alt="Membership benefit" />
              <h2 className="text-center max-w-[150px] pt-2">Free Headspace membership.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit04} alt="Membership benefit" />
              <h2 className="text-center max-w-[170px] pt-2">Access to qualified Mobile nurses.</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit05} alt="Membership benefit" />
              <h2 className="text-center max-w-[170px] pt-2">Access specialist doctors at discounted rates.</h2>
            </article>
            <article className='flex flex-col items-center pt-4'>
              <img className="w-16 h-16" src={MembershipBenefit06} alt="Membership benefit" />
              <h2 className="text-center max-w-[170px] pt-2">Fast and convenient lab testing and diagnostics.</h2>
            </article>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-y-2 justify-around pt-4 md:pt-12">
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