import React from 'react'
import { Link } from 'react-router-dom'
import {
  VirtualDoctorBanner,
  MedicalTreatmentAcne,
  MedicalTreatmentED,
  MedicalTreatmentUTI,
  MedicalTreatmentBC,
  ArrowGradient,
  OkIconWhite,
  HomeHowItWorks01,
  HomeHowItWorks02,
  HomeHowItWorks03,
  HomeHowItWorks04
} from '../../assets'

import { virtualDoctorHowItWorksData } from '../../constants'

const WORDS = ["diagnosis", "prescriptions & renewals", "doctors notes", "referrals to specialists", "mental health", "general health advise", "lab requisitions"]

const ServicesVirtualDoctor = () => {
  return (
    <section className="font-main py-10">
      <header className="bg-[#A293FF] text-white w-full h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5">
            <h2 className="text-[88px]">
              virtual doctor
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p>
                Treatment and diagnosis for 70% of medical issues can be done virtually.
              </p>
              <p>
                Connect with a virtual doctor in minutes, 24/7. Or, book an appointment with a specialist – no referral needed.
              </p>
            </div>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border border-white">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img className="absolute right-0 top-0 h-full" src={VirtualDoctorBanner} alt="virtual doctor" />
        </div>
      </header>

      <section className="bg-white py-14">
        <div className="relative virtual-health text-center flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl relative right-[150px] 2xl:right-[200px]">
            Get care today for
          </h2>
          <div>
            {
              WORDS.map(word => (
                <span className="md:text-6xl left-[850px] 2xl:left-[870px]">
                  {word}
                </span>
              ))
            }
          </div>
        </div>
        <h3 className="text-center text-4xl md:text-5xl py-20">
          Don't just take it from us
        </h3>
        <div className="w-full max-w-6xl mx-auto flex item-center justify-between text-center">
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">4.9/5</h2>
            <p className="font-body max-w-[170px]">Average user satisfaction rating</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">91%</h2>
            <p className="font-body max-w-[220px]">Of medical issues resolved in the first interaction</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">65%</h2>
            <p className="font-body max-w-[200px]">Of visits prevent a workplace absence</p>
          </article>
          <article className="space-y-6 text-center">
            <h2 className="text-primary text-7xl">3.6</h2>
            <p className="font-body max-w-[170px]">Hours saves per consultation on average</p>
          </article>
        </div>
      </section>

      <section className="bg-primary text-white py-14">
        <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
          <h3 className="text-4xl md:text-5xl">
            Get medical treatment online
          </h3>
          <p className="font-body text-ligh">
            Our online doctors can treat your health conditions and concerns without you ever having to leave home. Book an appointment with specialists, like dermatologists, endocrinologists, mental health therapists, gynecologists, and more.
          </p>
        </div>

        <section className="py-10 max-w-[70rem] mx-auto">
          <div className=" grid grid-cols-4 gap-8 text-lg">
            <article>
              <img className="w-full" src={MedicalTreatmentBC} alt="Birth Control" />
              <div className="py-4 text-center bg-white text-dark">
                Birth Control
              </div>
            </article>
            <article>
              <img className="w-full" src={MedicalTreatmentED} alt="Erectile Dysfunction" />
              <div className="py-4 text-center bg-white text-dark">
                Erectile Dysfunction
              </div>
            </article>
            <article>
              <img className="w-full" src={MedicalTreatmentAcne} alt="Acne" />
              <div className="py-4 text-center bg-white text-dark">
                Acne
              </div>
            </article>
            <article>
              <img className="w-full" src={MedicalTreatmentUTI} alt="Urinary Tract Infections" />
              <div className="py-4 text-center bg-white text-dark">
                Urinary tract infections
              </div>
            </article>

            <article className="relative p-4 bg-white text-center text-dark rounded-md">
              <p>Dermatology</p>              
            </article>

            <article className="relative p-4 bg-white text-center text-dark rounded-md">
              <p>Mental Health Therapy</p>              
            </article>

            <article className="relative p-4 bg-white text-center text-dark rounded-md">
              <p>Endocrinology</p>              
            </article>

            <article className="relative p-4 bg-white text-center text-dark rounded-md">
              <p>Naturopathy</p>              
            </article>

            <article className="col-span-2">
              <Link TO="/register">
                <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-primary hover:text-white transition-colors duration-300 ease-out">
                  Sign Up Today
                </button>
              </Link>
            </article>

            <article className="col-span-2">
              <Link to="/services">
                <button className="rounded-full w-full text-lg flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                  View All Specialties and Treatments
                </button>
              </Link>
            </article>
          </div>

          <div className="flex justify-around flex-wrap py-10 gap-x-4 gap-y-8">
            <article className="flex items-center text-3xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>diagnosis</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>doctors notes</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>lab requisitions</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>mental health</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white pr-8">
              <OkIconWhite />
              <h2>referrals to specialists</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>general health advice</h2>
            </article>

            <article className="flex items-center text-3xl gap-x-3 text-white pl-8">
              <OkIconWhite />
              <h2>prescriptions & renewals</h2>
            </article>
          </div>
        </section>
      </section>

      <section className="py-10 bg-white text-gray-800">
        <h2 className="text-4xl text-center pb-12">How it works</h2>
        <div className="w-full max-w-[70rem] mx-auto">
          <section className="flex justify-between">
            <article className="max-w-[230px]">
              <div className="bg-gradient-primary text-white rounded-full w-20 h-20 flex justify-center items-center font-body text-3xl">
                1
              </div>
              <h2 className="text-lg pr-4 py-3">Describe your symptoms using our app </h2>
              <p className="max-w-[215px] font-body">
                Open the app or browser and click the “Get care” button. Describe your symptoms, and one of our healthcare providers will review your request in minutes.
              </p>
              <div className="pt-[4.5rem]">
                <img className="max-w-[180px]" src={HomeHowItWorks01} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[270px]">
              <div className="bg-gradient-primary text-white rounded-full w-20 h-20 flex justify-center items-center font-body text-3xl">
                2
              </div>
              <h2 className="text-lg pr-4 py-3">Chat with a doctor</h2>
              <p className="max-w-[215px] font-body pt-7">
                Typically, you’ll be connected with a healthcare provider over text, but they may request a video or audio chat if necessary.
              </p>
              <div className="pt-24">
                <img className="max-w-[270px]" src={HomeHowItWorks02} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[230px]">
              <div className="bg-gradient-primary text-white rounded-full w-20 h-20 flex justify-center items-center font-body text-3xl">
                3
              </div>
              <h2 className="text-lg text-dark pr-4 pt-3 leading-5 pb-1">Get a diagnosis or prescription, and or lab requisition or doctors note</h2>
              <p className="max-w-[215px] font-body">
                Our doctors will take the proper for each patient. They can diagnose, provide prescriptions and or lab requisitions when needed. Patients may also requests doctors not and or request a referral to specialists.
              </p>
              <div className="pt-6">
                <img className="max-w-[270px]" src={HomeHowItWorks03} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[230px]">
              <div className="bg-gradient-primary text-white rounded-full w-20 h-20 flex justify-center items-center font-body text-3xl">
                4
              </div>
              <h2 className="text-lg pr-4 pt-3 pb-1 leading-5">Return to MDHUB DASHBOARD to access any of your additional membership benefits:</h2>
              <p className="max-w-[215px] font-body">
                Pharmacy, nursing, lab diagnostics, and mental health.
              </p>
              <div className="pt-44">
                <img className="max-w-[150px]" src={HomeHowItWorks04} alt="How It Works" />
              </div>
            </article>
          </section>

          <div className="flex justify-center py-10">
            <Link to="/register">
              <button
                type="button"
                className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
              >
                Sign Up Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor