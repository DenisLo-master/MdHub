import React from 'react'
import HomepageSlider from '../../components/HomepageSlider'
import {
  HomeExploreSolutionsSection,
  HomeHeadspaceSection,
  HomeHeroSection,
  HomeHowItWorksSection,
  HomeMembershipBenefitsSection,
  HomeMembershipCostCtaSection,
  HomeUserSatisfactionSection,
  HomeMedicalConditionsSection
} from '../../sections'

const Home = () => {
  return (
    <div className="bg-white">
      <HomeHeroSection />
      <HomeUserSatisfactionSection />
      <HomepageSlider />
      {/* <HomeExploreSolutionsSection /> */}
      <HomeMembershipBenefitsSection />
      <HomeMedicalConditionsSection />
      {/* <HomeHowItWorksSection /> */}
      {/* <HomeMembershipCostCtaSection /> */}
      {/* <HomeUserSatisfactionSection /> */}
    </div>
  )
}

export default Home