import React from 'react'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Drawer = ({ showDrawer, close }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const language = i18n.language === "en" ? "fr" : "en"
    i18n.changeLanguage(language);
  }

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
      <ul className="font-main text-2xl list-none">
        <li className="relative cursor-pointer hover:opacity-90 group">
          {
            location.pathname === '/for-you' &&
            <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          }
          <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
          <Link to="/for-you">{t('for you')}</Link>
        </li>
        <li className="relative cursor-pointer hover:opacity-90 group">
          {
            location.pathname === '/for-family' &&
            <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          }
          <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
          <Link to="/for-you">{t('for family')}</Link>
        </li>
        <li className="relative cursor-pointer hover:opacity-90 group">
          {
            location.pathname === '/for-corporate' &&
            <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          }
          <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
          <Link to="/for-corporate">{t('for corporate')}</Link>
        </li>
        <li className="relative group">
          {
            location.pathname.split('/')[1] === 'services' &&
            <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          }
          <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
          <Link to="/services">{t('services')}</Link>
        </li>
        <li className="relative cursor-pointer hover:opacity-90 group">
          {
            location.pathname === '/rates' &&
            <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
          }
          <RxDotFilled className="hidden group-hover:block absolute text-primary -left-5 top-[6px]" />
          <Link to="/rates">{t('rates')}</Link>
        </li>
      </ul>
      {
        token ? (
          <div className="space-y-4 flex flex-col items-center">
            <button onClick={changeLanguage}>
              <span className={`${i18n.language === "en" ? "text-primary font-semibold" : "text-dark"}`}>en</span> /
              <span className={`${i18n.language === "fr" ? "text-primary font-semibold" : "text-dark"}`}>fr</span>
            </button>
          <div>
              <button onClick={handleSignout} className="rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
                {t('Sign Out')}
            </button>
          </div>
            <Link className="block" to="/dashboard">
              <button onClick={handleSignout} className="rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
                {t('Dashboard')}
              </button>
            </Link>
          </div>

        ): (
          <div className="font-body flex flex-col gap-y-2">
              <button onClick={changeLanguage}>
                <span className={`${i18n.language === "en" ? "text-primary font-semibold" : "text-dark"}`}>en</span> /
                <span className={`${i18n.language === "fr" ? "text-primary font-semibold" : "text-dark"}`}>fr</span>
              </button>
            <Link to="/login">
              <button className="w-full rounded-full px-9 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
                  {t('Login')}
              </button>
            </Link>
            <Link to="/register">
              <button className="rounded-full px-9 py-1 border border-primary text-white bg-primary hover:bg-transparent hover:text-primary transition-all ease-in-out duration-300">
                  {t('Sign Up')}
              </button>
            </Link>
          </div>
        )
      }
        
    </nav>
  )
}

export default Drawer