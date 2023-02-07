import React from 'react'

const FormField = ({ type, name, placeholder, value, handleChange }) => {
  return (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" 
      />
  )
}

export default FormField