import React, { useState, useEffect } from 'react'
import dayjs from "dayjs"
import { FaChevronDown } from 'react-icons/fa'
import { UserPlaceholder } from '../../assets'

const BillingHistory = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/get_users_payment_info`, {
          method: "GET",
          // headers: {
          //   "Authorization": `Bearer ${token}`
          // }
        })
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllUsers()
  }, [])


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
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={` ${index !== users.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={UserPlaceholder}
                          alt={`${user.firstName} ${user.lastName}`}
                        />
                      </div>
                      <span>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {dayjs(user.createdAt).format('MMMM D, YYYY')}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div>
                      <span className="font-bold">
                        {
                          user.latestPayment.amount ?
                            `$${user.latestPayment.amount / 100}` :
                            "No payment found"
                        }
                      </span>
                    </div>
                    <div>{
                      user.latestPayment.date ?
                        dayjs.unix(user.latestPayment.date).format('MMMM D, YYYY') :
                        ""
                    }
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div>
                      <span className="font-bold">{user.accountType}</span>
                    </div>
                    <div>{user.accountType !== "On Demand" && user.paymentMode}</div>
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