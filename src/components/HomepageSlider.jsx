import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderMentalHealth, SliderVirtualCare, RedirectIcon, SliderOnlinePharmacy, SliderNursingHomecare, SliderDiagnostics } from '../assets';

const HomepageSlider = () => {
  const { t, i18n } = useTranslation()

  const CustomArrow = ({ direction, onClick }) => (
    <button className={`arrow arrow-${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <BsFillArrowLeftCircleFill className="text-blue-400 z-10  slick-icon-arrow" />,
    nextArrow: <BsFillArrowRightCircleFill className="text-blue-400 z-10 slick-icon-arrow" />,
  };

  const mobileSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  const renderCustomDots = (onClickHandler, isSelected, index, label) => {
    const { slidesToShow } = carouselState;
    const totalSlides = carouselState.totalItems;
    const customDots = [];
    for (let i = 0; i < totalSlides; i += slidesToShow) {
      const isActive = currentSlide === i;
      const dotClasses = `custom-dot rounded-full w-2 h-2 ${isActive ? 'bg-primary' : 'bg-white'}`;
      customDots.push(
        <li className={`custom-dot rounded-full w-2 h-2 ${isSelected ? 'bg-primary' : 'bg-white'}`} key={i} onClick={onClickHandler} value={index}>
          <span></span>
        </li>
      );
    }
    return <ul className="custom-dots">{customDots}</ul>;
  };
  return (
    <section>
      <div className="hidden lg:block md:max-w-[1400px] 3xl:max-w-[1580px] mx-auto font-main h-[612px] px-24 text-primary">
        <h2 className="text-7xl font-main text-center text-dark pb-10">{t('essential-medical-services')}</h2>
        <Slider {...settings}>
          <article className="flex justify-center">
            <Link className="block" to="/services/mental-health">
              <div className="bg-[#ECB118] text-white p-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/mental-health">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderMentalHealth />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('mental-health')}</h2>
                <p className="font-body pb-4">
                  {t("In today's faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.")}
                </p>
              </div>
            </Link>
          </article>
          <article className="flex justify-center">
            <Link className="block" to="/services">
              <div className="bg-[#A293FF] text-white p-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderVirtualCare />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('virtual-care')}</h2>
                <p className="font-body pb-4">
                  {t('connect-with-a-virtual-doctor-in-minutes-24-7-or-book-an-appointment-with-a-specialist-no-referral-needed')}
                </p>
              </div>
            </Link>
          </article>
          <article className="flex justify-center">
            <Link className="block" to="/services/online-pharmacy">
              <div className="bg-[#90C387] text-white p-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px]  flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/online-pharmacy">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderOnlinePharmacy />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('pharmacy-0')}</h2>
                <p className="font-body pb-4">
                  {
                    t('get-prescriptions-filled-or-renewed-using-our-affiliate-online-pharmacy-and-delivered-right-to-your-door')
                  }
                </p>
              </div>
            </Link>
          </article>
          <article className="flex justify-center">
            <Link to="/services/nursing-homecare">
              <div className="bg-[#F78839] text-white p-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/nursing-homecare">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderNursingHomecare />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[20px]"} pb-4`}>
                  {t('nursing-and-homecare')}
                </h2>
                <p className="font-body pb-4">
                  {t('get-professional-care-from-our-team-of-nurses-and-homecare-helpers-that-come-directly-to-you')}
                </p>
              </div>
            </Link>
          </article>
          <article className="flex justify-center">
            <Link to="/services/diagnostics">
              <div className="bg-diagnostics text-white p-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/diagnostics">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <img src={SliderDiagnostics} alt="Diagnostics" />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[20px]"} pb-4`}>
                  {t('lab-testing-and-diagnostics-0')}
                </h2>
                <p className={`font-body pb-4 ${i18n.language === "en" ? "text-base" : "text-[16.5px]"}`}>
                  {t('get-safe-and-professional-lab-testing-from-the-comfort-of-your-home-or-office')}
                </p>
              </div>
            </Link>
          </article>
        </Slider>
      </div>

      <div className="block lg:hidden font-main h-[400px]">
        <Slider {...mobileSliderSettings}>
          <article>
            <Link className="block" to="/services/mental-health">
              <div className="bg-[#ECB118] text-white p-6 w-[300px] h-[400px] rounded-[8px] mx-auto flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/mental-health">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderMentalHealth />
                </div>
                <h2 className="text-3xl pb-4">Mental health</h2>
                <p className="font-body pb-4">
                  Take control of your mental well-being. Easily get mental health support from physicians and therapists.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <Link className="block" to="/services">
              <div className="bg-[#A293FF] text-white p-6 w-[300px] h-[400px] 3xl:w-[330px] rounded-[8px] mx-auto flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderVirtualCare />
                </div>
                <h2 className="text-3xl pb-4">Virtual care</h2>
                <p className="font-body pb-4">
                  Connect with a virtual doctor 24/7 in minutes, or book an appointment with a specialist.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <Link className="block" to="/services/online-pharmacy">
              <div className="bg-[#90C387] text-white p-6 w-[300px] h-[400px] 3xl:w-[330px] mx-auto rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/online-pharmacy">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderOnlinePharmacy />
                </div>
                <h2 className="text-3xl pb-4">Online pharmacy</h2>
                <p className="font-body pb-4">
                  Get prescriptions filled or renewed using our affiliate online pharmacy and delivered right to your door.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <Link to="/services/nursing-homecare">
              <div className="bg-[#F78839] text-white p-6 w-[300px] h-[400px] mx-auto 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/nursing-homecare">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderNursingHomecare />
                </div>
                <h2 className="text-3xl pb-4">Nursing & homecare</h2>
                <p className="font-body pb-4">
                  Get professional care from our team of nurses and homecare helpers that come directly to you.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <Link to="/services/diagnostics">
              <div className="bg-diagnostics text-white p-6 w-[300px] h-[400px] mx-auto 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/diagnostics">
                    <img src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <img src={SliderDiagnostics} alt="Diagnostics" />
                </div>
                <h2 className="text-3xl pb-4">Diagnostics</h2>
                <p className="font-body pb-4">
                  Get safe and professional lab testing from the comfort of your home or office.
                </p>
              </div>
            </Link>
          </article>
        </Slider>
      </div>
    </section>
  )
}

export default HomepageSlider