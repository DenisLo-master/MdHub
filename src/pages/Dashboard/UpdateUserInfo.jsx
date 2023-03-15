import React, { useState, useEffect } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { toast } from "react-hot-toast"
import { SVGLoaderCircles } from '../../assets'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { BsPencilSquare } from "react-icons/bs"
import { Elements } from '@stripe/react-stripe-js';
import { UserPaymentForm } from '../../sections'
import { loadStripe } from '@stripe/stripe-js'

const key = import.meta.env.VITE_STRIPE
const stripePromise = loadStripe(key);

const UpdateUserInfo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [initialState, setInitialState] = useState([])
  const navigate = useNavigate()
  const userInfo = registerationStore(state => state.userInfo)
  const [userInfoFormData, setUserInfoFormData] = useState({})
  const [paymentInfo, setPaymentInfo] = useState("")
  const [showPaymentElement, setShowPaymentElement] = useState(false)

  const token = localStorage.getItem("jwtToken")
  const tokenInfo = token ? jwtDecode(token) : {}

  const handleChange = (e) => {
    setUserInfoFormData({ ...userInfoFormData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const updatedFields = {}
      Object.keys(userInfoFormData).forEach(key => {
        if (userInfoFormData[key] !== initialState[key]) {
          updatedFields[key] = userInfoFormData[key]
        }
      })
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/${tokenInfo?.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedFields)
      })
      await response.json()
      if (response.ok) {
        setIsLoading(false)
        toast.success("Your info has been successfully updated", { id: "successfulinfoupdate" })
        navigate("/dashboard")
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/${tokenInfo?.id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await response.json()
        const { paymentInfo, userInfo } = data
        setPaymentInfo(paymentInfo)
        setUserInfoFormData({ email: userInfo.email, phone: userInfo.phone, address: userInfo.address, password: userInfo.password })
        setInitialState({ email: userInfo.email, phone: userInfo.phone, address: userInfo.address, password: userInfo.password })

      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-xl mx-auto p-8 rounded-[35px] shadow-cardService border-[0.25px]">
        <div className="flex gap-x-1 items-center pb-5">
          <h2 className="text-4xl">Edit Info</h2>
          <h2 className="text-sm">{userInfo.isChildUser ? "Child Account" : "Account Admin"}</h2>
        </div>
        <div className="flex items-center gap-x-4 pb-3">
          <h2>
            {paymentInfo ?
              `Card Info: **** **** **** ${paymentInfo}` :
              "Click here to add your payment method"
            }
          </h2>
          <button
            onClick={() => setShowPaymentElement(true)}
          >
            <BsPencilSquare />
          </button>
        </div>
        {
          showPaymentElement && (
            <Elements stripe={stripePromise}>
              <UserPaymentForm />
            </Elements>
          )
        }
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex">
            <input
              name="email"
              value={userInfoFormData.email}
              onChange={handleChange}
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border" placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex">
            <input
              name="password"
              value={userInfoFormData.password}
              onChange={handleChange}
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border" placeholder="Enter New Password"
              type="password"
            />
          </div>
          <div className="flex">
            <input
              name="phone"
              value={userInfoFormData.phone}
              onChange={handleChange}
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border" placeholder="phone"
              type="text"
            />
          </div>
          <div className="flex">
            <input
              name="address"
              value={userInfoFormData.address}
              onChange={handleChange}
              className="flex-1 rounded-full text-xl focus:ring-1 focus:ring-primary outline-none px-8 py-2 border" placeholder="address"
              type="text"
            />
          </div>
          <button
            className={`rounded-full group hover:ring-1 hover:ring-primary  py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-8`}
            type="submit"
          >
            {isLoading ? <SVGLoaderCircles className="text-base w-4 h-4" /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default UpdateUserInfo