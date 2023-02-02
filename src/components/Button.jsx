import React from 'react'

const Button = ({ children, wide, fullWidth }) => {
  return (
    <button className={`rounded-full group hover:ring-1 hover:ring-primary  py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent ${wide ? "w-[160px]" : "px-8"} ${fullWidth ? "flex-1" : ""}`}>
      {children}
    </button>
  )
}

export default Button