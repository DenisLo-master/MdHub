import React from 'react'
import { PricingSlider, OnDemandCTA, PricingHeader, HeadspaceSection } from '../../sections'

const Pricing = () => {
  return (
    <section className="font-main">
      <PricingHeader />
      <PricingSlider />
      <OnDemandCTA />
      <HeadspaceSection />
    </section>
  )
}

export default Pricing