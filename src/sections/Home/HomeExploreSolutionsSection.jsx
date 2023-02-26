import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {
  NeverWaitForDoctorAgainImage,
} from '../../assets'
import RotatingEllipse from '../../components/RotatingEllipse'

const HomeExploreSolutionsSection = () => {
  return (
    <section className="flex flex-col md:flex-row pb-20 overflow-y-hidden">
      <article className="flex-1 relative overflow-y-hidden rotating-ellipse-section flex justify-center">
        <RotatingEllipse />
      </article>
      <article className="flex-1 relative font-main bg-gray-100">
        <div>
          <img data-aos="fade-up" className="w-full h-96 md:h-auto object-cover" src={NeverWaitForDoctorAgainImage} alt="never wait for doctor again" />
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl absolute z-10 top-6 left-8"
          >
            Never wait for a <br /> doctor again.
          </h2>
        </div>"
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="p-10 flex flex-col items-center md:block font-body text-2xl"
        >
          <p
            className=" text-gray-700 w-full text-center md:text-left tracking-wide max-w-[440px] pb-24"
          >
            Spend more time with the people you love and less time in waiting rooms with MDHub.
          </p>
          <Link
            to="/services"
            className="font-main flex items-center space-x-2"
          >
            <span>Explore our 360 solutions.</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </article>
    </section>
  )
}

export default HomeExploreSolutionsSection