import React from 'react'
import { OnlinePharmacyImage } from '../../assets'
import Button from '../../components/Button'

const ServicesOnlinePharmacy = () => {
  return (
    <section className="pt-20 leading-4">
      <div className="flex gap-x-10 justify-center font-body">
        <article>
          <h2 className="font-main text-4xl pb-2">Online Pharmacy</h2>
          <div className="font-body font-light w-full max-w-[380px] text-justify space-y-4">
            <p>
              Our members may access our virtual medicine platform to obtain a new prescriptions or renewals for a majority of medical requirements.
            </p>
            <p>
              All medication prescriptions may be fulfilled by your pharmacy or choice or conveniently through our partnership platform Medzy, shipped for free quickly to your location of choice
            </p>
          </div>
          <div className="font-main py-8 space-y-4">
            <button className={`rounded-full w-full max-w-[380px] group hover:ring-1 hover:ring-primary  py-2 text-xl border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              See a doctor for a new prescription
            </button>

            <button className={`rounded-full w-full max-w-[380px] group hover:ring-1 hover:ring-primary  py-2 text-xl border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Order an existing prescription
            </button>
          </div>
          <section className="w-full max-w-[320px] font-body font-light">
            <h2 className="font-main text-4xl pb-2">How It Works</h2>
            <div className="space-y-3">
              <article>
                <p className="py-2 font-semibold">
                  If you need a new prescription.
                </p>
                <p>
                  Visit our virtual doctor We’ll ask you some questions about your medical history, and your symptoms and provide you with your prescription
                </p>
              </article>

              <article>
                <p className="py-2 font-semibold">
                  If you already have a prescription
                </p>
                <p>
                  We take care of transferring your prescriptions from your old pharmacy.
                </p>
              </article>

              <article>
                <p className="py-2 font-semibold">
                  Free + Fast Delivery
                </p>
                <p className="pb-4">
                  We’ll ship your medication to your door, in a discreet eco package, for free.
                </p>
                <p>
                  That’s it! You get your medication on time, every time.
                </p>
              </article>
            </div>
          </section>
        </article>
        <article>
          <img className="w-full max-w-[500px]" src={OnlinePharmacyImage} alt="Online Pharmacy" />
        </article>
      </div>

      <div className="font-body w-full max-w-[58rem] mx-auto py-20">
        <h2 className="font-semibold text-xl pb-4">Invoice</h2>
        <ul className="space-y-4">
          <li className="flex justify-between border-b-[0.75px] border-dark pb-3">
            <p>Delivery</p>
            <p>Free</p>
          </li>

          <li className="flex justify-between border-b-[0.75px] border-dark pb-3">
            <p>24/7 Emergency Service</p>
            <p>Free</p>
          </li>

          <li className="flex justify-between border-b-[0.75px] border-dark pb-3">
            <p>Personalized Packaging</p>
            <p>Free</p>
          </li>

          <li className="flex justify-between border-dark pb-3">
            <p>Medications</p>
            <p className="text-right max-w-[150px]">Depends On Your Insurance</p>
          </li>
        </ul>
        <div className="font-main pt-8">
          <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesOnlinePharmacy