import React, { useState } from 'react'
import { ArrowRight } from '../assets'

const FAQ = ({ question, children, bgColor }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="border-b border-dark pb-4">
      <div onClick={() => setShowAnswer(!showAnswer)} className='flex justify-between'>
        <article className="text-xl">
          {question}
        </article>
        <div>
          <ArrowRight className={`text-[${bgColor}] transform ${showAnswer ? "-rotate-90" : "rotate-90"}`} />
        </div>
      </div>
      {
        showAnswer && (
          <div className="pt-3">
            {children}
          </div>
        )
      }
    </div>
  )
}

export default FAQ