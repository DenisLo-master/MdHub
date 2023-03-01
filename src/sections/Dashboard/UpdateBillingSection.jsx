import React, { useState, useEffect } from 'react'
import { registerationStore } from '../../store/registerationStore'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import dayjs from "dayjs"
import Modal from '../../components/Modal'

const UpdateBillingSection = () => {
  const [showCancelSubscriptionModal, setShowCancelSubscriptionModal] = useState(false)
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

  const handleCancelSubscription = () => {
    setShowCancelSubscriptionModal(true)
  }

  return (
    <section className="py-10 font-body">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium text-gray-800">Membership Information</h2>
          <button
            className="text-red-600 hover:text-red-700 focus:outline-none"
            onClick={handleCancelSubscription}
          >
            Cancel Subscription
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Billing History</h3>
          <ul className="mt-2">
            {billingHistory.map((billing) => (
              <li key={billing.id} className="flex justify-between items-center">
                <span className="text-gray-700">{new Date(billing.created * 1000).toLocaleDateString()}</span>
                <span className="text-gray-700">${billing.amount_paid / 100}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Next Payment</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700">{new Date(nextPayment.next_payment_attempt * 1000).toLocaleDateString()}</span>
            <span className="text-gray-700">${planPrice}</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Subscription Amount</h3>
          <span className="text-gray-700 mt-2">${planPrice}</span>
        </div>
      </div>
      <Modal
        title="Cancel Subscription"
        showModal={showCancelSubscriptionModal}
        setShowModal={setShowCancelSubscriptionModal}
      >
        <div>
          <p>
            Are you sure you would like to cancel your membership? You may not
            be able to use any existing services upon cancelling
          </p>
          <div className="flex justify-end gap-x-4">
            <button
              onClick={() => handleCancelMembership()}
              type="button"
              className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
            >
              Yes
            </button>
            <button
              onClick={() => setShowCancelSubscriptionModal(false)}
              type="button"
              className={`rounded-full w-48 font-main group hover:ring-1 hover:ring-primary py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent px-4`}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default UpdateBillingSection