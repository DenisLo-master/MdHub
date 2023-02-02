import React from 'react'
import Button from './Button'

const DescriptionGrid = ({ children, title, imageSrc, reverse }) => {
  return (
    <service className={`py-20 flex font-body items-center justify-center gap-x-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <article>
        <h2 className="text-4xl font-main text-gray-800">{title}</h2>
        <div className="space-y-4 w-full max-w-[400px] pt-4 pb-6 text-gray-600 font-light text-sm">
          {children}
        </div>
        <div className="flex space-x-4 font-main">
          <Button wide>
            See A Doctor
          </Button>
          <Button wide>
            Sign Up
          </Button>
        </div>
      </article>
      <article>
        <img className="w-full max-w-[450px] rounded-[35px]" alt={title} src={imageSrc} />
      </article>

    </service>
  )
}

export default DescriptionGrid