import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faQrcode, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function LoginWithEmail() {
  return (
    <div className='mt-[80px] w-full'>
      <div className='mx-auto flex w-[375px] flex-col'>
        <h1 className='my-4 text-center text-[32px] font-bold text-[#161823] '>Log in </h1>
        <label className='mb-[5px] text-fontSizeName font-semibold text-tiktokColorText'>Email or userName</label>
        <input
          className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
          placeholder='Email or username'
        />
        <input
          placeholder='Password'
          className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
        />
        <p className='text-fontSizeMin font-semibold text-[#161823bf]'>Forgot Password ?</p>
        <button className='mt-[21px] min-h-[46px] min-w-[120px] rounded bg-[#fe2c55] text-[white]'>Login</button>
        <Link to={'/login'} className='mt-[40px] flex w-full items-center justify-center text-fontSizeTitle'>
          <FontAwesomeIcon icon={faAngleLeft} className='mr-1' />
          Go back
        </Link>
      </div>
      <div className='fixed bottom-0  right-1 mx-auto flex w-full flex-col border-t border-[#f1f1f2]'>
        <div className='flex h-16 w-full items-center justify-center bg-white'>
          Don’t have an account?
          <Link to={'/signup'}>
            <span className='ml-1 inline-block font-medium text-tiktokPink hover:underline'> Sign up</span>
          </Link>
        </div>
        <div className='flex h-[84px] cursor-pointer items-center justify-between bg-black px-[144px] text-white'>
          <div className='flex h-[36px] w-[172px] items-center rounded-sm border border-[#8a8b91] px-4 text-fontSizeTitle '>
            English
          </div>
          <span className='text-fontSizeTitle font-medium text-[#8a8b91]'>© 2023 TikTok</span>
        </div>
      </div>
    </div>
  )
}

export default LoginWithEmail