import React, { useState, useEffect } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { useStripe, useElements } from '@stripe/react-stripe-js'

const UpdateBillingSection = () => {
  const userInfo = registerationStore(state => state.userInfo)
  const stripe = useStripe()
  const [billingHistory, setBillingHistory] = useState([])
  const [nextPayment, setNextPayment] = useState({})
  const [planPrice, setPlanPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function fetchMembershipInfo() {
      const response = await fetch("http://localhost:8080/get-billing-info/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId: `${userInfo.stripeCustomerId}` })
      })
      const data = await response.json()
      setBillingHistory(data.invoiceList.data)
      setNextPayment(data.upcomingInvoice)
      setPlanPrice(data.subscription.plan.amount / 100)
    }

    fetchMembershipInfo();
  }, [])

  async function handleCancelMembership() {
    // Cancel the customer's subscription
    await stripe.subscriptions.del(customer.subscriptions.data[0].id);

    // Reload the page to reflect the cancellation
    window.location.reload();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Membership Information</h1>
      <h2>Billing History</h2>
      <ul>
        {billingHistory.map(invoice => (
          <li key={invoice.id}>
            {new Date(invoice.created * 1000).toLocaleDateString()} - ${invoice.amount_paid / 100}
          </li>
        ))}
      </ul>
      <h2>Next Payment</h2>
      <p>Due on {new Date(nextPayment.next_payment_attempt * 1000).toLocaleDateString()}</p>
      <p>Amount: ${planPrice} per month</p>
      <button onClick={handleCancelMembership}>Cancel Membership</button>
    </div>
  );
}

export default UpdateBillingSection