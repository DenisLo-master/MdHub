import React from 'react'
import { AboutHeroImage, OkIcon } from '../../assets'

const About = () => {
  return (
    <section className="py-20 font-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center relative text-white">
          <img src={AboutHeroImage} alt="About Us" />
          <div className="absolute bottom-16 left-32 space-y-4 max-w-[1000px]">
            <h2 className="text-4xl">About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Nunc posuere viverra at sit morbi. Id lobortis pretium sit tincidunt quis. Integer massa nec amet posuere quis sed. Ac velit sollicitudin ultricies at hendrerit luctus rhoncus. Non leo cras diam aliquet mattis convallis id. Posuere congue arcu vitae vel elit id at ornare proin. Nibh ullamcorper suspendisse dui orci tempus. Eu fringilla sem mattis augue elementum. Venenatis a faucibus blandit ut tristique. Senectus aliquam et sed aliquam diam elit. Amet elementum condimentum facilisi in morbi commodo pulvinar sed tempor. Id aenean ac congue eleifend blandit tortor proin.</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-20 py-16">
          <article className="bg-[#f9f9f9] py-10 px-20 rounded-[35px] shadow-cardService">
            <h2 className="text-4xl text-primary text-center font-main pb-4">Them</h2>
            <ul className="font-body space-y-4 font-light">
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
            </ul>
          </article>
          <article className="bg-primary text-white py-10 px-20 rounded-[35px] shadow-cardService">
            <h2 className="text-4xl text-center font-main pb-4">Us</h2>
            <ul className="font-body space-y-4 font-light">
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
              <li className="flex items-center gap-x-2">
                <OkIcon /> <span>Lorem ipsum dolor sit amet consectetur.</span>
              </li>
            </ul>
          </article>
        </div>

      </div>
    </section>
  )
}

export default About