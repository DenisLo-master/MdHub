import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import RotatingEllipse from '../../components/RotatingEllipse'
import { MentalHealthBanner, NursingAndHomecareBanner, OnlinePharmacyBanner, VirtualDoctorBanner } from '../../assets'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomeSlider from '../../components/HomeSlider'

const HomeExploreSolutionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()
  return (
    <section className="w-full flex flex-col md:flex-row md:items-start pt-32 pb-16">
      <article className="hidden flex-1 relative rotating-ellipse-section lg:flex justify-center pb-20">
        <RotatingEllipse />
      </article>
      <HomeSlider />
    </section>
  )
}

export default HomeExploreSolutionsSection