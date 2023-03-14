import React from 'react'
import { UserPlaceholder } from '../../assets'

const Dashboard = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark">
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
                {[...Array(10)].map((row, index) => (
                  <tr
                    key={`{item#${index}}`}
                    className={` ${index !== 9 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={UserPlaceholder}
                            alt={"John Smith"}
                          />
                        </div>
                        <span>John Smith</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      March 8th, 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-[416px] space-y-6">
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
                {[...Array(10)].map((row, index) => (
                  <tr
                    key={`{item#${index}}`}
                    className={` ${index !== 9 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={UserPlaceholder}
                            alt={"John Smith"}
                          />
                        </div>
                        <span>John Smith</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      March 8th, 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-[416px] space-y-6">
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