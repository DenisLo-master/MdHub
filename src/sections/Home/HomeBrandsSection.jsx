import React from 'react'
import { Shopify, Aloan, Bombardier, Fasken, AirCanada } from '../../assets'

const HomeBrandsSection = () => {
  return (
    <section className="w-full p-12 lg:p-24 font-main text-center text-[2.5rem]">
      <h2 className="pb-12">We take care of outstanding corporations and their people.</h2>
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-6 md:space-x-10">
        <img className="w-32" src={Shopify} alt="Shopify" />
        <img className="w-24" src={Aloan} alt="Aloan" />
        <img className="w-32" src={Bombardier} alt="Bombardier" />
        <img className="w-32" src={Fasken} alt="Fasken" />
        <img className="w-40 md:w-32" src={AirCanada} alt="Air Canada" />
      </div>
    </section>
  )
}

export default HomeBrandsSection