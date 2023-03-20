import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import jwt from 'jwt-decode'
import { Outlet } from 'react-router-dom'
import { DashboardUserInfo } from '../../sections'
import dayjs from 'dayjs'

const Dashboard = () => {
  const navigate = useNavigate()
  const userInfo = registerationStore(state => state.userInfo)
  const setUserInfo = registerationStore(state => state.setUserInfo)
  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    const tokenInfo = token ? jwt(token) : {}
    if (!token) navigate("/login")
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/${tokenInfo.id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await response.json()
        setUserInfo(data.userInfo)
      } catch (error) {
        console.log(error)
      }
    }
    token && fetchUser()
  }, [])

  return (
    <section className="font-main text-gray-800">
      <Outlet />
      <section className="max-w-7xl mx-auto">
        <DashboardUserInfo />
      </section>
    </section>
  )
}

export default Dashboard