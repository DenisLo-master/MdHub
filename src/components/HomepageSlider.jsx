import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomepageSlider = () => {
  const { t } = useTranslation()

  const CustomArrow = ({ direction, onClick }) => (
    <button className={`arrow arrow-${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <BsFillArrowLeftCircleFill className="text-primary z-10 slick-icon-arrow"/>,
    nextArrow: <BsFillArrowRightCircleFill className="text-primary z-10 slick-icon-arrow"/>
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
    <div className="w-full font-main h-auto max-w-7xl mx-auto bg-gray-100">
      <Slider {...settings}>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
        <div>
          5
        </div>
      </Slider>
    </div>
  )
}

export default HomepageSlider