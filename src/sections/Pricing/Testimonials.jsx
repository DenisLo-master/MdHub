import React from 'react'
import { Star } from '../../assets'

const Testimonials = () => {
  return (
    <section className="text-dark">
      <h2 className="text-center text-4xl">
        Never wait for a doctor again
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
            "Finally my son can see a doctor without sitting at a hospital waiting room for 8+ hours. We received a diagnosis in 15 minutes and prescription delivery the same day!"
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
            “I renewed my prescription in 3 minutes and even got my yearly lab work test. This is really the way to focus on preventive healthcare. Why hasn’t the government thought of a system like this before?”
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
            “My wife and I booked a virtual COVID TEST using MDHUB. We had a nurse guide us through a super simple process and had our results emailed within minutes.”
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
            “Our father needed help out home, hes 85 years old and we quickly got a homecare assistant to come over and help him clean up, gather up his lunch and just make him and us feel helped. I can’t thank the team at MDHUB enough!”
          </p>
        </article>
      </div>
    </section>
  )
}

export default Testimonials