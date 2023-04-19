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
  HomeMembershipBenefitsVideo,
  MembershipBenefitHeadspace
} from '../../assets'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'


const HomeMembershipBenefitsSection = () => {
  const { t } = useTranslation()
  return (
    <section className="relative w-full font-main py-8 pt-16 lg:pb-20">
      <div className="w-full max-w-7xl mx-auto flex gap-y-5 gap-x-12 flex-col-reverse lg:flex-row justify-between">
        <div className="block lg:hidden w-full px-4">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={HomeMembershipBenefitsVideo}
            controls
            loop
          />
        </div>
        <div className="hidden lg:block">
          <ReactPlayer
            width={395}
            height={700}
            url={HomeMembershipBenefitsVideo}
            controls
            muted
            playing
          />
        </div>
        <div className="flex-1 pt-10 flex flex-col gap-y-4 px-4 text-center lg:text-left">
          <h2 className="text-5xl">{t('Membership Benefits')}</h2>
          <p className="font-body max-w-[680px] text-xl pb-6">
            {t('mdhub-is-canadas-first-on-demand-medical-membership-members-have-access-to-several-on-demand-services-from-anywhere-some-of-our-benefits-include')}:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit01} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg">{t('access-to-canadian-certified-doctors-24-7')}</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-24 h-24" src={MembershipBenefit02} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg -mt-3">{t('free-and-fast-delivery-online-pharmacy')}</h2>
            </article>
            <article className='flex flex-col items-center pt-1'>
              <img className="w-16 h-20" src={MembershipBenefitHeadspace} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg">{t('free-headspace-membership')}</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit04} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg">{t('access-to-qualified-mobile-nurses')}</h2>
            </article>
            <article className='flex flex-col items-center'>
              <img className="w-20 h-20" src={MembershipBenefit05} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg">{t('access-specialist-doctors-at-discounted-rates')}</h2>
            </article>
            <article className='flex flex-col items-center pt-4'>
              <img className="w-16 h-16" src={MembershipBenefit06} alt="Membership benefit" />
              <h2 className="text-center max-w-[190px] pt-2 text-lg">{t('fast-and-convenient-lab-testing-and-diagnostics')}</h2>
            </article>
          </div>
          <div className="items-center gap-y-2  pt-4 md:pt-12">
            <h2 className="text-3xl pb-4">{t('take-control-of-your-health-today')}</h2>
            <Link to="/register">
              <button className={`bg-[#1EBC91] hover:bg-white hover:text-[#1EBC91] rounded-full group hover:ring-1 hover:ring-[#1EBC91] px-14 py-2  flex justify-center items-center space-x-2 text-white `}>
                {t('sign-up-now')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeMembershipBenefitsSection