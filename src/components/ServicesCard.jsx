import React from 'react'

const ServicesCard = ({ title, children, bgPrimary }) => {
  return (
    <article className={`flex justify-center gap-x-2 items-center ${bgPrimary ? 'bg-primary shadow-cardService' : 'bg-transparent'}  ${title === "nursing & homecare" ? "w-[210px]" : "w-[180px]"} py-3 rounded-full `}>
      {
        children
      }
      <p className={`text-lg leading-5 ${bgPrimary ? "text-white" : "text-gray-800"}`}>{title}</p>
    </article>
  )
}

export default ServicesCard