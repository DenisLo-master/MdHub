import React from 'react'

const Signup = () => {
  return (
    <section className="py-20 flex justify-center text-white">
      <article className="flex items-center">
        <div className="bg-primary rounded-tl-[35px] rounded-bl-[35px] p-10 font-main space-y-4 h-[500px] shadow-cardService">
          <h1 className="text-4xl">Register</h1>
        </div>
        <div className="py-16 px-12 bg-[#f9f9f9] shadow-cardService rounded-[35px] text-gray-800 font-body">
          <h3 className="pb-4">Required Field *</h3>
          <form className="space-y-4 w-[500px] text-gray-800">
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder="First Name" />
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder="Last Name" />
            </div>
            <div className="w-full relative">
            <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="password" placeholder="Password" />
            </div>
            <div className="w-full relative">
            <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="email" placeholder="Email" />
            </div>
            <div className="w-full relative">
            <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="tel" placeholder="Phone" />
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