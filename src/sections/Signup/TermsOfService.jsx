import React, { useState } from 'react'

const TermsOfService = () => {
  const [membershipTermsAccepted, setMembershipTermsAccepted] = useState(false)
  const [medicalTermsAccepted, setMedicalTermsAccepted] = useState(false)
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)
  return (
    <section className="space-y-6">
      <div className="space-y-4 px-8 text-dark font-body">
        <p>I am at least 18 years of age and I have read and accept:</p>
        <div className="flex flex-col gap-y-4">
          <article 
            className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary">
            <p>Membership Terms of Service</p>
            <input 
              checked={membershipTermsAccepted}
              onChange={({target}) => setMembershipTermsAccepted(target.checked)}
              className="w-4 h-4"
              type="checkbox" 
              name="membershipTermsOfService"
            />
            </article>
            <article 
              className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary">
              <p>Medical Terms of Service</p>
              <input 
                checked={medicalTermsAccepted}
                onChange={({target}) => setMedicalTermsAccepted(target.checked)}
                className="w-4 h-4"
                type="checkbox" 
                name="medicalTermsOfService"
              />
            </article>
            <article 
              className="flex justify-between items-center rounded-md text-xl px-8 py-2 border border-primary">
              <p>Privacy Policy</p>
              <input 
                checked={privacyPolicyAccepted}
                onChange={({target}) => setPrivacyPolicyAccepted(target.checked)}
                className="w-4 h-4"
                type="checkbox" 
                name="privacyPolicy"
              />
            </article>
            
        </div>
      </div>
    </section>
  )
}

export default TermsOfService