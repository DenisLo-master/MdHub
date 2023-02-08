import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'
import Drawer from './Drawer'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")

  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }

  return (
    <nav className="md:border-b border-primary pb-[2px] md:pb-[6px] shadow">
      <Drawer showDrawer={showDrawer} close={setShowDrawer} />
      <div className="flex items-center py-4">
        <article className="pl-4 w-[294px] flex justify-center">
          <Link to="/">
            <img className="cursor-pointer w-28" src={Logo} alt="MD Hub" />
          </Link>
        </article>
        <article className="hidden lg:flex justify-between text-xl font-medium flex-1 font-main">
          <ul className="flex flex-1 justify-center items-center space-x-14">
            <li className="relative cursor-pointer hover:opacity-90 group">
            {
              location.pathname === '/for-you' && 
              <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
            }
              <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
              <Link to="for-you">for you</Link>
            </li>
            <li className="relative cursor-pointer hover:opacity-90 group">
            {
              location.pathname === '/for-family' && 
              <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
            }
              <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
              <Link to="/for-family">for family</Link>
            </li>
            <li className="relative cursor-pointer hover:opacity-90 group">
            {
              location.pathname === '/for-corporate' && 
              <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
            }
              <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
              <Link to="/for-corporate">for corporate</Link>
            </li>
            <li className="relative group">
            {
              location.pathname.split('/')[1] === 'services' && 
              <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
            }
              <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
            <Link to="/services">services</Link>
          </li>
          </ul>
          {
            token ? (
              <div className="lg:pr-24">
                <button
                onClick={handleSignout}
                  className="rounded-full px-9 py-1 border border-primary text-white bg-primary hover:bg-transparent hover:text-primary transition-all ease-in-out duration-300">
                  Signout                 
                </button>
              </div>
            ):
            (
              <div className="lg:pr-24 text-light text-base space-x-4 font-main font-light">
                <Link to="/login">
                  <button className="rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="rounded-full px-9 py-1 border border-primary text-white bg-primary hover:bg-transparent hover:text-primary transition-all ease-in-out duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            )
          }
        </article>
        <article onClick={() => setShowDrawer(!showDrawer)} className="absolute cursor-pointer flex flex-col justify-center space-y-1 top-0 right-0 bg-primary text-white py-6 px-4 md:py-[1.7rem] lg:py-8 md:px-6">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-4 h-[2px] bg-white"></span>
        </article>
      </div>
    </nav>
  )
}

export default Navbar