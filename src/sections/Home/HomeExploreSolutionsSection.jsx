import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import RotatingEllipse from '../../components/RotatingEllipse'
import { MentalHealthBanner, NursingAndHomecareBanner, OnlinePharmacyBanner, VirtualDoctorBanner } from '../../assets'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomeExploreSolutionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()
  return (
    <section className="w-full flex flex-col md:flex-row md:items-start pt-32 pb-20">
      <article className="hidden flex-1 relative rotating-ellipse-section lg:flex justify-center">
        <RotatingEllipse />
      </article>
      <article className="w-full h-auto lg:h-[650px] max-w-[700px] 2xl:max-w-[800px] relative font-main bg-gray-100 overflow-x-hidden">
        <div className="absolute top-[280px] 2xl:top-[330px] z-10 right-[170px] lg:right-[330px] 2xl:right-[390px] flex gap-x-1">
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
        <div className="absolute z-10 left-4 top-36 2xl:top-44">
          <button
            disabled={currentSlide < 1}
            onClick={() => setCurrentSlide(currentSlide - 1)}
          >
            <BsFillArrowLeftCircleFill className="text-white text-3xl" />
          </button>
        </div>
        <div className="absolute z-10 right-4 top-36 2xl:top-44">
          <button
            disabled={currentSlide > 3}
            onClick={() => setCurrentSlide(currentSlide + 1)}
          >
            <BsFillArrowRightCircleFill className="text-white text-3xl" />
          </button>
        </div>
        <section
          className={`w-full flex transform transition-transform duration-300 ease-in-out ${currentSlide === 0 && "-translate-x-0"} ${currentSlide === 1 && "-translate-x-[413px] lg:-translate-x-[700px] 2xl:-translate-x-[800px]"} ${currentSlide === 2 && "-translate-x-[826px] lg:-translate-x-[1400px] 2xl:-translate-x-[1600px]"} ${currentSlide === 3 && "-translate-x-[1239px] lg:-translate-x-[2100px] 2xl:-translate-x-[2400px]"} ${currentSlide === 4 && "-translate-x-[1652px] lg:-translate-x-[2800px] 2xl:-translate-x-[3200px]"}`}
        >

          <div className='min-w-[413px] lg:min-w-[700px] 2xl:min-w-[800px]'>
            <div className="bg-virtualDoctor h-[304px] 2xl:h-[370px] p-10 pb-20 pr-0 overflow-hidden flex items-end justify-center lg:justify-start relative">
              <h2 className="text-white text-[80px] 2xl:text-8xl leading-[70px]">{t('virtual')}<br /> {t('doctor')}</h2>
              <img className="hidden lg:block absolute top-0 right-0 w-full max-w-[270px] 2xl:max-w-[320px]" src={VirtualDoctorBanner} alt="Virtual Doctor Banner" />
            </div>
            <div className="p-6 font-body w-full lg:h-[300px] max-w-[471px] 2xl:max-w-[530px] flex flex-col justify-between">
              <div className="w-full space-y-3 text-lg 2xl:text-xl">
                <p>
                  {t('Treatment and diagnosis for 70% of medical issues can be done virtually.')}
                </p>
                <p>
                  {t('connect-with-a-virtual-doctor-in-minutes-24-7-or-book-an-appointment-with-a-specialist-no-referral-needed')}
                </p>
              </div>
              <Link className="block pt-4" to="/services">
                <button
                  type="button"
                  className={`text-lg 2xl:text-2xl rounded-full w-48 2xl:w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
                >
                  {t('Learn More')}
                </button>
              </Link>
            </div>
          </div>

          <div className={`min-w-[413px] lg:min-w-[700px] 2xl:min-w-[800px]`}>
            <div className="bg-mentalHealth px-10 h-[304px] 2xl:h-[370px] flex justify-center items-center gap-x-6 2xl:gap-x-16 2xl:justify-center overflow-hidden">
              <h2 className="text-white text-[80px] 2xl:text-8xl leading-[70px]">{t('mental')}<br /> {t('health')}</h2>
              <img className="hidden lg:block w-full max-w-[310px]" src={MentalHealthBanner} alt="Mental Health Banner" />
            </div>
            <div className="p-6 pb-8 w-full lg:h-[300px] max-w-[471px] 2xl:max-w-[530px] font-body flex flex-col justify-between">
              <p className="text-lg 2xl:text-xl">
                {t("In today's faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.")}
              </p>
              <Link className="block pt-4" to="/services/mental-health">
                <button
                  type="button"
                  className={`text-lg 2xl:text-2xl rounded-full w-48 2xl:w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
                >
                  {t('Learn More')}
                </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[413px] lg:min-w-[700px] 2xl:min-w-[800px]'>
            <div className="relative bg-onlinePharmacy h-[304px] 2xl:h-[370px] p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[66px] lg:text-[80px] 2xl:text-8xl leading-[70px]">{t('online')} <br /> {t('pharmacy')} </h2>
              <img className="hidden lg:block absolute top-10 2xl:top-20 right-0 w-full max-w-[270px] 2xl:max-w-[320px]" src={OnlinePharmacyBanner} alt="Online Pharmacy Banner" />
            </div>
            <div className="p-6 pb-8 w-full lg:h-[300px] max-w-[471px] 2xl:max-w-[530px] flex flex-col justify-between">
              <div className="space-y-3 text-lg 2xl:text-xl font-body">
                <p>
                  {t('Stop wasting time chasing down refills or waiting in line. Easily access our online pharmacy to get prescriptions filled or renewed and delivered right to your door.')}
                </p>
                <p>
                  <strong>
                    {t('Your pharmacist is just a text away.')}
                  </strong>
                </p>
              </div>
              <Link className="block pt-4" to="/services/online-pharmacy">
                <button
                  type="button"
                  className={`text-lg 2xl:text-2xl rounded-full w-48 2xl:w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
                >
                  {t('Learn More')}
                </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[413px] lg:min-w-[700px] 2xl:min-w-[800px]'>
            <div className="relative bg-diagnostics h-[304px] 2xl:h-[370px] diagnostics-bg p-10 pb-20 pr-0 overflow-hidden flex items-end">
              <h2 className="text-white text-[70px] lg:text-[80px] 2xl:text-8xl leading-[70px]">{t('diagnostics')}</h2>
            </div>
            <div className="p-6 pb-8 w-full lg:h-[300px] max-w-[471px] 2xl:max-w-[530px] flex flex-col justify-between">
              <div className="space-y-3 text-lg 2xl:text-xl font-body">
                <p>
                  {t('Safe, fast and professional testing on your schedule in the comfort and privacy of your own home or office. Avoid the wait at hospitals and clinics.')}
                </p>
                <p>
                  {t('Our certified partner labs can quickly process over 300 different screenings and assays in order to provide a comprehensive health assessment.')}
                </p>
              </div>
              <Link className="block pt-4" to="/services/diagnostics">
                <button
                  type="button"
                  className={`text-lg 2xl:text-2xl rounded-full w-48 2xl:w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
                >
                  {t('Learn More')}
                </button>
              </Link>
            </div>
          </div>

          <div className='min-w-[413px] lg:min-w-[700px] 2xl:min-w-[800px]'>
            <div className="relative bg-nursingHomecare h-[304px] 2xl:h-[370px] p-10 pb-20 pr-0 overflow-hidden flex items-end justify-center lg:justify-start">
              <h2 className="pr-4 text-white text-[48px] lg:text-[80px] 2xl:text-8xl leading-[70px]">{t('nursing &')} <br /> {t('homecare')}</h2>
              <img className="hidden lg:block absolute top-40 right-0 w-full max-w-[190px] 2xl:max-w-[260px]" src={NursingAndHomecareBanner} alt="Nursing and Homecare Banner" />
            </div>
            <div className="p-6 pb-8 w-full lg:h-[300px] max-w-[471px] 2xl:max-w-[530px] flex flex-col justify-between">
              <div className="space-y-3 text-lg 2xl:text-xl font-body">
                <p>
                  {t('Our professional nurses will come directly to you, and our team of homecare givers will be there for you when you need them. They offer compassionate care for seniors, individuals requiring post-operative care, and people with disabilities. Whether you need medical services or homecare, we can assist you with most of your needs.')}
                </p>
              </div>
              <Link className="block pt-4" to="/services/nursing-homecare">
                <button
                  type="button"
                  className={`text-lg 2xl:text-2xl rounded-full w-48 2xl:w-56 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
                >
                  {t('Learn More')}
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