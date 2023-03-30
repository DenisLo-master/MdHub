import React from 'react'
import { PricingSlider, OnDemandCTA, PricingHeader, HeadspaceSection, MembershipBenefits, Testimonials } from '../../sections'

const Pricing = () => {
  return (
    <section className="font-main md:mt-[70px]">
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