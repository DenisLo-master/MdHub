import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerationStore } from '../../store/registerationStore'

const Login = () => {
  const navigate = useNavigate()
  const loginFormRef = useRef(null)
  const setUserInfo = registerationStore(state => state.setUserInfo)

  const handleLogin = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const loginFormData = Object.fromEntries(form)
    try {
      const response = await fetch('https://mdhub-backend.onrender.com/api/v1/auth/login', {
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
        navigate('/dashboard')
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) navigate("/dashboard")
  }, [])
  return (
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-8 md:py-20 font-main">
      <h2 className="text-4xl text-center pb-4">Login</h2>
      <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary relative">
        <form ref={loginFormRef} onSubmit={handleLogin} className="space-y-4 w-[500px] text-gray-800">
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="email"
              type="email"
              placeholder="Email*"
              required
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="password"
              type="password"
              placeholder="Password*"
              required
            />
          </div>
            <div className='w-full pt-3'>
              <button type="submit" className={`rounded-full font-main text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                Login
              </button>
            </div>
          </form>
      </div>
    </section>
  )
}

export default Login