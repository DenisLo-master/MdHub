import React from 'react'
import { UserPlaceholder } from '../../assets'

const AllUsers = () => {
  return (
    <section className="flex-1">
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark">
        <article className="w-full bg-[#F9F9F9] p-8 rounded-lg font-body">
          <h2 className="pb-6 text-xl">All users</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date joined</th>
                  <th className="py-3 px-6 text-left">Status</th>
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
                    <td className="py-3 px-6 text-left whitespace-nowrap flex gap-x-2">
                      <article className="bg-[#48D667] rounded-full w-4 h-4" />
                      <p className="w-full max-w-[90px]">
                        Payment up to date
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AllUsers