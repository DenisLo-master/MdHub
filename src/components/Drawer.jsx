import React from 'react'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'

const Drawer = ({ showDrawer, close }) => {
  return (
    <nav className={`fixed md:hidden flex flex-col border items-center top-16 z-30 bg-white transition-all ease-in duration-100 shadow-xl rounded-lg py-6 px-10 gap-y-3 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div onClick={() => close()} className="cursor-pointer text-xl absolute top-3 right-3">
        <MdClose />
      </div>
      <img className='cursor-pointer w-24' src={Logo} alt="MD Hub" />
      <ul className="font-main text-2xl">
        <li className="relative cursor-pointer hover:opacity-90">
          <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          <span>for you</span>
        </li>
        <li className="cursor-pointer hover:opacity-90">for family</li>
        <li className="cursor-pointer hover:opacity-90">for corporate</li>
        <li className="cursor-pointer hover:opacity-90">for services</li>
      </ul>
      <div className="font-body flex flex-col gap-y-2">
        <button className="rounded-full px-8 py-1 border border-primary font-body text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          Login
        </button>
        <button className="rounded-full px-8 py-1 border border-primary font-body text-white bg-primary hover:bg-transparent hover:text-primary transition-all ease-in-out duration-150">
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Drawer