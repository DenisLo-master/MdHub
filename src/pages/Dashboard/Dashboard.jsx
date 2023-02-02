import React from 'react'
import { MDHubWheelTransparent, ChevronLeft, ChevronRight } from '../../assets'
import { calenderData } from '../../constants'

const Dashboard = () => {
  return (
    <section className="font-main text-gray-800">
      <header className="py-16 bg-[#f9f9f9]">
        <h1 className="text-4xl text-center pb-10">Your MdHub Dashboard</h1>
        <section className="flex justify-center items-center gap-x-10">
          <img className="max-w-[490px] -ml-24" src={MDHubWheelTransparent} alt="MD Hub" />
          <article className="space-y-3">
            <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-8 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Book New Appointment
            </button>
            <div className="flex items-center gap-x-2 font-body text-base pl-6">
              <article className="bg-primary rounded-full w-4 h-4" />
              <p>2 upcoming appointments</p>
            </div>
          </article>
        </section>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <section className="pb-20">
            <h2 className="text-[2rem]">Current Appointments</h2>
            <div className="flex gap-x-2 font-body text-lg">
              <p>Switch to view past appointments</p>
              <div className="relative">
                <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
                <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                  <span className="sr-only">Enable</span>
                </label>
              </div>
            </div>
            <section className="grid grid-cols-7 gap-6 font-body py-8">
              <div className="text-center pr-2">Sun.</div>
              <div className="text-center pr-2">Mon.</div>
              <div className="text-center pr-2">Tue.</div>
              <div className="text-center pr-2">Wed.</div>
              <div className="text-center pr-2">Thu.</div>
              <div className="text-center pr-2">Fri.</div>
              <div className="text-center pr-2">Sat.</div>
              {
                calenderData.map(item => (
                  <article className={`relative border-[0.25px] border-[#b4a5a5] rounded-3xl p-2 w-36 h-32 flex flex-col justify-between items-center text-center shadow-cardService ${item.appointment ? "bg-[#C4E7FA]" : ""}`} key={item.id}>
                    <p>{`${item.id < 32 ? item.id : ''}`}</p>
                    <div className="text-sm font-light">
                      {
                        item.id < 32 && item.appointment ? (
                          <div className="space-y-2">
                            <article className="absolute left-3 top-3 bg-primary rounded-full w-4 h-4" />
                            <p>{item.appointment.title}</p>
                            <p>{item.appointment.timing}</p>
                          </div>
                        ) : item.id < 32 && (
                          <p>
                            No appointments
                          </p>
                        )
                      }
                    </div>
                  </article>
                ))
              }
            </section>

            <article className="flex items-center gap-x-4 text-primary">
              <ChevronLeft />
              <span className="text-gray-800 text-3xl">Dec</span>
              <ChevronRight />
            </article>
          </section>

          <section className="flex gap-x-16 font-body font-light pb-10">
            <article className="flex-1 space-y-4">
              <h2 className="text-4xl font-main font-normal">Your Information</h2>
              <div className="p-10 bg-[#fbfbfb] rounded-[35px] shadow-cardService space-y-6  border-[0.25px]">
                <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
                  John
                </article>
                <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
                  Smith
                </article>
                <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
                  johnsmith@gmail.com
                </article>
                <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
                  416-000-0000
                </article>
                <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
                  10 Queen St W, Toronto, ON M5H 3X4
                </article>
              </div>
            </article>

            <article className="flex-1 space-y-4">
              <h2 className="text-4xl font-main font-normal">Your Subscription</h2>
              <div className="p-10 bg-[#fbfbfb] flex flex-col justify-between rounded-[35px] shadow-cardService space-y-6 border-[0.25px] h-[428px]">
                <article className="space-y-10">
                  <div>
                    <p className="text-sm">Your current subscription plan</p>
                    <h2 className="font-bold text-2xl tracking-widest">Individual Yearly</h2>
                  </div>
                  <div>
                    <h2 className="font-bold text-4xl">$29.99/month</h2>
                    <p className="text-sm">Unlimited usage</p>
                  </div>
                </article>
                <article>
                  <button className={`rounded-full font-main text-lg group hover:ring-1 hover:ring-primary px-12 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                    Manage
                  </button>
                </article>
              </div>
            </article>
          </section>
        </div>
      </section>

    </section>
  )
}

export default Dashboard