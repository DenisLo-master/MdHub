import React from 'react'
import {
  HomeBrandsSection,
  HomeExploreSolutionsSection,
  HomeHeadspaceSection,
  HomeHeroSection,
  HomeHowItWorksSection,
  HomeMembershipBenefitsSection,
  HomeMembershipCostCtaSection
} from '../../sections'

const Home = () => {
  return (
    <div className="bg-white">
      <HomeHeroSection />
      <HomeExploreSolutionsSection />
      <HomeMembershipBenefitsSection />
      <HomeHeadspaceSection />
      <HomeHowItWorksSection />
      <HomeMembershipCostCtaSection />
      <HomeBrandsSection />
    </div>
  )
}

export default Home