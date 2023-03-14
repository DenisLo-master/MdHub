import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { UserPlaceholder } from '../../assets'

const BillingHistory = () => {
  const billingData = [
    {
      id: 1,
      userName: "John Smith",
      dateJoined: "February 12th, 2022",
      latestPaymentAmount: "$29.99",
      latestPaymentDate: "March 8th, 2023",
      accountType: "Individual",
      paymentMode: "Yearly"
    },
    {
      id: 2,
      userName: "Sarah Johnson",
      dateJoined: "June 3rd, 2022",
      latestPaymentAmount: "$29.99",
      latestPaymentDate: "February 28th, 2023",
      accountType: "Individual",
      paymentMode: "Yearly"
    },
    {
      id: 3,
      userName: "Mark Davis",
      dateJoined: "January 2nd, 2022",
      latestPaymentAmount: "$39.99",
      latestPaymentDate: "January 15th, 2023",
      accountType: "Family",
      paymentMode: "Yearly"
    },
    {
      id: 4,
      userName: "Emily Brown",
      dateJoined: "November 8th, 2021",
      latestPaymentAmount: "$19.99",
      latestPaymentDate: "October 31st, 2022",
      accountType: "Corporate",
      paymentMode: "45 Employees"
    },
    {
      id: 5,
      userName: "David Garcia",
      dateJoined: "March 21st, 2022",
      latestPaymentAmount: "$89.99",
      latestPaymentDate: "December 10th, 2022",
      accountType: "On Demand",
      paymentMode: ""
    },
    {
      id: 6,
      userName: "Lisa Rodriguez",
      dateJoined: "September 15th, 2022",
      latestPaymentAmount: "$29.99",
      latestPaymentDate: "February 14th, 2023",
      accountType: "Individual",
      paymentMode: "Yearly"
    },
    {
      id: 7,
      userName: "Matthew Wilson",
      dateJoined: "April 9th, 2022",
      latestPaymentAmount: "$34.99",
      latestPaymentDate: "March 1st, 2023",
      accountType: "Individual",
      paymentMode: "Monthly"
    },
    {
      id: 8,
      userName: "Jennifer Lee",
      dateJoined: "August 2nd, 2022",
      latestPaymentAmount: "$19.99",
      latestPaymentDate: "July 20th, 2022",
      accountType: "Corporate",
      paymentMode: "45 Employees"
    },
    {
      id: 9,
      userName: "Daniel Martinez",
      dateJoined: "May 18th, 2022",
      latestPaymentAmount: "$39.99",
      latestPaymentDate: "March 12th, 2023",
      accountType: "Family",
      paymentMode: "Yearly"
    },
    {
      id: 10,
      userName: "Jessica Taylor",
      dateJoined: "July 7th, 2022",
      latestPaymentAmount: "$29.99",
      latestPaymentDate: "January 3rd, 2023",
      accountType: "Individual",
      paymentMode: "Yearly"
    }
  ]
  return (
    <section className="flex-1 px-4 text-dark">
      <article className="w-full bg-[#F9F9F9] p-8 rounded-lg font-body">
        <div className="flex gap-x-6 items-center pb-4">
          <h2 className="text-xl min-w-[80px]">All users</h2>
          <div className="w-full flex justify-between items-center font-main text-sm">
            <button type="button" className="bg-white rounded-full w-[100px] py-3 border">
              Individual
            </button>
            <button type="button" className="bg-white rounded-full w-[100px] py-3 border">
              Family
            </button>
            <button type="button" className="bg-white rounded-full w-[100px] py-3 border">
              Corporate
            </button>
            <button type="button" className="bg-white rounded-full w-[100px] py-3 border">
              On Demand
            </button>
            <button className="bg-white rounded-full w-[100px] py-3 border flex items-center justify-center">
              Sort By <FaChevronDown className="ml-2" />
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Date joined</th>
                <th className="py-3 px-6 text-left">Latest payment</th>
                <th className="py-3 px-6 text-left">Plan type</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((row, index) => (
                <tr
                  key={row.id}
                  className={` ${index !== billingData.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={UserPlaceholder}
                          alt={row.userName}
                        />
                      </div>
                      <span>{row.userName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {row.dateJoined}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div>
                      <span className="font-bold">{row.latestPaymentAmount}</span>
                    </div>
                    <div>{row.latestPaymentDate}</div>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div>
                      <span className="font-bold">{row.accountType}</span>
                    </div>
                    <div>{row.accountType !== "On Demand" && row.paymentMode}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}

export default BillingHistory