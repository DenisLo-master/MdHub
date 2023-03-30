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
  const { t } = useTranslation()

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
    nextArrow: <BsFillArrowRightCircleFill className="text-blue-400 z-10 slick-icon-arrow" />
  };


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
    <div className="w-full max-w-[1400px] 3xl:max-w-[1580px] mx-auto font-main h-[500px] px-24 text-primary">
      <Slider {...settings}>
        <article>
          <Link className="block" to="/services/mental-health">
            <div className="bg-[#ECB118] text-white p-6 h-[432px] w-[300px] 3xl:w-[330px] rounded-[8px] mx-4 flex flex-col justify-end relative">
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
            <div className="bg-[#A293FF] text-white p-6 h-[432px] w-[290px] 3xl:w-[330px] rounded-[8px] mx-4 flex flex-col justify-end relative">
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
            <div className="bg-[#90C387] text-white p-6 h-[432px] w-[300px] 3xl:w-[330px] rounded-[8px] mx-4 flex flex-col justify-end relative">
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
            <div className="bg-[#F78839] text-white p-6 h-[432px] w-[300px] 3xl:w-[330px] rounded-[8px] mx-4 flex flex-col justify-end relative">
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
            <div className="bg-diagnostics text-white p-6 h-[432px] w-[300px] 3xl:w-[330px] rounded-[8px] mx-4 flex flex-col justify-end relative">
            <div className="absolute bottom-0 left-0 w-full flex flex-row-reverse p-4">
              <Link to="/services/diagnostics">
                <img src={RedirectIcon} alt="redirect" />
              </Link>
            </div>
            <div className="flex justify-center pb-20">
              <img src={SliderDiagnostics} alt="Diagnostics"/>
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
  )
}

export default HomepageSlider