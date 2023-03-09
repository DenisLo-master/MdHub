import React from 'react'
import { PricingSlider, OnDemandCTA, PricingHeader, HeadspaceSection, MembershipBenefits, Testimonials } from '../../sections'

const Pricing = () => {
  return (
    <section className="font-main">
      <PricingHeader />
      <PricingSlider />
      <OnDemandCTA />
      <HeadspaceSection />
      <MembershipBenefits />
      <Testimonials />
    </section>
  )
}

export default Pricing