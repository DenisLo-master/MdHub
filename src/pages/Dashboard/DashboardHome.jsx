import React from 'react'
import { MDHubWheelTransparent } from '../../assets'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  return (
    <header className="py-16 bg-[#f9f9f9]">
      <h1 className="text-4xl text-center pb-10">Your MdHub Dashboard</h1>
      <section className="flex justify-center items-center gap-x-10">
        <img className="max-w-[490px] -ml-24" src={MDHubWheelTransparent} alt="MD Hub" />
        <article className="space-y-3">
          <Link to="/dashboard/book-appointment">
            <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-8 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Book New Appointment
            </button>
          </Link>
          <div className="flex items-center gap-x-2 font-body text-base pl-6">
            <article className="bg-primary rounded-full w-4 h-4" />
            <p>2 upcoming appointments</p>
          </div>
        </article>
      </section>
    </header>
  )
}

export default DashboardHome