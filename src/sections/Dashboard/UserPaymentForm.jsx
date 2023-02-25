import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import jwtDecode from 'jwt-decode'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const UserPaymentForm = () => {
  const token = localStorage.getItem("jwtToken")
  const tokenInfo = token ? jwtDecode(token) : {}
  const userInfo = registerationStore(state => state.userInfo)
  const stripe = useStripe();
  const elements = useElements();

  const updatePaymentMethod = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return;
    }
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const response = await fetch(`https://mdhub-backend.onrender.com/api/v1/users/${userInfo._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ customerId: userInfo.stripeCustomerId, paymentMethod: paymentMethod.id })
        })
        await response.json()
        if (response.ok) {
          toast.success("Successfully updated your card", {
            id: "card success"
          })
        } else {
          toast.error("Something went wrong", {
            id: "card-error"
          })
        }
        setIsLoading(false)
      }
    } catch (error) {

    }
  }

  return (
    <form onSubmit={updatePaymentMethod}>
      <CardElement
        className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default UserPaymentForm