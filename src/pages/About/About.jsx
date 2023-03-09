import React from 'react'
import { AboutHeroImage, OkIcon, CloseVector } from '../../assets'

const About = () => {
  return (
    <section className="py-20 font-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center relative text-white">
          <img src={AboutHeroImage} alt="About Us" />
          <div className="absolute bottom-16 left-32 space-y-4 max-w-[1000px]">
            <h2 className="text-4xl">About Us</h2>
            <p className="font-body">We’re a group of passionate individuals that believe Canadians deserve more when it comes to their healthcare. That’s why we created the ultimate healthcare solution – to put your health back in your hands. While virtual healthcare isn’t new, bridging the gap between virtual and physical care is, and were proud to be a disruptor in the virtual healthcare industry. Our team of doctors and nurse practitioners is here to help when you need them, so you, your family, and team can access quality healthcare fast. Because a healthy life is a happy life.</p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-center  py-16">
          <article className="py-10 pl-16 rounded-lg">
            <h2 className="text-6xl text-dark text-center font-main pb-4">Them</h2>
            <ul className="font-body space-y-6 font-light text-lg">
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>24/7 access to real doctors </span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Prescription by doctors</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Free online pharmacy</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Individual, family or corporate coverage</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Quick and discounted access to medical specialists</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Worldwide access to telemedicine</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Headspace app</span>
              </li>
              <li className="flex items-center gap-x-5">
                <CloseVector /> <span>Centralized health records and platform</span>
              </li>
            </ul>
          </article>
          <article className="bg-primary text-white py-10 px-20 rounded-lg bg-linearGradientPrimary shadow-cardService">
            <h2 className="text-6xl text-center font-main pb-4">Us</h2>
            <ul className="font-body grid grid-cols-2 gap-x-14 gap-y-2 max-w-[550px] space-y-4 font-light text-lg">
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>24/7 access to real doctors </span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Headspace app</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Prescription by doctors</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Medical notes</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Free online pharmacy</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Mental health frontline</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Individual, family or corporate coverage</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Laboratories and testing services</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Quick and discounted access to medical specialists</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Centralized health records and platform</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Worldwide access to telemedicine</span>
              </li>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-10 h-10" />
                </div> <span>Nursing and homecare</span>
              </li>


            </ul>
          </article>
        </div>

      </div>
    </section>
  )
}

export default About