import React, { useEffect, useState } from 'react'
import { UserPlaceholder } from '../../assets'
import dayjs from "dayjs"

const Dashboard = () => {
  const [usersThisWeek, setUsersThisWeek] = useState([])
  const [deletedUsersThisWeek, setDeletedUsersThisWeek] = useState([])
  const token = localStorage.getItem("jwtToken")

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/get_user_info`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await response.json()
        setUsersThisWeek(data.data.usersThisWeek)
        setDeletedUsersThisWeek(data.data.deletedUsers)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])
  return (
    <section className="pt-4 lg:pt-0">
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark gap-y-4">
        <article className="flex flex-col gap-y-10">
          <div className="w-full max-w-[416px] bg-[#F9F9F9] shadow-cardService rounded-lg">
            <h2 className="pb-6 text-xl pl-6 pt-6">New users this week</h2>
            <table className="w-full font-body">
              <thead>
                <tr className="uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date joined</th>
                </tr>
              </thead>
              <tbody>
                {usersThisWeek.map((user, index) => (
                  <tr
                    key={`{item#${index}}`}
                    className={` ${index !== usersThisWeek.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="hidden lg:block w-10 h-10 rounded-full"
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-full lg:w-[416px] space-y-6">
            <h3 className="text-xl">
              Number of total subscriptions:
            </h3>
            <h2 className="text-primary text-3xl">
              15,000
            </h2>
          </div>
        </article>

        <article className="flex flex-col gap-y-10">
          <div className="w-full max-w-[416px] bg-[#F9F9F9] shadow-cardService rounded-lg">
            <h2 className="pb-6 text-xl pl-6 pt-6">Deactivated Accounts</h2>
            <table className="w-full font-body">
              <thead>
                <tr className="uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date Deactivated</th>
                </tr>
              </thead>
              <tbody>
                {deletedUsersThisWeek.map((user, index) => (
                  <tr
                    key={user._id}
                    className={` ${index !== deletedUsersThisWeek.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="hidden lg:block w-10 h-10 rounded-full"
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-full lg:w-[416px] space-y-6">
            <h3 className="text-xl">
              Total revenue this month:
            </h3>
            <h2 className="text-primary text-3xl">
              $60,000
            </h2>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Dashboard