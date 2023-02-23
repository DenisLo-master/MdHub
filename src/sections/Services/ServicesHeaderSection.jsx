import React from 'react'
import ServicesCard from '../../components/ServicesCard'
import { Link, useLocation } from 'react-router-dom'
import {
  OnlinePharmacyIcon,
  VirtualDoctorIcon,
  StethoscopeIcon,
  NursingHomecareIcon,
  MentalHealthIcon,
  StethoscopeIconWhite
} from '../../assets'


const ServicesHeaderSection = () => {
  const location = useLocation()
  return (
    <section className="bg-[#F9F9F9] mb-10">
      <h2 className="font-main py-10 text-4xl text-center">Services</h2>
      <div className="w-full max-w-[1100px] mx-auto rounded-full shadow-xl flex justify-center items-center py-3 gap-x-6 text-[#3F3F3F] font-main">
        <Link to="/services">
          <ServicesCard title={"mental health"} bgPrimary={location.pathname === "/services"}>
            <MentalHealthIcon className={`${location.pathname === "/services" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/virtual-doctor">
          <ServicesCard title={"virtual doctor"} bgPrimary={location.pathname === "/services/virtual-doctor"}>
            <VirtualDoctorIcon className={`${location.pathname === "/services/virtual-doctor" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/online-pharmacy">
          <ServicesCard
            title={"online pharmacy"}
            bgPrimary={location.pathname === "/services/online-pharmacy"}
          >
            <OnlinePharmacyIcon
              className={`${location.pathname === "/services/online-pharmacy" ? "text-white" : "text-primary"}`}
            />
          </ServicesCard>
        </Link>

        <Link to="/services/diagnostics">
          <ServicesCard title={"diagnostics"} bgPrimary={location.pathname === "/services/diagnostics"}>
            {
              location.pathname === "/services/diagnostics" ?
                <StethoscopeIconWhite /> : <StethoscopeIcon />
            }
        </ServicesCard>
        </Link>

        <Link to="/services/nursing-homecare">
          <ServicesCard title={"nursing & homecare"} bgPrimary={location.pathname === "/services/nursing-homecare"}>
            <NursingHomecareIcon
             className={`${location.pathname === "/services/nursing-homecare" ? "text-white" : "text-primary"}`}
            />
          </ServicesCard>
        </Link>
      </div>
    </section>
  )
}

export default ServicesHeaderSection