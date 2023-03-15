import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const AdminNav = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }
  return (
    <nav>
      <div className="w-full py-4 lg:py-8 relative">
        <article onClick={() => setShowDrawer(!showDrawer)} className="md:hidden absolute cursor-pointer flex flex-col justify-center space-y-1 top-0 right-0 bg-primary text-white py-6 px-4 md:py-[1.7rem] lg:py-8 md:px-6">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-4 h-[2px] bg-white"></span>
        </article>
        <div className="px-8 flex justify-between">
          <img src={Logo} className="w-40 h-7" alt="logo" />
          <button
            onClick={handleSignout}
            className={`hidden py-[10px] text-lg lg:flex justify-center items-center rounded-full w-[176px] text-dark border`}
            type="button">
            Sign Out
          </button>
        </div>
      </div>
      <nav className={`fixed lg:hidden flex flex-col border items-center top-16 z-30 bg-white transition-all ease-in duration-100 shadow-xl rounded-lg py-6 px-10 gap-y-3 ${showDrawer ? 'right-0' : '-right-full'}`}>
        <div onClick={() => setShowDrawer(false)} className="cursor-pointer text-xl absolute top-3 right-3">
          <MdClose />
        </div>
        <button
          onClick={handleSignout}
          className={`py-[10px] text-lg flex justify-center items-center rounded-full w-[176px] text-dark border`}
          type="button">
          Sign Out
        </button>
      </nav>
    </nav>
  )
}

export default AdminNav