import React from 'react'

const OfflinePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh] text-center'>
        <h1 className='text-gray-800 text-2xl font-bold'>Oops! You're Offline</h1>
        <p className='text-gray-600 mb-5'>Please check your internet connection and Try again</p>
    </div>
  )
}

export default OfflinePage