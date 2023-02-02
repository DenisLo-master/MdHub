import React from 'react'
import Logo from '../assets/logo-white.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-28 text-center md:text-left gap-y-6 py-12">
        <header>
          <img className="w-36" src={Logo} alt="Logo"/>
        </header>
        <article className="space-y-6">
          <h2 className="font-main text-2xl">Contact Info</h2>
          <ul className="font-body text-sm">
            <li>Montreal, QC</li>
            <li>+1 416 222 3333</li>
            <li>info@mdhub.com</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">Useful Links</h2>
          <ul className="font-body text-sm">
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Memberships</li>
            <li>Virtual Doctor</li>
            <li>Online Pharmacy</li>
            <li>Nursing & Homecare</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">Subscribe</h2>
          <div className="font-body text-sm space-y-2">
            <p className="max-w-[230px]">Subscribe to our newsletter for latest news and updates</p>
            <form className="flex space-x-1 text-xs">
              <input className="px-2 rounded bg-transparent text-white border outline-none border-white placeholder:text-white" placeholder="E-mail" />
              <button className="bg-white rounded text-primary px-3 py-1 hover:opacity-90 transition-opacity ease-in-out duration-300" type="submit">Subscribe</button>
            </form> 
          </div>
        </article>
        </div>
      <div className="bg-[#5d95b6] text-white font-body md:text-lg py-4 px-8 2xl:px-12 flex flex-col md:flex-row justify-between items-center gap-y-2">
          <p>&copy; 2023 MDHub Inc</p>
          <div className="flex items-center space-x-6">
          <img className="w-8" src={Facebook} alt="Facebook" />
          <img className="w-8" src={Linkedin} alt="Linkedin" />
          <img className="w-8" src={Twitter} alt="Twitter" />
          </div>
        </div>
    </footer>
  )
}

export default Footer