import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const AdminNav = () => {
  const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }
  return (
    <nav>
      <div className="w-full flex justify-between p-8">
        <img src={Logo} className="w-32 h-7" alt="logo" />
        <button
          onClick={handleSignout}
          className={`py-[10px] text-lg flex justify-center items-center rounded-full w-[176px] text-dark border`}
          type="button">
          Sign Out
        </button>
      </div>
    </nav>
  )
}

export default AdminNav