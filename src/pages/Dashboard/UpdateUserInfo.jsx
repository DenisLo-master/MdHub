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
  const navigate = useNavigate()
  const userInfo = registerationStore(state => state.userInfo)
  const [userInfoFormData, setUserInfoFormData] = useState({ ...userInfo, password: "" })
  const [paymentInfo, setPaymentInfo] = useState("")
  const [showPaymentElement, setShowPaymentElement] = useState(false)

  const token = localStorage.getItem("jwtToken")
  const tokenInfo = token ? jwtDecode(token) : {}

  const handleChange = (e) => {
    e.preventDefault()
    setUserInfoFormData({ ...userInfoFormData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(`http://localhost:8080/api/v1/users/${tokenInfo?.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userInfoFormData)
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
        const response = await fetch(`http://localhost:8080/api/v1/users/${tokenInfo?.id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          }
        })
        const { paymentInfo } = await response.json()
        setPaymentInfo(paymentInfo)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-xl mx-auto p-8 rounded-[35px] shadow-cardService border-[0.25px]">
        <div className="flex gap-x-1 items-center pb-5">
          <h2 className="text-4xl">Edit Info</h2>
          <h2 className="text-sm">{userInfo.isChildUser ? "Child Account" : "Account Admin"}</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h2>
            {`Card Info: **** **** **** ${paymentInfo}`}
          </h2>
          <button onClick={() => setShowPaymentElement(true)}>
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
      </div>
    </section>
  )
}

export default UpdateUserInfo