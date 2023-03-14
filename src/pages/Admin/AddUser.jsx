import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const AddUser = () => {
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  return (
    <section className="flex-1">
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark">
        <article className="w-full bg-[#F9F9F9] p-8 rounded-lg ">
          <h2 className="text-xl">Add user</h2>
          <nav className="flex flex-col lg:flex-row items-center gap-y-6 justify-between py-6">
            <button
              onClick={() => changeSelectedAccountType("individual")}
              className={`py-[10px] text-lg  flex justify-center items-center rounded-full w-[180px] ${selectedAccountType === 'individual' ? "bg-linearGradientPrimary text-white" : "text-dark border border-primary"}`}
              type="button"
            >
              Add Individual User
            </button>

            <button
              onClick={() => changeSelectedAccountType("family")}
              className={`py-[10px] text-lg  flex justify-center items-center rounded-full w-[180px] ${selectedAccountType === 'family' ? "bg-linearGradientPrimary text-white" : "text-dark border border-primary"}`}
              type="button"
            >
              Add Family User
            </button>

            <button
              onClick={() => changeSelectedAccountType("corporate")}
              className={`py-[10px] text-lg  flex justify-center items-center rounded-full w-[180px] ${selectedAccountType === 'corporate' ? "bg-linearGradientPrimary text-white" : "text-dark border border-primary"}`}
            >
              Add Corporate User
            </button>

            <button
              onClick={() => changeSelectedAccountType("on demand")}
              className={`py-[10px] text-lg  flex justify-center items-center rounded-full w-[180px] ${selectedAccountType === 'on demand' ? "bg-linearGradientPrimary text-white" : "text-dark border border-primary"}`}
              type="button"
            >
              Add On Demand
            </button>
          </nav>
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Enter address"
              />
            </div>
            <div>
              <label
                className="block text-sm font-main text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="flex justify-start">
              <button
                className={`py-[10px] text-lg  flex justify-center items-center rounded-full bg-linearGradientPrimary w-[176px] text-white`}
              >
                Add user
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  )
}

export default AddUser