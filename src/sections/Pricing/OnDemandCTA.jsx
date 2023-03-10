import React from 'react'
import { Link } from 'react-router-dom'

const OnDemandCTA = () => {
  return (
    <section className="bg-gradient-primary text-white flex flex-col lg:flex-row text-center gap-y-7 justify-center items-center py-12 gap-x-6">
      <h2 className="text-3xl max-w-[200px] leading-6">On demand one time access</h2>
      <h2 className="text-5xl">$89.99</h2>
      <div>
        <Link className="block" to="/register">
          <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
            Sign Up Today
          </button>
        </Link>
      </div>
    </section>
  )
}

export default OnDemandCTA