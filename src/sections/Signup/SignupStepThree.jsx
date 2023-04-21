import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'
import { MembershipBenefit01, MembershipBenefit02, MembershipBenefit04, MembershipBenefit05, MembershipBenefit06, MembershipBenefitHeadspace } from '../../assets'

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
    const familyMonthlyPrice = 49.99 * 3
    const familyYearlyPrice = 39.99 * 12
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
    <section className="space-y-1 px-4 pt-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4 pb-4">
        <h2 className="text-4xl md:text-5xl">{t('choose-payment')}</h2>
      </div>
      <section className="flex flex-col-reverse md:flex-row md:justify-between text-dark">
        <article className="w-full space-y-4 font-body max-w-[550px]">
          <article className="bg-[#f5f5f5] w-full rounded-[8px] p-8 flex flex-col gap-y-3">
            <div className="w-full">
              <input className="w-full rounded-md focus:ring-1 focus:ring-primary outline-none px-8 py-2 border border-primary" type="text" name="couponCode" placeholder='Coupon Code' />
            </div>
            <CardElement className="registration-card-element bg-white rounded-md px-4 py-3 ring-1 focus:ring-primary" />
          </article>
          <article className="bg-[#f5f5f5] w-full rounded-[8px] p-8">
            <h2 className="font-body font-semibold text-2xl pb-4">{t('Membership Benefits')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-main">
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img className="w-full" src={MembershipBenefit01} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('access-to-canadian-certified-doctors-24-7')}</p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img className="w-full" src={MembershipBenefit02} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('free-and-fast-delivery-online-pharmacy')}</p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img src={MembershipBenefitHeadspace} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('free-headspace-membership')}</p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img src={MembershipBenefit04} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('access-to-qualified-mobile-nurses')}</p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img src={MembershipBenefit05} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('access-specialist-doctors-at-discounted-rates')}</p>
              </article>
              <article className="flex flex-col items-center text-center">
                <div className="w-[53px] h-[47px] flex justify-center items-center">
                  <img src={MembershipBenefit06} alt="Membership Benefit" />
                </div>
                <p className="text-sm max-w-[130px] leading-4 pt-1">{t('fast-and-convenient-lab-testing-and-diagnostics')}</p>
              </article>
            </div>
          </article>
        </article>
        <article className="bg-[#f5f5f5] w-full max-w-[550px] rounded-[8px] p-8">
          <div className="flex justify-between items-center">
            <h2 className="font-body font-semibold text-2xl pb-4 md:pb-0">{t('cart-summary')}</h2>
            <div className={`flex flex-col md:flex-row gap-y-4 items-center gap-x-4`}>
              {
                (selectedAccountType === "individual" ||
                  selectedAccountType === "family" ||
                  selectedAccountType === "corporate"
                ) && (
                  <button
                    type="button"
                    onClick={() => setPaymentMode("yearly")}
                    className={`${paymentMode === 'yearly' ? "bg-[#1EBC91] text-white" : "bg-white text-[#1EBC91]"} border-2 border-primary lg:flex flex-col items-center justify-center rounded-full w-[100px] md:w-[144px] md:h-12`}>
                    <h2 className="text-base">{t('yearly')}</h2>
                    {/* <h4 className="text-xs">{t('best-value')}</h4> */}
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
                    className={`${paymentMode === 'monthly' ? "bg-[#1EBC91] text-white" : "bg-white text-[#1EBC91]"} border-2 border-[#1EBC91] lg:flex flex-col items-center justify-center rounded-full w-[100px] md:w-[144px] md:h-12`}>
                  <h2 className="text-base">{t('monthly')}</h2>
                </button>
              }
            </div>
          </div>
          <article className="space-y-4 font-body pt-5">
            {
              selectedAccountType === "individual" && paymentMode === "monthly" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-individual-membership')}</h2>
                    <h3>${individualMonthlyFee}/{t('month')}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('3-months-initial-signup')}</h2>
                    <h3>${calculatePricing("individualMonthly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("individualMonthly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("individualMonthly").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("individualMonthly").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {
              selectedAccountType === "individual" && paymentMode === "yearly" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-individual-membership')}</h2>
                    <h3>${individualYearlyFee}/{t('month')}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">12 x {t('mdhub-individual-membership')}</h2>
                    <h3>${calculatePricing("individualYearly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("individualYearly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("individualYearly").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("individualYearly").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {
              selectedAccountType === "family" && paymentMode === "monthly" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-family-membership')}</h2>
                    <h3>${familyMonthlyFee}/month</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('3-months-initial-signup')}</h2>
                    <h3>${calculatePricing("familyMonthly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("familyMonthly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("familyMonthly").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("familyMonthly").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {
              selectedAccountType === "family" && paymentMode === "yearly" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-family-membership')}</h2>
                    <h3>${familyYearlyFee}/{t('month')}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">12 x {t('mdhub-family-membership')}</h2>
                    <h3>${calculatePricing("familyYearly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("familyYearly").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("familyYearly").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("familyYearly").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {
              selectedAccountType === "corporate" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-corporate-membership')}</h2>
                    <h3>${corporateFee}/month</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("corporate").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("corporate").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("corporate").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {
              selectedAccountType === "on demand" &&
              (
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('mdhub-on-demand-membership')}</h2>
                    <h3>${corporateFee}/month</h3>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{t('subtotal')}</h2>
                    <h3>${calculatePricing("on demand").totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between py-8 border-b-2 border-dark">
                    <h2 className="font-semibold">{t('tax-0')}</h2>
                    <h3>${calculatePricing("on demand").tax.toFixed(2)}</h3>
                  </div>
                  <div className="flex justify-between text-3xl pt-8">
                    <h2 className="font-semibold">{t('total-0')}</h2>
                    <h3>${calculatePricing("on demand").totalAmountPlusTax.toFixed(2)}</h3>
                  </div>
                </div>
              )
            }
            {/* <h3 className="font-body">
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
            </h3> */}
          </article>

          <article className="flex justify-end pt-4">
            <button
              type="submit"
              className={`rounded-full w-56 font-main text-xl group hover:ring-1 hover:ring-primary py-3 border flex justify-center items-center space-x-2  border-primary bg-[#1EBC91] text-white`}
            >
              {t('pay-now')}
            </button>
          </article>
        </article>
      </section>
      {/* <article className="w-full self-start pt-8 pb-4 mb-4 ">
        <div className="w-full flex justify-between items-center">
          <article className="relative">
            <div className={`flex gap-y-4 items-center gap-x-4`}>
              {paymentMode === "yearly" && <p className="text-primary text-xl md:text-[27px]">{t('save-25')}</p>}
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
      </article> */}

      {/* <div className='flex justify-between pt-14 lg:pt-0 relative'>
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
      </div> */}
      {/* <div className="w-full flex flex-wrap gap-y-4 gap-x-6 pb-4 font-body">
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
      <div className="py-4">
        <label className="flex items-center gap-x-3">
          <input className="pr-4" type="checkbox" name="checkbox" required />
          {t('i-certify-that-i-am-at-least-18-years-old-and-i-agree-to-both-mdhubs-terms-of-use-and-privacy-policy')}
        </label>
      </div> */}
    </section>
  )
}

export default SignupStepThree
