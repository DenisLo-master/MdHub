import React from 'react'
import {
  HomeExploreSolutionsSection,
  HomeHeadspaceSection,
  HomeHeroSection,
  HomeHowItWorksSection,
  HomeMembershipBenefitsSection,
  HomeMembershipCostCtaSection,
  HomeUserSatisfactionSection
} from '../../sections'

const Home = () => {
  return (
    <div className="bg-white">
      <HomeHeroSection />
      <HomeUserSatisfactionSection />
      {/* <HomeExploreSolutionsSection /> */}
      <HomeMembershipBenefitsSection />
      <HomeHowItWorksSection />
      <HomeMembershipCostCtaSection />
      <HomeUserSatisfactionSection />
    </div>
  )
}

export default Home