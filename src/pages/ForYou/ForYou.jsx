import React from 'react'
import { ForYouHeaderSection } from '../../sections'
import { Link } from 'react-router-dom'
import { ForYouImage01, ForYouImage02, ForYouImage03, ForYouImage04, ArrowIcon } from '../../assets'

const ForYou = () => {
  return (
    <section>
      <ForYouHeaderSection />
      <section className="w-full max-w-[1130px] mx-auto py-10 font-main">
        <div className="space-y-6">
          <h2 className="text-4xl">A new, personalized standard of healthcare</h2>
          <p className="font-body font-light">Whether it’s getting a prescription for a common illness or accessing a medical laboratory, MDHUB makes it quick and easy to get the care you need. With over 150 doctors registered on our platform, including a variety of specialists, you can save time and the headache of the usual trip to the doctor’s office.
          </p>
          <Link to="/register" className={`rounded-full text-lg shadow-cardService group hover:ring-1 hover:ring-primary px-10 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
            Register Today
          </Link>
        </div>

        <div className="flex justify-center py-16">
          <article className="p-12 px-14 bg-[#f9f9f9] shadow-cardService rounded-tl-3xl rounded-bl-3xl">
            <h2 className="text-4xl pb-6">Your health, in your hands. </h2>
            <div className="font-body text-sm max-w-[350px] space-y-6">
              <p>
                Your life is full – and you don’t have time to wait three or more weeks to see a doctor. Our memberships allow you to receive highly-personalized and compassionate care fast for both your mental and physical health.
                So you never have to wait to see a doctor again. Learn more about our plans, so you never have to wait to see a doctor again.
              </p>
              <Link to="/services" className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent font-main`}>
                Explore Our Services
              </Link>

            </div>
          </article>
          <article>
            <img className="max-w-[650px] h-full" src={ForYouImage01} alt="For You" />
          </article>
        </div>

        <div className="py-10 space-y-6">
          <h2 className="text-4xl">You and your loved ones deserve more. </h2>
          <p className="font-body font-light text-sm pb-3">
            MDHUB was developed with you and your family in mind. MDHUB is the ultimate solution for entire families and is a great way to keep children and teens healthy.
          </p>
          <Link to="/services">
            <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent font-main`}>
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default ForYou