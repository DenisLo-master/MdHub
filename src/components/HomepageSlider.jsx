import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderMentalHealth, SliderVirtualCare, RedirectIcon, SliderOnlinePharmacy, SliderNursingHomecare, SliderDiagnostics, StethoscopeIconWhite, StethoscopeDiagnostic } from '../assets';

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
    slidesToScroll: 1,
    prevArrow: <BsFillArrowLeftCircleFill className="text-blue-400 z-10  slick-icon-arrow-sm" />,
    nextArrow: <BsFillArrowRightCircleFill className="text-blue-400 z-10 slick-icon-arrow-sm" />,
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
    <section className="pb-6">
      <div className="font-main px-4 md:px-8 w-full max-w-[1350px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-main text-center text-dark pb-10">{t('one-membership-covers-all-your-medical-needs')}</h2>
        <div className="hidden w-full md:flex  flex-col md:flex-row flex-wrap gap-y-10 items-center justify-center max-[1260px]:gap-x-3 min-[1261px]:gap-x-8">
          <article className="w-full self-stretch min-w-[218px] max-w-[220px] mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <Link to="/services/mental-health" className="h-full bg-[#ECB118] text-white p-6  rounded-[8px] flex flex-col relative ">
              <div className="flex justify-end">
                <Link to="/services/mental-health">
                  <img src={RedirectIcon} alt="redirect" />
                </Link>
              </div>
              <div className={`${i18n.language === "en" ? "pt-12" : "pt-12"}`}>
                <div className="w-[79px] h-[80px] flex justify-center items-center mx-auto">
                  <SliderMentalHealth className="w-[71px] h-[67px]" />
                </div>
                <h2 className={`${i18n.language === "en" ? "text-3xl" : "text-[26px]"} font-semibold pt-9 pb-2`}>{t('mental-health')}</h2>
                <p className="font-body text-sm">
                  {t('easily-get-mental-health-support-from-physicians-and-therapists')}
                </p>
              </div>
            </Link>
          </article>
          <article className="w-full self-stretch min-w-[218px] max-w-[220px]  mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <Link to="/services" className={`bg-[#A293FF] h-full text-white p-6  rounded-[8px] flex flex-col justify-between relative ${i18n.language !== "en" && "pb-11"}`}>
              <div className="flex justify-end">
                <Link to="/services">
                  <img src={RedirectIcon} alt="redirect" />
                </Link>
              </div>
              <div className="pt-8">
                <div className="w-[79px] h-[80px] flex justify-center items-center mx-auto">
                  <SliderVirtualCare className="w-[54px] h-[74px]" />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} font-semibold pt-9 pb-2`}>
                  {t('virtual-care')}
                </h2>
                <p className="font-body text-sm">
                  {t('connect-with-a-virtual-doctor-24-7-in-minutes-or-book-an-appointment-with-a-specialist')}
                </p>
              </div>
            </Link>
          </article>
          <article className="w-full self-stretch min-w-[218px] max-w-[220px]  mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <Link to="/services/online-pharmacy" className="bg-[#90C387] h-full text-white p-6  rounded-[8px] flex flex-col justify-between relative ">
              <div className="flex justify-end">
                <Link to="/services/online-pharmacy">
                  <img src={RedirectIcon} alt="redirect" />
                </Link>
              </div>
              <div className="pt-8">
                <div className="w-[79px] h-[80px] flex justify-center items-center mx-auto">
                  <SliderOnlinePharmacy className="w-[55px] h-[76px]" />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} font-semibold pt-9 pb-2`}>
                  {t('pharmacy-0')}
                </h2>
                <p className="font-body text-sm">
                  {
                    t('get-prescriptions-filled-or-renewed-using-our-affiliate-online-pharmacy-and-delivered-right-to-your-door')
                  }
                </p>
              </div>
            </Link>
          </article>
          <article className="w-full self-stretch min-w-[218px] max-w-[220px]  mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <Link to="/services/diagnostics" className={`bg-diagnostics h-full text-white p-6  rounded-[8px] flex flex-col justify-between relative ${i18n.language !== "en" && "pb-11"}`}>
              <div className="flex justify-end">
                <Link to="/services/diagnostics">
                  <img src={RedirectIcon} alt="redirect" />
                </Link>
              </div>
              <div className={`${i18n.language === "en" ? "pt-8" : "pt-12"}`}>
                <div className="flex w-[79px] h-[80px] justify-center items-center mx-auto">
                  <StethoscopeIconWhite className="w-[73px] h-[80px]" />
                </div>
                <div>
                  <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"}  font-semibold pt-9 pb-2`}>
                    Diagnostics
                </h2>
                  <p className="font-body text-sm">
                    {t('get-safe-and-professional-lab-testing-from-the-comfort-of-your-home-or-office')}
                  </p>
                </div>
              </div>
            </Link>
          </article>
          <article className="w-full self-stretch min-w-[218px] max-w-[220px]  mx-auto hover:scale-105 transition-all ease-in-out duration-300">
            <Link to="/services/nursing-homecare" className="bg-[#F78839] h-full text-white p-6  rounded-[8px] flex flex-col justify-between relative ">
              <div className="flex justify-end">
                <Link to="/services/nursing-homecare">
                  <img src={RedirectIcon} alt="redirect" />
                </Link>
              </div>
              <div className="pt-8">
                <div className="md:relative w-[79px] h-[80px] flex justify-center items-center mx-auto">
                  <SliderNursingHomecare className="w-[59px] h-[76px]" />
                </div>
                <div>
                  <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} font-semibold pb-2`}>
                    {t('nursing-and-homecare')}
                  </h2>
                  <p className="font-body text-sm">
                    {t('get-professional-care-from-our-team-of-nurses-and-homecare-helpers-that-come-directly-to-you')}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* Mobile Slider */}
        <div className="slick-mobile block lg:hidden font-main">
        <Slider {...mobileSliderSettings}>
          <article className="text-center md:text-left">
            <Link className="block h-[488px]" to="/services/mental-health">
              <div className="bg-[#ECB118] h-full text-white p-4 w-[300px]  rounded-[8px] mx-auto flex flex-col justify-end relative">
                <div className="absolute top-4 right-4 w-full flex flex-row-reverse p-4">
                  <Link to="/services/mental-health">
                    <img className="w-8" src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pt-12 pb-20">
                  <SliderMentalHealth />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('mental-health')}</h2>
                <p className="font-body pb-4">
                  {t('easily-get-mental-health-support-from-physicians-and-therapists')}
                </p>
              </div>
            </Link>
          </article>
          <article className="text-center md:text-left">
            <Link className="block h-[488px]" to="/services">
              <div className="bg-[#A293FF] h-full text-white p-4 w-[300px]  3xl:w-[330px] rounded-[8px] mx-auto flex flex-col justify-end relative">
              <div className="absolute top-4 right-4 w-full flex flex-row-reverse p-4">
                  <Link to="/services">
                    <img className="w-8" src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderVirtualCare />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('virtual-care')}</h2>
                <p className="font-body pb-4">
                  {t('connect-with-a-virtual-doctor-24-7-in-minutes-or-book-an-appointment-with-a-specialist')}
                </p>
              </div>
            </Link>
          </article>
          <article className="text-center md:text-left">
            <Link className="block h-[488px]" to="/services/online-pharmacy">
              <div className="bg-[#90C387] h-full text-white p-6 w-[300px]  3xl:w-[330px] mx-auto rounded-[8px] flex flex-col justify-end relative">
              <div className="absolute top-4 right-4 w-full flex flex-row-reverse p-4">
                  <Link to="/services/online-pharmacy">
                    <img className="w-8" src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderOnlinePharmacy />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>{t('pharmacy-0')}</h2>
                <p className="font-body pb-4">
                {
                    t('get-prescriptions-filled-or-renewed-using-our-affiliate-online-pharmacy-and-delivered-right-to-your-door')
                  }
                </p>
              </div>
            </Link>
          </article>
          <article className="text-center md:text-left">
            <Link className="block h-[488px]" to="/services/nursing-homecare">
              <div className="bg-[#F78839] h-full text-white p-6 w-[300px]  mx-auto 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute top-4 right-4 w-full flex flex-row-reverse p-4">
                  <Link to="/services/nursing-homecare">
                    <img className="w-8" src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-20">
                  <SliderNursingHomecare />
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>
                  {t('nursing-and-homecare')}
                </h2>
                <p className="font-body pb-4">
                  {t('get-professional-care-from-our-team-of-nurses-and-homecare-helpers-that-come-directly-to-you')}
                </p>
              </div>
            </Link>
          </article>
          <article className="text-center md:text-left">
            <Link className="block h-[488px]" to="/services/diagnostics">
              <div className="bg-diagnostics h-full text-white p-6 w-[300px]  mx-auto 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
                <div className="absolute top-0 right-0 w-full flex flex-row-reverse p-4">
                  <Link to="/services/diagnostics">
                    <img className="w-8" src={RedirectIcon} alt="redirect" />
                  </Link>
                </div>
                <div className="flex justify-center pb-16">
                    <img className="w-24" src={StethoscopeDiagnostic} alt="Diagnostics"/>
                </div>
                <h2 className={`capitalize ${i18n.language === "en" ? "text-3xl" : "text-[26px]"} pb-4`}>
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
        {/* <div className="flex flex-wrap">
          <article className="w-[206px] flex justify-center">
            <Link className="block" to="/services/mental-health">
              <div className="bg-[#ECB118] text-white p-6 ml-6 h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
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
          <article className="w-[206px] flex justify-center">
            <Link className="block" to="/services">
              <div className="bg-[#A293FF] text-white p-6 ml-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
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
          <article className="w-[206px] flex justify-center">
            <Link className="block" to="/services/online-pharmacy">
              <div className="bg-[#90C387] text-white p-6 ml-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px]  flex flex-col justify-end relative">
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
          <article className="w-[206px] flex justify-center">
            <Link to="/services/nursing-homecare">
              <div className="bg-[#F78839] text-white p-6 ml-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
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
          <article className="w-[206px] flex justify-center">
            <Link to="/services/diagnostics">
              <div className="bg-diagnostics text-white p-6 ml-6 mx-auto h-[432px] w-[320px] 3xl:w-[330px] rounded-[8px] flex flex-col justify-end relative">
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
        </div> */}
      </div>


    </section>
  )
}

export default HomepageSlider