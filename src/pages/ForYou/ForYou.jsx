import React from 'react'
import { ForYouHeaderSection } from '../../sections'
import { Link } from 'react-router-dom'
import { ForYouFamilyPlan, OkIconWhite, ForYouBottom } from '../../assets'

const ForYou = () => {
  return (
    <section>
      <ForYouHeaderSection />
      <div className="py-10 text-primary font-main px-4">
        <h2 className="flex flex-col lg:flex-row text-center justify-center gap-x-3 items-center text-5xl md:text-6xl">
          Get help with
          <span className="text-dark">
            seasonal depression
          </span>
        </h2>
      </div>
      <section className="w-full max-w-[1130px] mx-auto py-10 font-main">
        <article className="w-full bg-linearGradientPrimary rounded-lg py-10 px-4 pb-32 text-white space-y-6">
          <h2 className="text-center text-4xl">What you get with your membership</h2>
          <ul className="flex justify-center flex-wrap font-body text-white gap-x-16 gap-y-8 relative">
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Instant access to a doctor for free, anytime, from anywhere
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Most of your medical needs in one package
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Prescriptions, lab work, specialist, vaccines and mental health in one place
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                No travel, traffic or parking or wait time required
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Control your medical outlook, be proactive and solve health issues
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Coverage for your whole family
              </p>
            </li>
            <li className="absolute -bottom-20 left-4 lg:left-36">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
                  Sign Up Today
                </button>
              </Link>
            </li>
          </ul>
        </article>

        <article className="flex flex-col-reverse lg:flex-row gap-x-8 py-16 text-dark">
          <div className="flex-1 space-y-4 font-body px-4">
            <h2 className="text-4xl lg:text-5xl font-main max-w-[500px] py-4">
              The whole family in one affordable plan
            </h2>
            <p>
              A hand-picked network of online doctors in Canada ready to help you.
            </p>
            <p className="pb-2">
              Looking for a doctor who’s accepting consultations from new patients? Our physicians, nurse practitioners, and allied healthcare professionals are licensed and practice in their respective fields right here in Canada. See a healthcare provider in minutes or book an online doctor’s appointment with a specialist.
            </p>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-2 border border-primary">
                Sign Up Today
              </button>
            </Link>
          </div>
          <div className="flex-1 space-y-4 font-body">
            <img className="w-full object-cover" src={ForYouFamilyPlan} alt="For you family plan" />
          </div>
        </article>
      </section>

      <section className="relative bg-[#DB8E96] font-main bg-cover bg-no-repeat bg-center 3xl:h-[500px]">
        <img className="hidden lg:block absolute w-full h-[400px] 3xl:h-[500px]" src={ForYouBottom} alt="For You" />
        <div className="relative z-10 w-full max-w-[1160px] text-3xl mx-auto h-[400px] object-cover flex items-center text-white px-4">
          <div className="space-y-6">
            <h2 className="max-w-[450px] pb-">
              “Just registered for a membership, chose a doctor & made a same-day appointment at faster than I buy my morning coffee.”
            </h2>
            <h2>— MDHUB Member in Montreal</h2>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ForYou