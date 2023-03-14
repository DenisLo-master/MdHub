import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

const Admin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }

  return (
    <section className="py-14 font-main">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-x-10 px-4 text-dark">
        <aside className="bg-[#F9F9F9] flex flex-col justify-between items-center lg:h-[550px] p-8 rounded-lg shadow-cardService">
          <div className="space-y-6 flex flex-col items-center pb-4">
            <button
              className={`py-[10px] text-lg  flex justify-center items-center rounded-full w-[240px] ${location.pathname === '/admin' ? "bg-linearGradientPrimary w-[240px] text-white" : "w-[176px] text-dark border border-dark"}`}
              type="button"
            >
              <Link className="w-full" to="/admin">
                Dashboard
              </Link>
            </button>
            <button
              className={`py-[10px] text-lg text-white flex justify-center items-center rounded-full w-[240px] ${location.pathname === '/admin/all_users' ? "bg-linearGradientPrimary w-[240px]" : "w-[176px] text-dark border border-dark"}`}
              type="button"
            >
              <Link className="w-full" to="/admin/all_users">
                All Users
              </Link>
            </button>
            {/* <button
              className={`py-[10px] text-lg text-white flex justify-center items-center rounded-full w-[240px] ${location.pathname === '/admin/add_user' ? "bg-linearGradientPrimary w-[240px]" : "w-[176px] text-dark border border-dark"}`}
              type="button"
            >
              <Link className="w-full" to="/admin/add_user">
                Add User
              </Link>
            </button> */}
            <button
              className={`py-[10px] text-lg text-white flex justify-center items-center rounded-full w-[240px] ${location.pathname === '/admin/billing_history' ? "bg-linearGradientPrimary w-[240px]" : "w-[176px] text-dark border border-dark"}`}
              type="button"
            >
              <Link className="w-full" to="/admin/billing_history">
                Billing History
              </Link>
            </button>
          </div>
          <button
            onClick={handleSignout}
            className="bg-white border-[0.25px] border-dark py-[10px] text-lg text-dark flex justify-center items-center rounded-full w-[176px]"
            type="button"
          >
            Log Out
          </button>
        </aside>
        <Outlet />
      </div>
    </section>
  )
}

export default Admin