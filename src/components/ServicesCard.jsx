import React from 'react'

const ServicesCard = ({ title, children, bgPrimary, wideCaption }) => {
  return (
    <article className={`flex flex-col justify-center items-center ${bgPrimary ? 'bg-primary' : 'bg-white'}  w-[160px] py-6 gap-y-3 shadow-cardService`}>
      {
        children
      }
      <p className={`w-full ${wideCaption ? 'max-w-[140px]' : 'max-w-[70px]'} text-lg text-center leading-5 ${bgPrimary ? "text-white" : "text-gray-800"}`}>{title}</p>
    </article>
  )
}

export default ServicesCard