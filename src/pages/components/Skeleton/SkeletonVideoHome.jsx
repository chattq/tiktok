import React from 'react'

export default function SkeletonVideoHome() {
  return (
    <div role='status' class='mt-4  animate-pulse'>
      <div class='mb-3 flex '>
        <div class=' h-[65px] w-[65px] rounded-full bg-gray-300 dark:bg-gray-700' />
        <div class='ml-5 mt-2'>
          <div class=' h-[15px] w-[220px] rounded-[3px] bg-gray-200 dark:bg-gray-700'></div>
          <div class='mt-2.5 h-[15px] w-[120px] rounded-[3px] bg-gray-200 dark:bg-gray-700'></div>
          <div class=' mt-2.5 h-[15px] w-[400px] rounded-[3px] bg-gray-200 dark:bg-gray-700'></div>
          <div class='mt-2.5 h-[15px] w-[400px] rounded-[3px] bg-gray-200 dark:bg-gray-700'></div>
        </div>
      </div>
    </div>
  )
}
