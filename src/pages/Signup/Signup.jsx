import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const signupFormRef = useRef(null)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      })
      await response.json()
      navigate('/dashboard')
    } 
    catch (error) {
      console.log(error) 
    }
  }

  return (
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-8 md:py-20 font-main">
      <article className="w-full space-y-4 flex flex-col items-center">
        <h2 className="text-4xl text-center pb-4">Choose Account Type</h2>
        <div className="w-full flex justify-around md:justify-between text-primary flex-wrap gap-y-4">
          <button type="submit" className={`w-40 md:48 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
            Individual
          </button>
          <button type="submit" className={`w-40 md:48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
            Family
          </button>
          <button type="submit" className={`w-40 md:48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
            Corporate
          </button>
        </div>
      </article>
      <article className="w-full self-start max-w-xs pt-8 pb-4 mb-4 border-b-[3px] border-b-primary flex items-baseline gap-x-6">
        <h2 className="text-5xl ">Step 1</h2>
        <p className="font-body text-xl font-light">
          Enter member details
        </p>
      </article>
      <article className="w-full">
        <form ref={signupFormRef} onSubmit={handleSignup} className="w-full">
          <div className="py-16 border space-y-4 px-8 shadow-cardService rounded-[35px] text-primary">
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="firstName"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="lastName"
                type="text"
                placeholder="Last Name*"
                required
              />
            </div>
            <div className="w-full flex flex-wrap gap-y-4 gap-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="email"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                name="phone"
                type="tel"
                placeholder="Phone*"
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
          </div>
          <div className="w-full flex justify-end pt-6">
            <button
              className="w-40 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`"
              type="button"
            >
              Continue
            </button>
          </div>
        </form>
      </article>
    </section>

  )
}

export default Signup