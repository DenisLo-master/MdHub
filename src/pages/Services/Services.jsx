import React from 'react'
import { Outlet } from 'react-router-dom'
import ServicesHeaderSection from '../../sections/Services/ServicesHeaderSection'

const Services = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <ServicesHeaderSection />
      <Outlet />
    </div>
  )
}

export default Services