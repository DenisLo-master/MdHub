import React, { useState, useEffect } from 'react'
import { PartnerCompany01, PartnerCompany02, PartnerCompany03, PartnerCompany04 } from '../../assets'

const HomeUserSatisfactionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [increment, setIncrement] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 3) {
        setIncrement(false);
      } else if (currentSlide === 0) {
        setIncrement(true);
      }

      setCurrentSlide(prevCount => increment ? prevCount + 1 : prevCount - 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, increment])
  return (
    <section className="py-16 font-main text-4xl">
      <h2 className="text-center pb-8">
        We take care of outstanding people, their families, and their corporations.
      </h2>
      <div className="max-w-sm mx-auto flex flex-col justify-center text-center">
        <article className="max-w-[384px] relative overflow-x-hidden py-10 pb-14">
          <div className="absolute z-10 top-64 left-40">
            <div className="flex justify-center gap-x-2 pt-3">
              <article
                onClick={() => setCurrentSlide(0)}
                className={`w-[9px] h-[9px] rounded-full cursor-pointer ${currentSlide === 0 ? "bg-primary" : "bg-[#d9d9d9]"}`}
              />
              <article
                onClick={() => setCurrentSlide(1)}
                className={`w-[9px] h-[9px] rounded-full cursor-pointer ${currentSlide === 1 ? "bg-primary" : "bg-[#d9d9d9]"}`}
              />
              <article
                onClick={() => setCurrentSlide(2)}
                className={`w-[9px] h-[9px] rounded-full cursor-pointer ${currentSlide === 2 ? "bg-primary" : "bg-[#d9d9d9]"}`}
              />
              <article
                onClick={() => setCurrentSlide(3)}
                className={`w-[9px] h-[9px] rounded-full cursor-pointer ${currentSlide === 3 ? "bg-primary" : "bg-[#d9d9d9]"}`}
              />
            </div>
          </div>
          <section
            className={`w-full flex transform transition-transform duration-300 ease-in-out ${currentSlide === 0 && "-translate-x-0"} ${currentSlide === 1 && "-translate-x-[384px]"} ${currentSlide === 2 && "-translate-x-[768px]"} ${currentSlide === 3 && "-translate-x-[1152px]"}`}
          >
            <div className="min-w-[384px]">
              <h3 className="text-primary text-8xl">94%</h3>
              <p className="font-body font-light text-2xl">
                of physicians use virtual care.
              </p>
            </div>
            <div className="min-w-[384px]">
              <h3 className="text-primary text-8xl">1500+</h3>
              <p className="font-body font-light text-2xl">
                real doctors ready to treat various concerns and conditions
              </p>
            </div>
            <div className="min-w-[384px]">
              <h3 className="text-primary text-8xl">55%</h3>
              <p className="font-body font-light text-2xl">
                of employers expect virtual care to lower healthcare costs
              </p>
            </div>
            <div className="min-w-[384px]">
              <h3 className="text-primary text-8xl">94%</h3>
              <p className="font-body font-light text-2xl">
                of patients prefer virtual care due to "convenienve, speed of care, and ease experienced when accessing health information."
              </p>
            </div>
          </section>
        </article>
      </div>
      <div className="w-full max-w-4xl mx-auto text-center py-10 font-body text-base space-y-5">
        <p>Some companies we’ve partnered with:</p>
        <section className="flex items-center justify-between">
          <img src={PartnerCompany01} alt="Air Canada" />
          <img src={PartnerCompany02} alt="Sotherbys" />
          <img src={PartnerCompany03} alt="Air BNB" />
          <img src={PartnerCompany04} alt="Four Seasons" />
        </section>
      </div>
    </section>
  )
}

export default HomeUserSatisfactionSection
