import React from 'react'
import { Link } from 'react-router-dom'
import {
  NursingAndHomeCareServices01,
  NursingAndHomeCareServices02,
  NursingAndHomeCareServices03,
  NursingAndHomeCareServices04,
  OkIconWhite,
  VirtualCare01,
  VirtualCare02,
  VirtualCare03,
  VirtualCare04
} from '../../assets'
import { useTranslation } from 'react-i18next'

const NursingAndHomecareServices = () => {
	const { t } = useTranslation()
	return (
    <section className="bg-primary text-white py-14 px-4">
      <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
        <h3 className="text-4xl md:text-5xl">
          Get access to nursing and homecare 
        </h3>
        <p className="font-body text-ligh">
          If you or a loved one have a medical condition that requires ongoing treatment, nursing can make life much easier. Or, if they need some extra help at home, our homecare agents can help shoulder the burden. 
        </p>
      </div>

      <section className="py-10 max-w-[70rem] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={NursingAndHomeCareServices01} alt="Blood work & testing" />
            <div className="py-4 text-center bg-white text-dark">
              Blood work & testing
            </div>
          </article>
          <article>
            <img className="w-full" src={NursingAndHomeCareServices02} alt="Vaccination" />
            <div className="py-4 text-center bg-white text-dark">
              Vaccination
            </div>
          </article>
          <article>
            <img className="w-full" src={NursingAndHomeCareServices03} alt="Elderly care" />
            <div className="py-4 text-center bg-white text-dark">
              Elderly care
            </div>
          </article>
          <article>
            <img className="w-full" src={NursingAndHomeCareServices04} alt="IV Therapy" />
            <div className="py-4 text-center bg-white text-dark">
              IV Therapy
            </div>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Vital signs monitoring</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Companion care</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Urology care</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Post operative care</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Oncology care</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Injections & infusions</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Foot care</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Ear washing</p>
          </article>

          <article className="relative p-4 h-16 bg-white text-center text-dark rounded-md">
            <p>In home & outdoor assistance</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Transportation assistance</p>
          </article>

          <article className="relative p-4 bg-white text-center text-dark rounded-md">
            <p>Light meal prepping/housekeeping</p>
          </article>

          <article className="relative p-4 h-16 leading-5 bg-white text-center text-dark rounded-md">
            <p>Medication administration & monitoring</p>
          </article>

          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
            <Link className="block w-full" to="/register">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-primary bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-out">
                {t('sign-up-today')}
              </button>
            </Link>
          </article>
          <article className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
          	<Link className="block w-full" to="/dashboard">
              <button className="rounded-full w-full text-lg flex justify-center py-3 text-white bg-transparent border border-white hover:bg-white hover:text-primary transition-colors duration-300 ease-out">
                Get Care Now
              </button>
            </Link>
          </article>
        </div>
        <div className="pt-10">
        	<p className="font-body break-words text-sm">
        		<strong>NOTE:</strong> Above pricing does not include laboratory fees or additional materials such as vitamin drips or the cost of medication. Our team will confirm all appointments by email or phone and advice of any additional fees. Homecare services require a minimum booking of three hours for Montreal and four hours for outside of Montreal.
        	</p>
        </div>
      </section>
    </section>
  )
}

export default NursingAndHomecareServices;