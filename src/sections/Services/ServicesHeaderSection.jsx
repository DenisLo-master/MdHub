import React from 'react'
import ServicesCard from '../../components/ServicesCard'
import { Link, useLocation } from 'react-router-dom'
import {
  TestingIcon,
  DoctorIcon,
  MedicineIcon,
  NursingIcon,
  PharmacyIcon
} from '../../assets'


const ServicesHeaderSection = () => {
  const location = useLocation()
  return (
    <section className="bg-[#F9F9F9]">
      <h2 className="font-main py-10 text-4xl text-center">Services</h2>
      <div className="flex justify-center items-center py-10 gap-x-6 text-white font-main">
        <Link to="/services">
          <ServicesCard title={"virus testing"} bgPrimary={location.pathname === "/services"}>
            <TestingIcon className={`${location.pathname === "/services" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/virtual-doctor">
          <ServicesCard title={"virtual doctor"} bgPrimary={location.pathname === "/services/virtual-doctor"}>
            <DoctorIcon className={`${location.pathname === "/services/virtual-doctor" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/medical-laboratory">
          <ServicesCard title={"medical laboratory"} bgPrimary={location.pathname === "/services/medical-laboratory"}>
            <MedicineIcon
              className={`${location.pathname === "/services/medical-laboratory" ? "text-white" : "text-primary"}`}
            />
        </ServicesCard>
        </Link>

        <Link to="/services/nursing-homecare">
          <ServicesCard title={"nursing & homecare"} bgPrimary={location.pathname === "/services/nursing-homecare"}>
            <NursingIcon
             className={`${location.pathname === "/services/nursing-homecare" ? "text-white" : "text-primary"}`}
            />
          </ServicesCard>
        </Link>

        <Link to="/services/online-pharmacy">
          <ServicesCard 
            title={"online pharmacy & delivery"} 
            bgPrimary={location.pathname === "/services/online-pharmacy"} 
            wideCaption
          >
            <PharmacyIcon
             className={`${location.pathname === "/services/online-pharmacy" ? "text-white" : "text-primary"}`}
            />
          </ServicesCard>
        </Link>
      </div>
    </section>
  )
}

export default ServicesHeaderSection