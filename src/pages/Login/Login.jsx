import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'
import toast from 'react-hot-toast'
import { SVGLoaderCircles } from '../../assets'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const navigate = useNavigate()
  const loginFormRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const setUserInfo = registerationStore(state => state.setUserInfo)
  const { t } = useTranslation()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const form = new FormData(e.target)
    const loginFormData = Object.fromEntries(form)
    try {
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
      })
      loginFormRef.current.reset()
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("jwtToken", data.accessToken)
        setUserInfo(data)
        setIsLoading(false)
        navigate('/dashboard')
      }
      if (response.status === 401) {
        toast.error("Incorrect Credentials", {
          id: "Login"
        })
      }
    }
    catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) navigate("/dashboard")
  }, [])
  return (
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-8 md:py-36 font-main">
      <h2 className="text-4xl text-center pb-4">{t('Login')}</h2>
      <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
        <form ref={loginFormRef} onSubmit={handleLogin} className="space-y-4 w-full lg:w-[500px] text-gray-800">
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="email"
              type="email"
              placeholder={`${t('email-0')}*`}
              required
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="password"
              type="password"
              placeholder={`${t('password-0')}*`}
              required
            />
          </div>
          <p className="cursor-pointer pl-5">{t('forgot-password')}?</p>
          <div className='relative w-full pt-3'>
            <button type="submit" className={`rounded-full w-40 font-main text-xl group hover:ring-1 hover:ring-primary  py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              <span>Login</span>
              {isLoading && <SVGLoaderCircles className="text-primary w-4 h-4" />}
              </button>
            </div>
          </form>
          <Link className="block" to="/register">
          <p className="cursor-pointer pl-5">{t('Not-a-member-yet?-Click-here-to-sign-up')}.</p>
          </Link>
      </div>

    </section>
  )
}


export default Login
