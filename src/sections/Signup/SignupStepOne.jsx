import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { ChildAccountForms, ParentAccountForm } from '../../sections'

const SignupStepOne = () => {
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  return (
    <section className='space-y-6 px-4'>
      <article className="w-full self-start pt-8 lg:pb-20 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center relative">
          {
            selectedAccountType === "family" && (
              <div className="absolute right-0 top-16 lg:top-0 lg:w-72 flex justify-center items-center text-right px-8 h-[68px] rounded-2xl text-white bg-primary lg:text-lg">
                <p className="leading-5">includes all family members in the same household</p>
              </div>
            )
          }
          {
            selectedAccountType === "corporate" && (
              <div className="absolute right-0 top-20 lg:top-0 lg:w-72 flex justify-center items-center text-right px-8 h-[68px] rounded-2xl text-white bg-primary lg:text-lg">
                <p className="leading-5">for more than 10 employees, please click here</p>
              </div>
            )
          }
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-3xl lg:text-5xl">Step 1</h2>
            <div className="font-body text-xl font-light">
              <div className="text-right">
                <p>Enter member details</p>
                <p className="text-sm">
                  {selectedAccountType === "corporate" && "Up to 10 Employees"}
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <ParentAccountForm />
      {selectedAccountType === "family" && <ChildAccountForms />}
      {selectedAccountType === "corporate" && <ChildAccountForms />}
    </section>
  )
}


export default SignupStepOne