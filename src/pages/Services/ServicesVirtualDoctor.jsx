import React from 'react'
import DescriptionGrid from '../../components/DescriptionGrid'
import { VirusTestingAndVaccination } from '../../assets'

const ServicesVirtualDoctor = () => {
  return (
    <section className="font-main">
      <DescriptionGrid title="Virtual Doctor" imageSrc={VirusTestingAndVaccination}>
        <p>
          Unlimited 24/7 access to Medical advice, diagnosis, and treatment (including prescriptions, lab work, referrals to specialists, and more). Referral to clinics, when necessary.
        </p>
      </DescriptionGrid>
      <section className="py-10 text-gray-800">
        <h2 className="text-4xl py-10 text-center">
          How It Works
        </h2>
        <section className="flex justify-center space-x-8">
          <article className="flex space-x-4">
            <div className="w-12 h-12 flex justify-center items-center space-x-2 rounded-full bg-primary text-white font-body font-semibold">
              1
            </div>
            <div className="max-w-[220px] space-y-2">
              <h2 className="text-xl leading-5">Describe your symptoms through our app</h2>
              <div className="font-body font-light">
                Open the app and click the “Get care” button. One of our healthcare providers will review your request and respond in minutes.
              </div>
            </div>
            <div>
            </div>
          </article>

          <article className="flex space-x-4">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white font-body  font-semibold">
              2
            </div>
            <div className="max-w-[220px] space-y-2">
              <h2 className="text-xl leading-5">Chat with a doctor or nurse practitioner</h2>
              <div className="font-body font-light">
                Next, you’ll be connected to the healthcare provider. Online doctor consultations usually take place over text, but the doctor may request video, or audio chat if needed.
              </div>
            </div>
          </article>

          <article className="flex space-x-4">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white font-body  font-semibold">
              3
            </div>
            <div className="max-w-[220px] space-y-2">
              <h2 className="text-xl leading-5">Get a diagnosis or prescription</h2>
              <div className="font-body font-light">
                Our online doctors in Canada can diagnose and provide medical prescriptions as necessary. Prescription delivery is available at no additional cost.
              </div>
            </div>
          </article>
        </section>
      </section>

      <section className="py-10 text-gray-800">
        <h2 className="text-4xl py-10 text-center">
          Numbers Don't Lie
        </h2>
        <div className="flex justify-center md:space-x-24">
          <article className="font-main text-primary text-7xl text-center max-w-[160px]">
            <h2>4.9/5</h2>
            <p className="text-lg text-gray-800">
              Average user satisfaction rating
            </p>
          </article>

          <article className="font-main text-primary text-7xl text-center max-w-[200px]">
            <h2>91%</h2>
            <p className="text-lg text-gray-800">
              Of medical issues resolved in the first interaction
            </p>
          </article>

          <article className="font-main text-primary text-7xl text-center max-w-[160px]">
            <h2>61%</h2>
            <p className="text-lg text-gray-800">
              Of visits prevent a workplace absense
            </p>
          </article>

          <article className="font-main text-primary text-7xl text-center max-w-[200px]">
            <h2>3.6</h2>
            <p className="text-lg text-gray-800">
              Hours saves per consultation on average
            </p>
          </article>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-4xl py-10 text-center">
          Get An Online Doctor Consultation In Minutes
        </h2>
        <div className="flex justify-center gap-x-12 pb-6 text-xl text-center">
          <div className="w-full max-w-[370px]">
            <article className="w-full text-center bg-primary text-white  py-3 rounded-3xl">
              See A Doctor
            </article>
            <p className="font-body font-light text-sm pt-2 text-gray-800">
              Current members
            </p>
          </div>
          <div className="w-full max-w-[370px]">
            <article className="w-full text-center bg-primary text-white  py-3 rounded-3xl">
              Sign Up
            </article>
            <p className="font-body font-light text-sm pt-2 text-gray-800">
              If you are not a member already
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesVirtualDoctor