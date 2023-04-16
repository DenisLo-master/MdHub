import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'


const TermsOfService = () => {
  const [membershipTermsAccepted, setMembershipTermsAccepted] = useState(false)
  const [medicalTermsAccepted, setMedicalTermsAccepted] = useState(false)
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)
  const { t } = useTranslation()
  return (
    <section className='space-y-6 max-w-[49rem] mx-auto bg-[#f5f5f5] py-12 pb-24'>
      <div className="space-y-4 px-8 text-dark font-body pt-6">
        <p>{t('i-am-at-least-18-years-of-age-and-i-have-read-and-accept')}</p>
        <div className="flex flex-col gap-y-4">
          <article 
            className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary bg-white">
            <p>{t('membership-terms-of-service')}</p>
            <input 
              checked={membershipTermsAccepted}
              onChange={({target}) => setMembershipTermsAccepted(target.checked)}
              className="w-4 h-4"
              type="checkbox" 
              name="membershipTermsOfService"
              required
            />
            </article>
            <article 
              className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary bg-white">
            <p>{t('medical-terms-of-service')}</p>
              <input 
                checked={medicalTermsAccepted}
                onChange={({target}) => setMedicalTermsAccepted(target.checked)}
                className="w-4 h-4"
                type="checkbox" 
                name="medicalTermsOfService"
                required
              />
            </article>
            <article 
              className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary bg-white">
            <p>{t('privacy-policy')}</p>
              <input 
                checked={privacyPolicyAccepted}
                onChange={({target}) => setPrivacyPolicyAccepted(target.checked)}
                className="w-4 h-4"
                type="checkbox" 
                name="privacyPolicy"
                required
              />
            </article>
            
        </div>
      </div>
    </section>
  )
}

export default TermsOfService