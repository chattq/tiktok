/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { HomeIcon, LiveIcon, UserIcon } from '../../../../Icons/Icons'
import MenuItem from '../../components/MenuItem/MenuItem'
import SuggestUser from '../../components/SuggestUser/SuggestUser'
import FollowUser from '../../components/FollowUser/FollowUser'

export default function SideBar() {
  return (
    <>
      <div className='h-[156px] border-b border-[#F1F1F2]'>
        <MenuItem title={'Dành cho bạn'} icon={<HomeIcon />} router={`/`} />
        <MenuItem title={'Đang Follow'} icon={<UserIcon />} router={`/following`} />
        <MenuItem title={'LIVE'} icon={<LiveIcon />} router={`/live`} />
      </div>
      <div className='mt-2 px-2 py-1'>
        <h1 className='text-fontSizeTitle font-semibold text-tiktokColorText'>Tài khoản được đề xuất</h1>
        <SuggestUser />
      </div>
      <div className='mt-3 border-t border-[#F1F1F2] px-2 py-2'>
        <h4 className='text-fontSizeTitle font-semibold text-tiktokColorText'>Các tài khoản đang follow</h4>
        <p className='text-[14px] font-thin text-[rgba(22,24,35,0.5)]'>
          Những tài khoản bạn follow sẽ được xuất hiện tại đây
        </p>
        <FollowUser />
      </div>
    </>
  )
}
