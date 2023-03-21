import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MentalHealthBanner, NursingAndHomecareBanner, OnlinePharmacyBanner, VirtualDoctorBanner } from '../assets'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const HomeSlider = () => {
  const { t } = useTranslation()

  const CustomArrow = ({ direction, onClick }) => (
    <button className={`arrow arrow-${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )


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
    <div className="w-full font-main h-auto max-w-[700px] 2xl:max-w-[800px] bg-gray-100">
      <Carousel
        infiniteLoop={true}
        renderDotsOutside={true}
        showStatus={false}
        showThumbs={false}

        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button className="carousel-arrow carousel-arrow-prev z-10" onClick={onClickHandler}>
              <BsFillArrowLeftCircleFill className="text-3xl text-white" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button className="carousel-arrow carousel-arrow-next" onClick={onClickHandler}>
              <BsFillArrowRightCircleFill className="text-3xl text-white" />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            onClick={onClickHandler}
            key={index}
            className={`indicator h-2 w-2 mx-1 rounded-full ${isSelected ? 'bg-primary' : 'bg-white'}`}
          />
        )}
      >
        <div>
          <div className="bg-virtualDoctor px-6 h-[304px] 2xl:h-[370px] flex justify-center lg:justify-start items-center gap-x-6 2xl:gap-x-16  relative overflow-hidden">
            <h2 className="text-white text-[80px] 2xl:text-8xl leading-[70px]">{t('virtual')}<br /> {t('doctor')}</h2>
            <img className="hidden lg:block absolute top-0 right-0 w-full max-w-[270px] 2xl:max-w-[320px]" src={VirtualDoctorBanner} alt="Virtual Doctor Banner" />
          </div>
          <div className="p-6 pb-8 w-full flex flex-col justify-between">
            <div className="w-full space-y-3 text-base 2xl:text-xl font-body text-left">
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

        <div>
          <div className="bg-mentalHealth px-6 h-[304px] 2xl:h-[370px] flex justify-center items-center gap-x-6 2xl:gap-x-16">
            <h2 className="text-white text-[80px] 2xl:text-8xl leading-[70px] lowercase">{t('mental-health')}</h2>
            <img className="hidden lg:block w-full max-w-[310px]" src={MentalHealthBanner} alt="Mental Health Banner" />
          </div>
          <div className="relative z-20 p-6 pb-8 w-full flex flex-col justify-between">
            <div className="w-full space-y-3 text-base 2xl:text-xl font-body text-left">
              <p>
                {t("In today's faced-paced, modern and ultra-connected world, your mental health is more important than ever. With MDHUB, you can easily get mental health support when you need it most.")}
              </p>
            </div>
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

        <div>
          <div className="bg-onlinePharmacy px-6 h-[304px] 2xl:h-[370px] flex justify-center lg:justify-start items-center gap-x-6 2xl:gap-x-16 relative">
            <h2 className="text-white text-[66px] 2xl:text-8xl leading-[70px]">{t('online')} <br /> {t('pharmacy')}</h2>
            <img className="hidden absolute top-20 right-0 lg:block w-full max-w-[310px]" src={OnlinePharmacyBanner} alt="Online Pharmacy Banner" />
          </div>
          <div className="p-6 pb-8 w-full  flex flex-col justify-between">
            <div className="w-full space-y-3 text-base 2xl:text-xl font-body text-left">
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

        <div>
          <div className="bg-diagnostics diagnostics-bg px-6 h-[304px] 2xl:h-[370px] flex justify-center lg:justify-start items-center gap-x-6 2xl:gap-x-16">
            <h2 className="text-white text-[70px] 2xl:text-8xl leading-[70px]">{t('diagnostics')}</h2>
          </div>
          <div className="p-6 pb-8 w-full  flex flex-col justify-between">
            <div className="w-full space-y-3 text-base 2xl:text-xl font-body text-left">
              <p>
                {t('Safe, fast and professional testing on your schedule in the comfort and privacy of your own home or office. Avoid the wait at hospitals and clinics.')}
              </p>
              <p>
                {t('Our certified partner labs can quickly process over 300 different screenings and assays in order to provide a comprehensive health assessment.')}
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

        <div>
          <div className="bg-nursingHomecare px-6 h-[304px] 2xl:h-[370px] flex justify-center lg:justify-start pt-3 lg:pt-0 lg:items-center gap-x-6 2xl:gap-x-16 relative overflow-hidden">
            <h2 className="relative z-10 text-white text-[70px] 2xl:text-8xl leading-[60px] lg:leading-[70px]">
              {t('nursing &')} <br /> {t('homecare')}
            </h2>
            <img className="hidden z-0 lg:block absolute top-24 2xl:top-36 2xl:-right-10 right-0 w-full max-w-[260px]" src={NursingAndHomecareBanner} alt="Nursing and Homecare Banner" />
          </div>
          <div className="p-6 pb-8 w-full  flex flex-col justify-between">
            <div className="w-full space-y-3 text-base 2xl:text-xl font-body text-left">
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
      </Carousel>
    </div>
  )
}

export default HomeSlider