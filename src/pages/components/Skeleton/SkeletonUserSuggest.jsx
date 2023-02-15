import React from 'react'

export default function SkeletonUserSuggest() {
  return (
    <div role='status' className='mt-4  animate-pulse'>
      <div className='mb-3 flex items-center'>
        <div className=' h-[35px] w-[35px] rounded-full bg-gray-300 dark:bg-gray-700' />
        <div className='ml-5'>
          <div className=' h-2.5 w-[80px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mt-2.5 h-2 w-[60px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </div>
      </div>
    </div>
  )
}
