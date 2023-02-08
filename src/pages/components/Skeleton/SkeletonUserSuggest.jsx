import React from 'react'

export default function SkeletonUserSuggest() {
  return (
    <div role='status' class='mt-4  animate-pulse'>
      <div class='mb-3 flex items-center'>
        <div class=' h-[35px] w-[35px] rounded-full bg-gray-300 dark:bg-gray-700' />
        <div class='ml-5'>
          <div class=' h-2.5 w-[80px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div class='mt-2.5 h-2 w-[60px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </div>
      </div>
    </div>
  )
}
