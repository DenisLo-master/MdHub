import React from 'react'
import { forYouNavDetails } from '../../constants'
import ForYouNavCard from '../../components/ForYouNavCard'

const ForYouHeaderSection = () => {
  return (
    <section className="bg-[#F9F9F9] font-main">
      <h2 className="py-10 text-4xl text-center">For You</h2>
      <div className="flex py-10 justify-center gap-x-8">
        {
          forYouNavDetails.map(item => (
            <ForYouNavCard
              imageSrc={item.image}
              title={item.title}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ForYouHeaderSection