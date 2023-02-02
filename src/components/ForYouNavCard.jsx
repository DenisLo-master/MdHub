import React from 'react'

const ForYouNavCard = ({ imageSrc, title }) => {
  return (
    <article className="rounded-3xl leading-5 font-main shadow-cardService w-[200px] text-center">
      <img className="w-full" alt={title} src={imageSrc} />
      <h2 className="px-4 pt-2 pb-4">{title}</h2>
    </article>
  )
}

export default ForYouNavCard