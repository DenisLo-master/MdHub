import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import jwt from 'jwt-decode'
import { Outlet } from 'react-router-dom'
import { DashboardUserInfo } from '../../sections'

const Dashboard = () => {
  const navigate = useNavigate()
  const setUserInfo = registerationStore(state => state.setUserInfo)

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    const tokenInfo = token ? jwt(token) : {}
    if (!token) navigate("/login")
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:8080/api/v1/users/${tokenInfo?.id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json()
      setUserInfo(data)
    }
    token && fetchUser()
  }, [])

  return (
    <section className="font-main text-gray-800">
      <Outlet />
      <section className="max-w-7xl mx-auto">
        <DashboardUserInfo />
      </section>
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto">
          {<section className="pb-20">
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
          </section>}

        </div>
      </section> */}

    </section>
  )
}

export default Dashboard