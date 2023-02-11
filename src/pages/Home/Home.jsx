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
  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) navigate("/dashboard")
  }, [])
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