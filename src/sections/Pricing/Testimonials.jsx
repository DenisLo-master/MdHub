import React from 'react'
import { Star } from '../../assets'
import { useTranslation } from 'react-i18next' 

const Testimonials = () => {
  const { t } = useTranslation()
  return (
    <section className="text-dark px-4">
      <h2 className="text-center text-4xl">
        {t('never-wait-for-a-doctor-again')}
      </h2>
      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 text-white py-12">
        <article className="bg-gradient-primary py-4 p-10 rounded-lg">
          <div className="flex items-center gap-x-6 pb-3">
            <h2 className="text-4xl">Audrey Gagnon</h2>
            <div className="flex gap-x-1 text-white">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="font-body leading-6">
            "{t('finally-my-son-can-see-a-doctor-without-sitting-at-a-hospital-waiting-room-for-8-hours-we-received-a-diagnosis-in-15-minutes-and-prescription-delivery-the-same-day')}"
          </p>
        </article>

        <article className="bg-gradient-primary py-4 p-10 rounded-lg">
          <div className="flex items-center gap-x-6 pb-3">
            <h2 className="text-4xl">Alexandre Lizzote</h2>
            <div className="flex gap-x-1 text-white">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="font-body leading-6">
            “{t('i-renewed-my-prescription-in-3-minutes-and-even-got-my-yearly-lab-work-test-this-is-really-the-way-to-focus-on-preventive-healthcare-why-hasnt-the-government-thought-of-a-system-like-this-before')}”
          </p>
        </article>

        <article className="bg-gradient-primary py-4 p-10 rounded-lg">
          <div className="flex items-center gap-x-6 pb-3">
            <h2 className="text-4xl">Francois Simard</h2>
            <div className="flex gap-x-1 text-white">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="font-body leading-6">
            “{t('my-wife-and-i-booked-a-virtual-covid-test-using-mdhub-we-had-a-nurse-guide-us-through-a-super-simple-process-and-had-our-results-emailed-within-minutes')}”
          </p>
        </article>

        <article className="bg-gradient-primary py-4 p-10 rounded-lg">
          <div className="flex items-center gap-x-6 pb-3">
            <h2 className="text-4xl">Brenda Cohen</h2>
            <div className="flex gap-x-1 text-white">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="font-body leading-6">
            “{t('our-father-needed-help-out-home-hes-85-years-old-and-we-quickly-got-a-homecare-assistant-to-come-over-and-help-him-clean-up-gather-up-his-lunch-and-just-make-him-and-us-feel-helped-i-cant-thank-the-team-at-mdhub-enough')}”
          </p>
        </article>
      </div>
    </section>
  )
}

export default Testimonials