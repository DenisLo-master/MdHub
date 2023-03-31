import React, { useState, useEffect } from 'react'
import { PartnerCompany01, PartnerCompany02, PartnerCompany03, PartnerCompany04, ChevronRight } from '../../assets'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HomeUserSatisfactionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [increment, setIncrement] = useState(true)
  const { t } = useTranslation()


  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 2) {
        setIncrement(false);
      } else if (currentSlide === 0) {
        setIncrement(true);
      }

      // update currentSlide based on the value of increment
      const newSlide = increment ? currentSlide + 1 : currentSlide - 1;

      // ensure that newSlide is within the valid range of 0 to 2
      const boundedSlide = newSlide < 0 ? 0 : newSlide > 2 ? 2 : newSlide;

      setCurrentSlide(boundedSlide)
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, increment])


  return (
    <section className="py-16 font-main text-3xl">
      <h2 className="text-center pb-4 px-4">
        We're an employee benefit for companies nationwide.
      </h2>
      <div className="w-full max-w-4xl mx-auto text-center py-10 font-body text-base space-y-5">
        <section className="flex items-center justify-around flex-wrap gap-y-4 lg:justify-between">
          <img className="max-w-[149px]" src={PartnerCompany01} alt="Air Canada" />
          <img className="max-w-[156px]" src={PartnerCompany02} alt="Sotherbys" />
          <img className="max-w-[147px]" src={PartnerCompany03} alt="Air BNB" />
          <img className="max-w-[153px]" src={PartnerCompany04} alt="Four Seasons" />
        </section>
        <div className="flex justify-center">
          <Link to="/register" className="flex items-center font-main gap-x-2">
            <span className="text-lg">Learn more about MDHUB for business.</span>
            <ChevronRight className="text-primary w-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeUserSatisfactionSection
