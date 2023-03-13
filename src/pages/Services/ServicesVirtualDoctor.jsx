import React from 'react'
import { Link } from 'react-router-dom'
import {
  VirtualDoctorBanner,
  MedicalTreatmentAcne,
  MedicalTreatmentED,
  MedicalTreatmentUTI,
  MedicalTreatmentBC,
  OkIconWhite,
  VirtualCare01,
  VirtualCare02,
  VirtualCare03,
  VirtualCare04
} from '../../assets'

import { virtualDoctorHowItWorksData } from '../../constants'

const WORDS = ["diagnosis", "prescriptions & renewals", "doctors notes", "referrals to specialists", "mental health", "general health advise", "lab requisitions"]

const ServicesVirtualDoctor = () => {
  return (
    <section className="font-main py-10">
      <header className="bg-virtualDoctor text-white w-full lg:h-[530px] py-10 relative">
        <div className="max-w-[83rem] mx-auto">
          <article className="space-y-5 flex flex-col items-center lg:items-start text-center">
            <h2 className="text-6xl lg:text-[88px]">
              virtual care
            </h2>
            <div className="space-y-5 font-body text-lg max-w-lg">
              <p className="text-left">
                Treatment and diagnosis for 70% of medical issues can be done virtually. Connect with a virtual doctor in minutes, 24/7. Or, book an appointment with a specialist - no referral needed.
              </p>
            </div>
            <Link className="block" to="/register">
              <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white text-virtualDoctor border-white hover:opacity-80 transition-opacity ease-in-out duration-300">
                Sign Up Today
              </button>
            </Link>
          </article>
          <img className="hidden lg:block absolute right-0 top-0 h-full" src={VirtualDoctorBanner} alt="virtual doctor" />
        </div>
      </header>

      <section className="hidden lg:block relative bg-white py-14 pb-28">
        <div className="relative virtual-health text-center flex justify-center flip-words">
          <h2 className="text-primary text-center text-5xl md:text-6xl">
            Get help for
          </h2>
          <div className="w-full absolute left-0 top-16">
            <div className="w-full h-16 overflow-y-hidden flex justify-center">
              {
                WORDS.map(word => (
                  <span className="md:text-6xl">
                    {word}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-14 px-4">
        <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
          <h3 className="text-4xl md:text-5xl">
            Get medical treatment online
          </h3>
          <p className="font-body text-ligh">
            Our online doctors can treat your health conditions and concerns without you ever having to leave home. Book an appointment with specialists, like dermatologists, endocrinologists, mental health therapists, gynecologists, and more.
          </p>
        </div>

        <section className="py-10 max-w-[70rem] mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 text-lg">
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

            <article className="lg:col-span-2">
              <Link TO="/register">
                <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-primary hover:text-white transition-colors duration-300 ease-out">
                  Sign Up Today
                </button>
              </Link>
            </article>

            <article className="lg:col-span-2">
              <Link to="/services">
                <button className="rounded-full w-full text-lg flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                  View All Specialties and Treatments
                </button>
              </Link>
            </article>
          </div>

          <div className="grid grid-cols-1 justify-cente lg:grid-cols-4 pt-16 py-10 gap-x-4 gap-y-8">
            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>diagnosis</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>prescriptions & renewals</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>lab requisitions</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>24/7 unlimited access</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>doctors notes</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>referrals to specialists</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>mental health</h2>
            </article>

            <article className="flex items-center text-xl gap-x-3 text-white">
              <OkIconWhite />
              <h2>general health advice</h2>
            </article>
          </div>
        </section>
      </section>

      <section className="py-10 bg-white text-gray-800">
        <h2 className="text-4xl text-center pb-12">How it works</h2>
        <div className="w-full max-w-[76rem] mx-auto">
          <section className="flex flex-col lg:flex-row items-center justify-between">
            <article className="max-w-[210px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                1
              </div>
              <h2 className="text-2xl pr-4 py-3 pb-1 mb-2 border-b border-dark leading-5">Describe your symptoms using our app </h2>
              <p className="max-w-[210px] font-body leading-[1.25em]">
                Open the app or browser and click the “Get care” button. Describe your symptoms, and one of our healthcare providers will review your request in minutes.
              </p>
              <div className="pt-8">
                <img className="w-full" src={VirtualCare01} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[210px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                2
              </div>
              <h2 className="text-2xl pr-4 py-3 pb-1 mb-2 border-b border-dark leading-5">Chat with a doctor</h2>
              <p className="max-w-[210px] font-body pt-7 leading-[1.25em]">
                Typically, you’ll be connected with a healthcare provider over text, but they may request a video or audio chat if necessary.
              </p>
              <div className="pt-4 lg:pt-[74px]">
                <img className="max-w-full" src={VirtualCare02} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[210px]">
              <div className="bg-gradient-primary text-white rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                3
              </div>
              <h2 className="text-2xl text-dark pr-4 pt-3 leading-5 pb-2 mb-2 border-b border-dark">Get a diagnosis or prescription, and or lab requisition or doctors note</h2>
              <p className="max-w-[210px] font-body leading-[1.25em]">
                Our virtual doctors can diagnose and provide prescriptions, and prescription delivery is available at no extra cost.
              </p>
              <div className="pt-4 lg:pt-[54px]">
                <img className="max-w-full" src={VirtualCare03} alt="How It Works" />
              </div>
            </article>

            <article className="max-w-[210px]">
              <div className="bg-gradient-primary text-white  rounded-full w-14 h-14 flex justify-center items-center font-body text-3xl">
                4
              </div>
              <h2 className="text-2xl pr-4 pt-3 pb-1 leading-5 border-b border-dark mb-2">Return to MDHUB DASHBOARD to access any of your additional membership benefits:</h2>
              <p className="max-w-[210px] leading-[1.25em] font-body">
                Pharmacy, nursing, lab diagnostics, and mental health.
              </p>
              <div className="pt-2 lg:pt-[70px]">
                <img className="max-w-full" src={VirtualCare04} alt="How It Works" />
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

          <div>
            <h3 className="text-center text-4xl md:text-5xl pt-10 py-20">
              Don't just take it from us
            </h3>
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-y-4 item-center justify-between text-center">
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">4.9/5</h2>
                <p className="font-body lg:max-w-[170px]">Average user satisfaction rating</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">91%</h2>
                <p className="font-body lg:max-w-[220px]">Of medical issues resolved in the first interaction</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">65%</h2>
                <p className="font-body lg:max-w-[200px]">Of visits prevent a workplace absence</p>
              </article>
              <article className="space-y-6 text-center">
                <h2 className="text-primary text-7xl">3.6</h2>
                <p className="font-body lg:max-w-[170px]">Hours saves per consultation on average</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor