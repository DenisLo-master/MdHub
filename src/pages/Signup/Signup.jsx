import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../../components/FormField'

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
    <section className="py-20 flex justify-center text-white">
      <article className="flex items-center">
        <div className="bg-primary rounded-tl-[35px] rounded-bl-[35px] p-10 font-main space-y-4 h-[500px] shadow-cardService">
          <h1 className="text-4xl">Register</h1>
        </div>
        <div className="py-16 border px-12 bg-[#f9f9f9] shadow-cardService rounded-[35px] text-gray-800 font-body">
          <h3 className="pb-4">Required Field *</h3>
          <form onSubmit={handleSignup} className="space-y-4 w-[500px] text-gray-800">
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <FormField
                type="text"
                name="firstName"
                placeholder="First Name"
                handleChange={handleChange}
                value={form.firstName}
              />
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <FormField
                type="text"
                name="lastName"
                placeholder="Last Name"
                handleChange={handleChange}
                value={form.lastName}
              />
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <FormField
                  type="email"
                  name="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  value={form.email}
                />  
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <FormField
                type="password"
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                value={form.password}
              /> 
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <FormField
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  handleChange={handleChange}
                  value={form.phone}
                /> 
            </div>
            <div className='w-full pt-3'>
              <button type="submit" className={`rounded-full font-main text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                Register
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}

export default Signup