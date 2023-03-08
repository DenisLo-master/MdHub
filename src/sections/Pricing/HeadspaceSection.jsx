import React from 'react'
import { HeadspaceLogo } from '../../assets'

const HeadspaceSection = () => {
  return (
    <div className="py-10 flex justify-center font-main">
      <article className="max-w-[1200px] flex justify-between items-center">
        <h3 className="text-3xl max-w-[600px]">
          Free 3 months of Headspace membership included in all our plans. ($36 value)
        </h3>
        <img className="w-full max-w-[500px]" src={HeadspaceLogo} alt="Headspace" />
      </article>
    </div>
  )
}

export default HeadspaceSection