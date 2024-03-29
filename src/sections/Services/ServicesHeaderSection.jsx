import React from 'react'
import ServicesCard from '../../components/ServicesCard'
import { Link, useLocation } from 'react-router-dom'
import {
  OnlinePharmacyIcon,
  VirtualDoctorIcon,
  StethoscopeIcon,
  NursingHomecareIcon,
  MentalHealthIcon,
  StethoscopeIconBlack
} from '../../assets'
import { useTranslation } from 'react-i18next'


const ServicesHeaderSection = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  return (
    <section className="mb-10 md:mt-28">
      <h2 className="font-main py-10 text-4xl text-center">{t('Services')}</h2>
      <div className={`w-full max-w-[1170px] mx-auto rounded-b-full lg:rounded-full shadow-xl flex flex-col lg:flex-row justify-center ${i18n.language === "fr" && "lg:justify-between lg:px-6"} items-center pb-24 lg:pb-3 py-3 gap-x-6 text-[#3F3F3F] font-main`}>
        <Link to="/services">
          <ServicesCard bgColor="virtualDoctor" title={t('virtual-doctor')} bgPrimary={location.pathname === "/services"}>
            <VirtualDoctorIcon className="text-black" />
          </ServicesCard>
        </Link>

        <Link to="/services/mental-health">
          <ServicesCard bgColor="mentalHealth" title={t('mental health')} bgPrimary={location.pathname === "/services/mental-health"}>
            <MentalHealthIcon className="text-black" />
          </ServicesCard>
        </Link>

        <Link to="/services/online-pharmacy">
          <ServicesCard bgColor="onlinePharmacy"
            title={t('online-pharmacy')}
            bgPrimary={location.pathname === "/services/online-pharmacy"}
          >
            <OnlinePharmacyIcon
              className="text-black"
            />
          </ServicesCard>
        </Link>

        <Link to="/services/diagnostics">
          <ServicesCard bgColor="diagnostics" title={t('diagnostics')} bgPrimary={location.pathname === "/services/diagnostics"}>
            <StethoscopeIconBlack />
          </ServicesCard>
        </Link>

        <Link to="/services/nursing-homecare">
          <ServicesCard bgColor="nursingHomecare" title={t('nursing-and-homecare')} bgPrimary={location.pathname === "/services/nursing-homecare"}>
            <NursingHomecareIcon
              className="text-black"
            />
          </ServicesCard>
        </Link>
      </div>
    </section>
  )
}

export default ServicesHeaderSection