import React from 'react'
import { registerationStore } from '../../store/registerationStore'

const DashboardUserInfo = () => {
  const userInfo = registerationStore(state => state.userInfo)

  return (
    <section className="flex gap-x-16 font-body font-light pb-10">
      <article className="flex-1 space-y-4">
        <h2 className="text-4xl font-main font-normal">Your Information</h2>
        <div className="p-10 bg-[#fbfbfb] rounded-[35px] shadow-cardService space-y-6  border-[0.25px]">
          <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
            {userInfo?.firstName}
          </article>
          <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
            {userInfo?.lastName}
          </article>
          <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
            {userInfo?.email}
          </article>
          <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
            {userInfo?.phone}
          </article>
          <article className="bg-white rounded-[48px] shadow-cardService px-8 py-3 border-[0.25px]">
            {`${userInfo.address}, ${userInfo?.city}, ${userInfo.province}`}
          </article>
        </div>
      </article>

      <article className="flex-1 space-y-4">
        <h2 className="text-4xl font-main font-normal">Your Subscription</h2>
        <div className="p-10 bg-[#fbfbfb] flex flex-col justify-between rounded-[35px] shadow-cardService space-y-6 border-[0.25px] h-[428px]">
          <article className="space-y-10">
            <div>
              <p className="text-sm">Your current subscription plan</p>
              <h2 className="font-bold text-2xl tracking-widest">{`${userInfo?.accountType} ${userInfo?.paymentMode}`}</h2>
            </div>
            <div>
              <h2 className="font-bold text-4xl">$
                {
                  userInfo?.accountType === "individual" ?
                    userInfo?.paymentMode === "monthly" ? "34.99" : "29.99"
                    :
                    userInfo?.accountType === "family" ?
                      userInfo?.paymentMode === "monthly" ? "54.99" : "44.99"
                      :
                      userInfo?.accountType === "corporate" &&
                      "19.99"
                }
                /month
              </h2>
              <p className="text-sm">Unlimited usage</p>
            </div>
          </article>
          <article>
            <button className={`rounded-full font-main text-lg group hover:ring-1 hover:ring-primary px-12 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Manage
            </button>
          </article>
        </div>
      </article>
    </section>
  )
}

export default DashboardUserInfo