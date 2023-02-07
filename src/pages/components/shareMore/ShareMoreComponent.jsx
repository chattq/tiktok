import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { share } from '../../../Icons/Icons'

function ShareMoreComponent({ data = [], placement = 'bottom' }) {
  return (
    <>
      <Tippy
        interactive
        placement={placement}
        offset={[0, 5]}
        delay={[100, 0]}
        render={(attr) => (
          <div className='w-[280px] overflow-auto rounded-lg bg-white p-[8px_0] text-[16px] font-medium leading-[22px] shadow-[rgb(0,0,0,12%)_0px_4px_16px]'>
            {data.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
      >
        <span className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] text-center hover:bg-[#1618230f]'>
          {share()}
        </span>
      </Tippy>
    </>
  )
}

export default ShareMoreComponent
