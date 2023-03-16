import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomeMembershipCostCtaSection = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-gradient-primary relative z-10 overflow-hidden text-white font-main p-12 lg:p-32">
      <div className="relative z-10 justify-center flex flex-col md:flex-row md:space-x-20 gap-y-6">
        <h2 className="text-3xl text-center md:text-left md:text-5xl font-medium max-w-[600px]">
          {t('All of this, for as little as $29.99 a month.')}
        </h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link to="register" className="text-lg transition-opacity ease-in duration-200 hover:opacity-80 md:text-xl rounded-full w-64 py-2 border flex justify-center items-center space-x-2  border-transparent shadow-dark text-primary bg-white">
            <span>{t('Membership Sign Up')}</span> <FiArrowUpRight className="text-lg" />
          </Link>
          <Link to="/for-corporate" className="text-lg transition-opacity ease-in duration-200 hover:opacity-80 md:text-xl rounded-full w-52 py-2  border flex justify-center items-center space-x-2  border-white text-white bg-gradient-primary-dark ring-1 shadow-white ring-white">
            <span>{t('For Employees')}</span> <FiArrowUpRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeMembershipCostCtaSection