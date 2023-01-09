import React from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function HeaderAuth({ children }) {
  return (
    <div className='w-full h-[60px] px-4'>
      <div className='w-full h-full m-auto flex items-center justify-between gap-[40px] '>
        <img src={logo} alt="" className='cursor-pointer' />
        <div className='flex items-center cursor-pointer'>
          <FontAwesomeIcon icon={faQuestionCircle} className='mr-2 w-5 h-5 text-[#16182380]' />
          <a href='https://www.tiktok.com/feedback/?lang=en' target="_blank" className='hover:underline'>Feedback and help</a>
        </div>
      </div>

      {children}
    </div>
  )
}

export default HeaderAuth