import React from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function HeaderAuth({ children }) {
  return (
    <>
      <div className='fixed top-0 h-[60px] w-full px-4'>
        <div className='m-auto flex h-full w-full items-center justify-between gap-[40px] '>
          <Link to={'/'}>
            <img src={logo} alt='' className='cursor-pointer' />
          </Link>
          <div className='flex cursor-pointer items-center'>
            <FontAwesomeIcon icon={faQuestionCircle} className='mr-2 h-5 w-5 text-[#16182380]' />
            <a href='https://www.tiktok.com/feedback/?lang=en' target='_blank' className='hover:underline'>
              Feedback and help
            </a>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default HeaderAuth
