import React from 'react'

function Button({type,children ,...props}) {
  return (
    <button
          type={type}
          className="text-slate-200 pr-20 bg-[#3A81F1] pl-20 p-2 shadow-lg text-sm rounded-xl m-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"                    
          {...props}
      >                    
              {children}
      </button>
  )
}

export default Button
