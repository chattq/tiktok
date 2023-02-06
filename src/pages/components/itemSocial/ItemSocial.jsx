import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { Link } from 'react-router-dom'
export default function ItemSocial({ icon, meassage }) {
  return (
    <Link>
      <Tippy
        interactive
        placement='top'
        offset={[0, 5]}
        delay={[100, 0]}
        render={() => (
          <div className='rounded-lg bg-[#545454eb] p-2 text-left text-[16px] font-medium leading-[22px] text-[#ffffff]'>
            {meassage}
          </div>
        )}
      >
        <span className='flex h-8 w-8 cursor-pointer items-center justify-center'>{icon}</span>
      </Tippy>
    </Link>
  )
}
