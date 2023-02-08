import React from 'react'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Drawer = ({ showDrawer, close }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")

  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    close()
    navigate("/")
  }
  return (
    <nav className={`fixed lg:hidden flex flex-col border items-center top-16 z-30 bg-white transition-all ease-in duration-100 shadow-xl rounded-lg py-6 px-10 gap-y-3 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div onClick={() => close()} className="cursor-pointer text-xl absolute top-3 right-3">
        <MdClose />
      </div>
      <Link to="/">
        <img className='cursor-pointer w-24' src={Logo} alt="MD Hub" />
      </Link>
      <ul className="font-main text-2xl">
        <Link to="/for-you">
        <li className="relative cursor-pointer hover:opacity-90">
          <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          <span>for you</span>
        </li>
        </Link>
        <Link to="for-family">
          <li className="cursor-pointer hover:opacity-90">for family</li>
        </Link>
        <Link to="for-corporate">
          <li className="cursor-pointer hover:opacity-90">for corporate</li>
        </Link>
        <Link to="/services">
          <li className="cursor-pointer hover:opacity-90">for services</li>
        </Link>
      </ul>
      {
        token ? (
          <div>
            <button onClick={handleSignout} className="rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              Signout
            </button>
          </div>
        ): (
          <div className="font-body flex flex-col gap-y-2">
            <Link to="/login">
              <button className="w-full rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
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
        
    </nav>
  )
}

export default Drawer