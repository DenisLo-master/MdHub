import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  PartnerCompany01,
  PartnerCompany02,
  PartnerCompany03,
  PartnerCompany04,
  ForCorporateHeader,
  OkIconWhite,
  CorporateBenefitsIcon01,
  CorporateBenefitsIcon02,
  CorporateBenefitsIcon03
} from '../../assets'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const CorporateOverview = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  const { t } = useTranslation()
  return (
    <section className="font-main md:mt-[120px]">
      <section className="relative font-main bg-virtualDoctor overflow-hidden px-4">
        <img className="hidden lg:block absolute object-cover w-full h-[400px]" src={ForCorporateHeader} alt="For Corporate" />
        <div className="relative z-10 w-full max-w-7xl mx-auto lg:h-[390px] flex items-center">
          <h2 className="text-[50px] px-4 text-center lg:text-left lg:text-[88px] max-w-[650px] leading-[80px] pb-5 text-white">
            {t('a-modern-benefit-your-employees-will-love')}
          </h2>
        </div>
      </section>

      <section className="w-full max-w-[1130px] mx-auto py-10 font-main px-4">
        <article className="w-full bg-linearGradientPrimary rounded-lg px-4 py-10 pb-32 text-white space-y-6">
          <h2 className="text-center text-4xl max-w-lg mx-auto">
            {t('attract-and-retain-top-talent-with-mdhubs-ultimate-healthcare-solution')}
          </h2>
          <ul className="flex flex-col lg:flex-row justify-center flex-wrap font-body text-white gap-x-16 gap-y-8 relative">
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('integrated-mental-health-care-to-support-your-employees-individual-needs')}
              </p>
            </li>
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('get-coverage-for-your-employees-and-their-families')}
              </p>
            </li>
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('24-7-access-to-care-means-fewer-work-absences')}
              </p>
            </li>
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('employees-can-get-a-doctors-note-or-a-prescription-delivered-to-the-office')}
              </p>
            </li>
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('families-can-access-pediatric-and-family-care-homecare-and-nursing-services')}
              </p>
            </li>
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('employees-can-take-control-with-preventative-care-and-chronic-condition-management')}
              </p>
            </li>
            <li className="hidden lg:flex lg:w-[380px] gap-x-2" />
            <li className="flex lg:w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                {t('all-of-your-employees-care-in-one-place')}
              </p>
            </li>
            <li className="absolute lg:-bottom-7 -bottom-16 left-4 lg:left-36">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
                  {t('sign-up-today')}
                </button>
              </Link>
            </li>
          </ul>
        </article>
      </section>

      <section className="py-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-y-4 justify-center gap-x-16 text-center">
          <article className="space-y-1">
            <h2 className="text-primary text-8xl">91%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              {t('of-medical-issues-resolved-in-the-first-interaction')}
            </p>
          </article>
          <article className="space-y-1">
            <h2 className="text-primary text-8xl">65%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              {t('of-visits-prevent-a-workplace-absence')}
            </p>
          </article>
          <article className="space-y-1">
            <h2 className="text-primary text-8xl">3.5</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              {t('hours-saves-per-consultation-on-average')}
            </p>
          </article>
        </div>
      </section>

      <section className="w-full max-w-[1130px] mx-auto font-main px-4">
        <div>
          <p className="font-body text-xl text-center py-8 font-light">
            {t('we-offer-corporate-plans-to-suit-any-size-of-business')}
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-y-6 justify-center gap-x-12">
            <Link
              to="/register"
              onClick={() => changeSelectedAccountType("corporate")}
            >
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                5-10 {t('employees')}
              </button>
            </Link>
            <a href="mailto:info@mdhub.com?subject=Corporate%20Inquiry%20-%2010%2B%20Employees">
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                10-50 {t('employees')}
              </button>
            </a>
            <a href="mailto:info@mdhub.com?subject=Corporate%20Inquiry%20-%2010%2B%20Employees">
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                51+ {t('employees-0')}
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 flex flex-col items-center px-4">
        <h2 className="text-4xl max-w-[680px] pb-8 text-center">
          {t('the-ultimate-benefits-solution-that-your-teams-will-actually-use-and-love')}
        </h2>
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center gap-y-4 justify-between text-center font-main">
          <article className="max-w-[280px] flex flex-col items-center">
            <img src={CorporateBenefitsIcon01} alt="Corporate Benefits" />
            <h2 className="text-2xl max-w-[250px]">{t('whole-person-care-anytime-anywhere')}</h2>
            <p className="font-body pt-2 pb-4">
              {t('support-every-person-on-your-team-with-access-to-quality-healthcare-available-24-7-like-virtual-appointments-and-prescription-delivery')}
            </p> 
          </article>
          <article className="max-w-[280px] flex flex-col items-center">
            <img src={CorporateBenefitsIcon02} alt="Corporate Benefits" />
            <h2 className="pt-2 text-2xl max-w-[250px]">{t('family-and-pediatric-care')}</h2>
            <p className="font-body pt-8 pb-4">
              {t('with-mdhub-corporate-plans-your-employees-family-and-children-can-receive-healthcare-too-designed-specifically-for-busy-families-your-employees-families-can-get-care-fast')}
            </p>
          </article>
          <article className="max-w-[280px] flex flex-col items-center">
            <img src={CorporateBenefitsIcon03} alt="Corporate Benefits" />
            <h2 className="text-2xl max-w-[250px] pt-3 pb-2">{t('increased-roi-and-employee-satisfaction')}</h2>
            <p className="font-body pb-4">
              {t('your-corporate-membership-is-tax-deductible-but-it-also-means-less-out-of-pocket-expenses-for-your-people-plus-you-can-feel-good-knowing-theyre-well-taken-care-of')}
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-[1130px] mx-auto py-20 space-y-16 px-4">
        <div className="space-y-6 text-center">
          <h2 className="text-dark text-4xl pb-4">
            "{t('mental-well-being-coverage-has-provided-us-with-the-tools-to-make-a-difference-in-the-lives-of-our-employees-and-each-other')}”
          </h2>
          <h3 className="text-xl">
            {t('we-cover-some-of-canadas-finest')}
          </h3>
          <div className="flex justify-around lg:justify-center flex-wrap gap-y-7 items-center gap-x-16">
            <img className="max-w-[149px]" src={PartnerCompany01} alt="Air Canada" />
            <img className="max-w-[156px]" src={PartnerCompany02} alt="Sotherbys" />
            <img className="max-w-[147px]" src={PartnerCompany03} alt="Air BNB" />
            <img className="max-w-[153px]" src={PartnerCompany04} alt="Four Seasons" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default CorporateOverview