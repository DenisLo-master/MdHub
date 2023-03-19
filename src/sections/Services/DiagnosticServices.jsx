import React from 'react'
import { Link } from 'react-router-dom'
import {
  DiagnosticServices01,
  DiagnosticServices02,
  DiagnosticServices03,
  DiagnosticServices04,
  OkIconWhite,
  VirtualCare01,
  VirtualCare02,
  VirtualCare03,
  VirtualCare04
} from '../../assets'
import { useTranslation } from 'react-i18next'

const DiagnosticServices = () => {
	const { t } = useTranslation()

	return (
    <section className="bg-primary text-white py-14 px-4">
      <div className="w-full max-w-[52rem] mx-auto text-center space-y-4">
        <h3 className="text-4xl md:text-5xl">
          Get on-site lab testing and diagnostics 
        </h3>
        <p className="font-body text-light max-w-xl mx-auto">
          MDHUB’s comprehensive, on-site lab services can help you get answers fast. Test for infections, STIs, get vaccines, and more. 
        </p>
      </div>

      <section className="py-10 max-w-[70rem] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 text-lg">
          <article>
            <img className="w-full" src={DiagnosticServices01} alt="General assessments" />
            <div className="py-4 text-center bg-white text-dark">
              General assessments
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices02} alt="Specific testing" />
            <div className="py-4 text-center bg-white text-dark">
              Specific testing
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices03} alt="Genetic screening" />
            <div className="py-4 text-center bg-white text-dark">
              Genetic screening
            </div>
          </article>
          <article>
            <img className="w-full" src={DiagnosticServices04} alt="Annual health checkups" />
            <div className="py-4 text-center bg-white text-dark">
              Annual health checkups
            </div>
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
      </section>
    </section>
  )
}

export default DiagnosticServices;