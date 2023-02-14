import React from 'react'

const HomeUserSatisfactionSection = () => {
  return (
    <section className="py-16 font-main text-4xl">
      <h2 className="text-center pb-8">
        We take care of outstanding people, their families, and their corporations.
      </h2>
      <div className="max-w-sm mx-auto flex flex-col justify-center text-center">
        <h3 className="text-primary text-8xl">4.9/5</h3>
        <p className="font-body font-light text-2xl">
          Average user satisfaction rating.
        </p>
        <div className="flex justify-center gap-x-2 pt-3">
          <article className="w-[9px] h-[9px] rounded-full bg-primary" />
          <article className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]" />
          <article className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]" />
          <article className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]" />
        </div>
      </div>
    </section>
  )
}

export default HomeUserSatisfactionSection
