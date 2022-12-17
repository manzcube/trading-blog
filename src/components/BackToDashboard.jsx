import React from 'react'

const BackToDashboard = () => {
  return (
    <a className='w-full flex justify-start items-center mb-7' href='/dashboard'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="rgb(0, 128, 255)" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <p className='font-bold ml-2 text-sky-500 hover:underline'>Back to Dashboard</p>
      </a>  
  )
}

export default BackToDashboard