import React from 'react'
import { locks } from '../../../Icons/Icons'

export default function SkeletonUserInfor() {
  return (
    <div role='status' class='animate-pulse'>
      <div class='flex'>
        <div class='flex h-[116px] w-[116px]  rounded-full bg-gray-300 dark:bg-gray-700 '></div>
        <div class='ml-10 mt-3'>
          <div class='mb-4 h-[25px] w-48  bg-gray-200 dark:bg-gray-700'></div>
          <div class='h-[25px] max-w-[360px] bg-gray-200 dark:bg-gray-700'></div>
        </div>
      </div>
      <div class='tab_list border-gray relative mt-6 flex h-[44px] w-[460px] cursor-pointer items-center border-b-[2px] text-[rgba(22,24,35,0.5)]'>
        <div class='tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium'>
          <span>Video</span>
        </div>
        <div class='tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium'>
          {locks()}
          <span class='ml-2'>Đã thích</span>
        </div>
        <div class='tab_line absolute bottom-[-1px] h-[2px] w-[230px] bg-black' />
      </div>
      <div class='mt-[20px] min-h-[220px] min-w-[300px]'>
        <div class='grid grid-cols-6 gap-x-[10px] gap-y-[25px]'>
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
          <div class='flex h-[250px] w-[190px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700' />
        </div>
      </div>
    </div>
  )
}
