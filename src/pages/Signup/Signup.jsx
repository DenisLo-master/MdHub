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
    <section className="w-full max-w-[42rem] flex flex-col items-center mx-auto py-20 font-main">
      <article className="w-full space-y-4 flex flex-col items-center py-8">
        <h2 className="text-4xl text-center pb-4">Choose Account Type</h2>
        <div className="w-full flex justify-between text-primary">
          <button type="submit" className={`w-48 bg-primary text-white rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
            Individual
          </button>
          <button type="submit" className={`w-48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
            Family
          </button>
          <button type="submit" className={`w-48 rounded-full text-xl hover:ring-1 hover:ring-primary px-16 py-2 border flex justify-center items-center border-primary bg-transparent`}>
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
        <div className="py-16 border px-12 bg-[#f9f9f9] shadow-cardService rounded-[35px] text-primary">
          <form onSubmit={handleSignup} className="space-y-4 w-[500px]">
            <div className="w-full flex space-x-6">
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
                type="text"
                placeholder="Last Name*"
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