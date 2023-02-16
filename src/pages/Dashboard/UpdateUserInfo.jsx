import React, { useState, useEffect } from 'react'
import { registerationStore } from '../../store/registerationStore'

const UpdateUserInfo = () => {
  const userInfo = registerationStore(state => state.userInfo)
  const [userInfoFormData, setUserInfoFormData] = useState({ ...userInfo, password: "" })
  const handleChange = (e) => {
    e.preventDefault()
    setUserInfoFormData({ ...userInfoFormData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userInfoFormData)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-xl mx-auto p-8 rounded-[35px] shadow-cardService border-[0.25px]">
        <div className="flex gap-x-1 items-center pb-5">
          <h2 className="text-4xl">Edit Info</h2>
          <h2 className="text-sm">{userInfo.isChildUser ? "Child Account" : "Account Admin"}</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="firstName"
              type="text"
              placeholder={userInfo?.firstName}
              value={userInfoFormData?.firstName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="lastName"
              type="text"
              placeholder={userInfo?.lastName}
              value={userInfoFormData?.lastName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="email"
              type="email"
              placeholder={userInfo?.email}
              value={userInfoFormData?.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="password"
              type="password"
              placeholder="Enter New Password"
              value={userInfoFormData?.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border"
              name="address"
              type="text"
              placeholder={userInfo?.address}
              value={userInfoFormData?.address}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="w-full flex">
            <input
              type="submit"
              value="Submit"
              className={`rounded-full font-main text-lg group hover:ring-1 hover:ring-primary px-12 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}
            />
          </div>

        </form>
      </div>
    </section>
  )
}

export default UpdateUserInfo