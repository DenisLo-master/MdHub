import React from 'react'
import DescriptionGrid from '../../components/DescriptionGrid'
import { ServiceOfYourNeed } from '../../assets'
import { VirusTestingAndVaccination } from '../../assets'


const ServicesVirusTesting = () => {
  return (
    <section className="font-main">
      <DescriptionGrid title="Virus Testing & Vaccination" imageSrc={VirusTestingAndVaccination}>
        <p>
          Unlimited 24/7 access to Medical advice, diagnosis, and treatment (including prescriptions, lab work, referrals to specialists, and more). Referral to clinics, when necessary.
        </p>
      </DescriptionGrid>
      <h2 className="text-4xl font-main text-gray-800 text-center pb-14">Select The Testing Service Of Your Needs</h2>
      <section className="flex justify-center gap-x-12 ">
        <img className="max-w-[500px]" src={ServiceOfYourNeed} alt="Service Of Your Need" />
        <article className="text-center space-y-3">
          <div className="rounded-3xl w-[330px] h-[105px] shadow-cardService flex items-center justify-center bg-primary text-white text-2xl">
            Drive Thru
          </div>
          <div className="rounded-3xl w-[330px] h-[105px] shadow-cardService flex items-center justify-center text-gray-800 bg-white text-2xl">
            Mobile
          </div>
          <div className="rounded-3xl w-[330px] h-[105px] shadow-cardService flex items-center justify-center text-gray-800 bg-white text-2xl">
            Virtual
          </div>
          <div className="rounded-3xl w-[330px] h-[105px] shadow-cardService flex items-center justify-center text-gray-800 bg-white text-2xl">
            Fast Results
          </div>
          <div className="rounded-3xl w-[330px] h-[105px] shadow-cardService flex items-center justify-center text-gray-800 bg-white text-2xl">
            Accepted <br /> Everywhere
          </div>
        </article>
      </section>
      <section className="py-12 bg-[#F9F9F9]">
        <div className="flex justify-center gap-x-12 pb-6 text-xl">
          <article className="w-full text-center bg-primary text-white max-w-[370px] py-3 rounded-3xl">
            Mobile Service
          </article>
          <article className="w-full text-center bg-primary text-white max-w-[370px] py-3 rounded-3xl">
            Virtual Service
          </article>
        </div>
        <p className="text-center text-gray-800 text-lg font-light font-body max-w-[910px] mx-auto">
          MDHUB Members Benefit from 25% discount on all virus testing services as well as free upgraded rush service.
          All our Covid-19 testing is performed by our partners
        </p>
      </section>
    </section>
  )
}

export default ServicesVirusTesting