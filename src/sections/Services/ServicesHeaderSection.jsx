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
import { useTranslation } from 'react-i18next'


const ServicesHeaderSection = () => {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <section className="mb-10">
      <h2 className="font-main py-10 text-4xl text-center">{t('Services')}</h2>
      <div className="w-full max-w-[1170px] mx-auto rounded-b-full lg:rounded-full shadow-xl flex flex-col lg:flex-row justify-center items-center pb-24 lg:pb-3 py-3 gap-x-6 text-[#3F3F3F] font-main">
        <Link to="/services">
          <ServicesCard title={t('virtual-doctor')} bgPrimary={location.pathname === "/services"}>
            <VirtualDoctorIcon className={`${location.pathname === "/services" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/mental-health">
          <ServicesCard title={t('mental health')} bgPrimary={location.pathname === "/services/mental-health"}>
            <MentalHealthIcon className={`${location.pathname === "/services/mental-health" ? "text-white" : "text-primary"}`} />
          </ServicesCard>
        </Link>

        <Link to="/services/online-pharmacy">
          <ServicesCard
            title={t('online-pharmacy')}
            bgPrimary={location.pathname === "/services/online-pharmacy"}
          >
            <OnlinePharmacyIcon
              className={`${location.pathname === "/services/online-pharmacy" ? "text-white" : "text-primary"}`}
            />
          </ServicesCard>
        </Link>

        <Link to="/services/diagnostics">
          <ServicesCard title={t('diagnostics')} bgPrimary={location.pathname === "/services/diagnostics"}>
            {
              location.pathname === "/services/diagnostics" ?
                <StethoscopeIconWhite /> : <StethoscopeIcon />
            }
        </ServicesCard>
        </Link>

        <Link to="/services/nursing-homecare">
          <ServicesCard title={t('nursing-and-homecare')} bgPrimary={location.pathname === "/services/nursing-homecare"}>
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