import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
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
      <HomeUserSatisfactionSection />
    </div>
  )
}

export default Home