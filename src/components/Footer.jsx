import React from 'react'
import Logo from '../assets/logo-white.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <footer className="bg-gradient-primary text-white pt-10">
      {location.pathname === "/" && 
        (
        <div className="flex flex-col items-center font-main">
          <h2 className="text-3xl pb-4">
            Sign up now for $29.99 per month
          </h2>
          <button type="button" className="w-[185px] bg-white rounded-full text-primary py-2">
            Sign Up Today
          </button>
        </div>
        )
      }
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-28 text-center md:text-left gap-y-6 py-12">
        <header>
          <img className="w-36" src={Logo} alt="Logo"/>
        </header>
        <article className="space-y-6">
          <h2 className="font-main text-2xl">{t('Contact Info')}</h2>
          <ul className="font-body text-base">
            <li>{t('Made in Canada')}</li>
            <li>
              <a href="tel:+15148658844">
                +1 514 865 8844
              </a>
            </li>
            <li>
              <a href="mailto:info@mdhub.com">
                info@mdhub.com
              </a>
            </li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">{t('Useful Links')}</h2>
          <ul className="font-body text-base">
            <li>
              <Link to="/services">
                {t('Services')}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {t('Contact')}
              </Link>
            </li>
            <li>
              <Link to="/about">
                {t('About Us')}
              </Link>
            </li>
            <li>
              <Link to="/rates">
                {t('Memberships')}
              </Link>
            </li>
            <li>
              <Link to="/services/virtual-doctor">
                {t('Virtual Doctor')}
              </Link>
            </li>
            <li>
              <Link to="/services/online-pharmacy">
                {t('Online Pharmacy')}
              </Link>
            </li>
            <li>
              <Link to="/services/nursing-homecare">
                {t('Nursing & Homecare')}
              </Link>
            </li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">{t('Subscribe')}</h2>
          <div className="font-body text-base space-y-2">
            <p className="max-w-[230px]">{t('Subscribe to our newsletter for latest news and updates')}</p>
            <form className="flex space-x-1 text-xs">
              <input className="px-2 rounded-full py-2 bg-transparent text-white border outline-none border-white placeholder:text-white" placeholder="E-mail" />
              <button className="bg-white rounded-full font-medium text-primary px-3 py-1 hover:opacity-90 transition-opacity ease-in-out duration-300" type="submit">Subscribe</button>
            </form>
          </div>
        </article>
        </div>
      <div className="bg-[#5d95b6] text-white font-body md:text-lg py-4 px-8 2xl:px-12 flex flex-col md:flex-row justify-between items-center gap-y-2">
        <p>&copy; 2023 MDHUB Inc</p>
          <div className="flex items-center space-x-6">
          <div className="w-8 h-8 rounded-full flex justify-center items-center border border-white">
            <a href="https://www.facebook.com/profile.php?id=100090530891905" target="_blank">
              <FaFacebookF className="text-white" />
            </a>
          </div>
          <div className="w-8 h-8 rounded-full flex justify-center items-center border border-white">
            <a href="https://www.linkedin.com/company/mdhub-ca/" target="_blank">
              <FaLinkedin className="text-white" />
            </a>
          </div>
          <div className="w-8 h-8 rounded-full flex justify-center items-center border border-white">
            <a href="https://www.instagram.com/mdhub.ca/" target="_blank">
              <FaInstagram className="text-white" />
            </a>
          </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
