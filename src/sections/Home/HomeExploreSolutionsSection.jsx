import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {
  MentalHealthBanner,
  VirtualDoctorBanner,
  OnlinePharmacyBanner,
  NursingAndHomecareBanner
} from '../../assets'
import RotatingEllipse from '../../components/RotatingEllipse'

const HomeExploreSolutionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <section className="flex flex-col md:flex-row pb-20 overflow-y-hidden">
      <article className="flex-1 relative overflow-y-hidden h-[650px] rotating-ellipse-section flex justify-center">
        <RotatingEllipse />
      </article>
      <article className="w-full max-w-[700px] relative font-main bg-gray-100 overflow-x-hidden">
        <div className="absolute top-[280px] z-10 right-[330px] flex gap-x-1">
          <article
            onClick={() => setCurrentSlide(0)}
            className={` rounded-full w-2 h-2 ${currentSlide === 0 ? "bg-white" : "bg-gray-300"}`}
          />
          <article
            className={`bg-white rounded-full w-2 h-2 ${currentSlide === 1 ? "bg-white" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(1)}
          />
          <article
            className={`bg-white rounded-full w-2 h-2 ${currentSlide === 2 ? "bg-white" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(2)}
          />
          <article
            className={`bg-white rounded-full w-2 h-2 ${currentSlide === 3 ? "bg-white" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(3)}
          />
          <article
            className={`bg-white rounded-full w-2 h-2 ${currentSlide === 4 ? "bg-white" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(4)}
          />
        </div>
        <section
          className={`w-full flex transform transition-transform duration-300 ease-in-out ${currentSlide === 0 && "-translate-x-0"} ${currentSlide === 1 && "-translate-x-[700px]"} ${currentSlide === 2 && "-translate-x-[1400px]"} ${currentSlide === 3 && "-translate-x-[2100px]"} ${currentSlide === 4 && "-translate-x-[2800px]"}`}
        >
          <div className={`min-w-[700px]`}>
            <div className="bg-[#F6BA21] px-10 h-[304px] flex items-center gap-x-6 overflow-hidden">
              <h2 className="text-white text-[80px] leading-[70px]">mental<br /> health</h2>
              <img className="w-full max-w-[310px]" src={MentalHealthBanner} alt="Mental Health Banner" />
            </div>
            <div className="p-6 h-[320px] w-full max-w-[471px] font-body flex flex-col justify-between">
              <p>
                In today’s faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.
              </p>
              <Link to="/services">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>



          <div className='min-w-[700px]'>
            <div className="relative bg-[#A293FF] h-[304px] p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[80px] leading-[70px]">virtual<br /> doctor</h2>
              <img className="absolute top-0 right-0 w-full max-w-[270px]" src={VirtualDoctorBanner} alt="Virtual Doctor Banner" />
            </div>
            <div className="p-6 h-[320px] w-full max-w-[471px] font-body flex flex-col justify-between">
              <div className="space-y-3">
                <p>
                  Treatment and diagnosis for 70% of medical issues can be done virtually.
                </p>
                <p>
                  Connect with a virtual doctor in minutes, 24/7. Or, book an appointment with a specialist – no referral needed.
                </p>
              </div>
              <Link to="/services/virtual-doctor">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[700px]'>
            <div className="relative bg-[#90C387] h-[304px] p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[80px] leading-[70px]">online <br /> pharamcy</h2>
              <img className="absolute top-10 right-0 w-full max-w-[270px]" src={OnlinePharmacyBanner} alt="Online Pharmacy Banner" />
            </div>
            <div className="p-6 h-[320px] w-full max-w-[471px] font-body flex flex-col justify-between">
              <div className="space-y-3">
                <p>
                  Stop wasting time chasing down refills or waiting in line. Easily access our online pharmacy to get prescriptions filled or renewed and delivered right to your door.
                </p>
                <p>
                  <strong>
                    Your pharmacist is just a text away.
                  </strong>
                </p>
              </div>
              <Link to="/services/online-pharmacy">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[700px]'>
            <div className="relative bg-[#90C387] h-[304px] diagnostics-bg move-left p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[80px] leading-[70px]">diagnostics</h2>
            </div>
            <div className="p-6 h-[320px] w-full max-w-[471px] font-body flex flex-col justify-between">
              <div className="space-y-3">
                <p>
                  Safe, fast and professional testing on your schedule in the comfort and privacy of your own home or office. Avoid the wait at hospitals and clinics.
                </p>
                <p>
                  Our certified partner labs can quickly process over 300 different screenings and assays in order to provide a comprehensive health assessment.
                </p>
              </div>
              <Link to="/services/diagnostics">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[700px]'>
            <div className="relative bg-[#F78839] h-[304px] p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[80px] leading-[70px]">nursing & <br /> homecare</h2>
              <img className="absolute top-40 right-0 w-full max-w-[190px]" src={NursingAndHomecareBanner} alt="Nursing and Homecare Banner" />
            </div>
            <div className="p-6 h-[320px] w-full max-w-[471px] font-body flex flex-col justify-between">
              <div className="space-y-3">
                <p>
                  Our professional nurses will come directly to you, and our team of homecare givers will be there for you when you need them. They offer compassionate care for seniors, individuals requiring post-operative care, and people with disabilities. Whether you need medical services or homecare, we can assist you with most of your needs.
                </p>
              </div>
              <Link to="/services/nursing-homecare">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </section>
  )
}

export default HomeExploreSolutionsSection