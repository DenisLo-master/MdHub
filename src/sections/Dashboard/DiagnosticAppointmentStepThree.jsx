import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { registerationStore } from '../../store/registerationStore'
import { useTranslation } from 'react-i18next'

const DiagnosticAppointmentStepThree = () => {
  const diagnosticsAppointmentBill = registerationStore(state => state.diagnosticsAppointmentBill)
  const { t } = useTranslation()
  return (
    <div>
      <div className="flex justify-between pb-5">
        <article className="space-y-4">
          <h2 className="text-2xl">{t('your-order')}</h2>
          <h3 className="font-body">
            {t('1-hour-minimum-nursing-fee')}: ${diagnosticsAppointmentBill}
          </h3>
        </article>
        <article className="space-y-4 text-right">
          <h2 className="text-2xl">{t('subtotal')}</h2>
          <div className="font-body">
            <h3>${diagnosticsAppointmentBill}</h3>
            <h3>{t('tax-0')}: ${(diagnosticsAppointmentBill * 0.14975).toFixed(2)}</h3>
            <h2 className="text-3xl">{t('total-0')}: <strong>${(diagnosticsAppointmentBill + (diagnosticsAppointmentBill * 0.014975)).toFixed(2)}</strong></h2>
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
      <div>
        <CardElement
          className="rounded-full px-4 py-3 ring-1 focus:ring-primary"
        />
      </div>
    </div>
  )
}

export default DiagnosticAppointmentStepThree