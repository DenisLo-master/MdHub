import React from 'react'

const Button = ({ children, wide, fullWidth, gradient }) => {
  return (
    <button className={`${gradient ? "bg-gradient-primary text-white" : "border border-primary"} rounded-full group hover:ring-1 hover:ring-primary  py-2  flex justify-center items-center space-x-2  bg-transparent ${wide ? "w-[200px]" : "px-8"} ${fullWidth ? "flex-1" : ""}`}>
      {children}
    </button>
  )
}

export default Button