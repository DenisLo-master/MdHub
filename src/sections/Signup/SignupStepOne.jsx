import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { ChildAccountForms, ParentAccountForm } from '../../sections'
import { useTranslation } from 'react-i18next'

const SignupStepOne = () => {
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const { t } = useTranslation()
  return (
    <section className='space-y-6'>
      {/* <article
        className={`w-full self-start pt-8
        ${selectedAccountType === "corporate" ? "pb-20" : selectedAccountType === "family" ? "pb-20" : "pb-4"}
        lg:pb-4 mb-4 `}
      >
        <div className="w-full flex justify-between items-center relative">
          {
            selectedAccountType === "family" && (
              <div className="absolute right-0 top-16 lg:top-0 lg:w-72 flex justify-center items-center text-right px-8 h-[68px] rounded-2xl text-white bg-primary lg:text-lg">
                <p className="leading-5">
                  {t('includes-all-family-members-in-the-same-household')}
                </p>
              </div>
            )
          }
          {
            selectedAccountType === "corporate" && (
              <div className="absolute right-0 top-20 lg:top-0 lg:w-72 flex justify-center items-center text-right px-8 h-[68px] rounded-2xl text-white bg-primary lg:text-lg">
                <a href="mailto:info@mdhub.com?subject=Corporate%20Inquiry%20-%2010%2B%20Employees">
                  <p className="leading-5">{t('for-more-than-10-employees-please-click-here')}</p>
                </a>
              </div>
            )
          }
          <article className="border-b-primary flex items-baseline gap-x-6 border-b-[3px] max-w-xs">
            <h2 className="text-2xl lg:text-[32px]">{t('Step 1')}</h2>
            <div className="font-body text-base font-light">
              <div className="text-sm lg:text-base text-right">
                <p>{t('enter-member-details')}</p>
                <p className="text-sm">
                  {selectedAccountType === "corporate" && t('up-to-10-employees')}
                </p>
              </div>
            </div>
          </article>
        </div>
      </article> */}
      <ParentAccountForm />
      {selectedAccountType === "family" && <ChildAccountForms />}
      {selectedAccountType === "corporate" && <ChildAccountForms />}
    </section>
  )
}


export default SignupStepOne