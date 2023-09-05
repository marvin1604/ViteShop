import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
        {children}
    </div>
  )
}
