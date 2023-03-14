import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
  const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }
  return (
    <nav>
      <div className="w-full max-w-6xl mx-auto flex flex-row-reverse py-8">
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