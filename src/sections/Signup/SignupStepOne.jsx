import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { ChildAccountForms, ParentAccountForm } from '../../sections'

const SignupStepOne = () => {
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  // const filledChildForms = childForms.filter(form => Object.values(form).every(value => value !== ''))

  return (
    <section className='space-y-6'>
      <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-5xl ">Step 1</h2>
            <div className="font-body text-xl font-light">
              <div className="text-right">
                <p>Enter member details</p>
                <p className="text-sm">
                  {selectedAccountType === "family" && "Upto 4 Family Members"}
                  {selectedAccountType === "corporate" && "Upto 10 Employees"}
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <ParentAccountForm />
      <ChildAccountForms />
    </section>
  )
}


export default SignupStepOne