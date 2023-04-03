import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const SignupStepThree = () => {
  const paymentMode = registerationStore(state => state.paymentMode)
  const selectedAccountType = registerationStore(state => state.selectedAccountType)
  const setPaymentMode = registerationStore(state => state.setPaymentMode)
  const childForms = registerationStore(state => state.childForms)
  const individualMonthlyFee = registerationStore(state => state.individualMonthlyFee)
  const individualYearlyFee = registerationStore(state => state.individualYearlyFee)
  const familyYearlyFee = registerationStore(state => state.familyYearlyFee)
  const familyMonthlyFee = registerationStore(state => state.familyMonthlyFee)
  const onDemandFee = registerationStore(state => state.onDemandFee)
  const corporateFee = registerationStore(state => state.corporateFee)
  const handleRegisterationFormDataChange = registerationStore(state => state.handleRegisterationFormDataChange)
  const [t] = useTranslation()

  const calculatePricing = (accountType) => {
    const individualMonthlyPrice = 29.99 * 3
    const individualYearlyPrice = 24.99 * 12
    const familyMonthlyPrice = 54.99 * 3
    const familyYearlyPrice = 44.99 * 12
    const corporatePrice = 19.99 * 12 * (childForms.length + 1)
    const onDemandPrice = 89.99
    const taxFactor = 0.14975
    return accountType === "individualMonthly" ?
      {
        tax: individualMonthlyPrice * taxFactor,
        totalAmount: individualMonthlyPrice,
        totalAmountPlusTax: individualMonthlyPrice + individualMonthlyPrice * taxFactor
      } :
      accountType === "individualYearly" ?
        {
          tax: individualYearlyPrice * taxFactor,
          totalAmount: individualYearlyPrice,
          totalAmountPlusTax: individualYearlyPrice + individualYearlyPrice * taxFactor
        } :
        accountType === "familyMonthly" ?
          {
            tax: familyMonthlyPrice * taxFactor,
            totalAmount: familyMonthlyPrice,
            totalAmountPlusTax: familyMonthlyPrice + familyMonthlyPrice * taxFactor
          } :
          accountType === "familyYearly" ?
            {
              tax: familyYearlyPrice * taxFactor,
              totalAmount: familyYearlyPrice,
              totalAmountPlusTax: familyYearlyPrice + familyYearlyPrice * taxFactor
            } :
            accountType === "corporate" ?
              {
                tax: corporatePrice * taxFactor,
                totalAmount: corporatePrice,
                totalAmountPlusTax: corporatePrice + corporatePrice * taxFactor
              } :
              {
                tax: onDemandPrice * taxFactor,
                totalAmount: onDemandPrice,
                totalAmountPlusTax: onDemandPrice + onDemandPrice * taxFactor
              }
  }


  return (
    <section className="space-y-1 px-4">
      <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="max-w-xs">
            <article className="flex items-baseline gap-x-6 border-b-[3px] border-b-primary">
              <h2 className="text-3xl lg:text-5xl">{t('Step 3')}</h2>
              <div className="font-body text-xl font-light">
                <div className="text-right">
                  <p>{t('payment')}</p>
                </div>
              </div>
            </article>
          </article>

          <article className="relative">
            <div className={`flex gap-y-4 items-center gap-x-4`}>
              {paymentMode === "yearly" && <p className="text-primary text-[27px]">{t('save-25')}</p>}
              {
                (selectedAccountType === "individual" ||
                  selectedAccountType === "family" ||
                  selectedAccountType === "corporate"
                ) && (
                  <button
                    type="button"
                    onClick={() => setPaymentMode("yearly")}
                    className={`hidden ${paymentMode === 'yearly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary lg:flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                    <h2 className="text-xl">{t('yearly')}</h2>
                    <h4 className="text-xs">{t('best-value')}</h4>
                  </button>
                )
              }
              {
                (
                  selectedAccountType === "individual" ||
                  selectedAccountType === "family"
                ) &&
                <button
                    type="button"
                  onClick={() => setPaymentMode("monthly")}
                    className={`hidden ${paymentMode === 'monthly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary lg:flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                    <h2 className="text-xl">{t('monthly')}</h2>
                </button>
              }
              {
                selectedAccountType === "on demand" &&
                <button
                    className={`bg-primary text-white border-2 border-primary hidden lg:flex flex-col items-center justify-center rounded-2xl w-32 h-16`}>
                    <h2 className="text-xl">{t('on-demand')}</h2>
                </button>
              }
            </div>
          </article>
        </div>
      </article>

      <div className='flex justify-between pt-14 lg:pt-0 relative'>
        <div className={`absolute -top-6 left-0 flex gap-y-4 items-center gap-x-4`}>
          {
            (selectedAccountType === "individual" ||
              selectedAccountType === "family" ||
              selectedAccountType === "corporate"
            ) && (
              <button
                type="button"
                onClick={() => setPaymentMode("yearly")}
                className={`lg:hidden ${paymentMode === 'yearly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                <h2 className="text-xl">{t('yearly')}</h2>
                <h4 className="text-xs">{t('best-value')}</h4>
              </button>
            )
          }
          {
            (
              selectedAccountType === "individual" ||
              selectedAccountType === "family"
            ) &&
            <button
              type="button"
              onClick={() => setPaymentMode("monthly")}
              className={`lg:hidden ${paymentMode === 'monthly' ? "bg-primary text-white" : "bg-transparent text-primary"} border-2 border-primary flex flex-col items-center justify-center  rounded-2xl w-28 h-16`}>
                <h2 className="text-xl">{t('monthly')}</h2>
            </button>
          }
          {
            selectedAccountType === "on demand" &&
            <button
              className={`bg-primary text-white border-2 border-primary lg:hidden flex flex-col items-center justify-center rounded-2xl w-32 h-16`}>
                <h2 className="text-xl">{t('on-demand')}</h2>
            </button>
          }
        </div>
        <article className="space-y-4">
          <h2 className="text-2xl">{t('your-order')}</h2>
          <h3 className="font-body">
            {
              selectedAccountType === "individual" ?
                paymentMode === "monthly" ?
                  `${t('1-x-individual-plan')} ($${individualMonthlyFee}/${t('month')})` :
                  `${t('12-x-individual-plan')} ($${individualYearlyFee}/${t('month')})`
                :
                selectedAccountType === "family" ?
                  paymentMode === "yearly" ?
                    `${t('12-x-family-plan-for')} ${childForms.length + 1} ${t('member')}${childForms.length > 0 ? "s" : ""} ($${familyYearlyFee}/${t('month')})`
                    :
                    `1 x Family Plan for ${childForms.length + 1} ${t('member')}${childForms.length > 0 ? "s" : ""} ($${familyMonthlyFee}/${t('month')})`
                  :
                  selectedAccountType === "corporate" ?
                    `${t('12-x-corporate-plan-for')} ${childForms.length + 1} ${t('member')}${childForms.length > 0 ? "s" : ""} ($${corporateFee}/${t('month')})`
                    :
                    `${t('1-x-on-demand-plan')} ($${onDemandFee}/${t('month')})`
            }
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">{t('subtotal')}</h2>
          <div className="font-body">
            {
              selectedAccountType === "individual" ?
                (
                  paymentMode === "monthly" ?
                    <div>
                      <h3>${individualMonthlyFee}</h3>
                      <div className="flex gap-x-4">
                        <p>{t('3-months-initial-signup')}</p>
                        <h3>${calculatePricing("individualMonthly").totalAmount.toFixed(2)}</h3>
                      </div>
                      <h3>{t('tax')} ${calculatePricing("individualMonthly").tax.toFixed(2)}</h3>
                      <h2 className="text-3xl">
                        <span className="pr-2">{t('total')}</span>
                        <strong>
                          ${calculatePricing("individualMonthly").totalAmountPlusTax.toFixed(2)}
                        </strong>
                      </h2>
                    </div> :
                    <div>
                      <h3>${calculatePricing("individualYearly").totalAmount.toFixed(2)}</h3>
                      <h3>Tax: ${calculatePricing("individualYearly").tax.toFixed(2)}</h3>
                      <h2 className="text-3xl">
                        <span className="pr-2">{t('total')}</span>
                        <strong>
                          ${calculatePricing("individualYearly").totalAmountPlusTax.toFixed(2)}
                        </strong>
                      </h2>
                    </div>
                ) :
                selectedAccountType === "family" ?
                  (
                    paymentMode === "monthly" ?
                      <div>
                        <h3>${familyMonthlyFee}</h3>
                        <div className="flex gap-x-4">
                          <p>{t('3-months-initial-signup')}</p>
                          <h3>${calculatePricing("familyMonthly").totalAmount}</h3>
                        </div>
                        <h3>{t('tax')} ${calculatePricing("familyMonthly").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">{t('total')}</span>
                          <strong>
                            ${calculatePricing("familyMonthly").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div> :
                      <div>
                        <h3>${calculatePricing("familyYearly").totalAmount.toFixed(2)}</h3>
                        <h3>{t('tax')} ${calculatePricing("familyYearly").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">{t('total')}</span>
                          <strong>
                            ${calculatePricing("familyYearly").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div>
                  ) : selectedAccountType === "corporate" ?
                  (
                      <div>
                        <h3>${calculatePricing("corporate").totalAmount.toFixed(2)}</h3>
                        <h3>Tax: ${calculatePricing("corporate").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">{t('total')}</span>
                          <strong>
                            ${calculatePricing("corporate").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                    </div>

                    ) :
                    (
                      <div>
                        <h3>${calculatePricing("on demand").totalAmount.toFixed(2)}</h3>
                        <h3>{t('tax')} ${calculatePricing("on demand").tax.toFixed(2)}</h3>
                        <h2 className="text-3xl">
                          <span className="pr-2">{t('total')}</span>
                          <strong>
                            ${calculatePricing("on demand").totalAmountPlusTax.toFixed(2)}
                          </strong>
                        </h2>
                      </div>
                    )
            }
          </div>
        </article>
      </div>
      <div className="w-full flex flex-wrap gap-y-4 gap-x-6 pb-4 font-body">
        <input
          className="flex-1 font-sans rounded-full text-sm focus:ring-1 focus:ring-primary outline-none px-8 py-[10px] border border-primary"
          name="coupon-code"
          type="text"
          placeholder="Coupon Code"
        />
      </div>
      <CardElement
        className="registration-card-element rounded-full px-4 py-3 ring-1 focus:ring-primary"
      />
      <div>
        <label>
          <input className="pr-4" type="checkbox" name="checkbox" required />
          {t('i-certify-that-i-am-at-least-18-years-old-and-i-agree-to-both-mdhubs-terms-of-use-and-privacy-policy')}
        </label>
      </div>
    </section>
  )
}

export default SignupStepThree