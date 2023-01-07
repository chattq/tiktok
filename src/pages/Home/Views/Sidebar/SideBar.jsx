import React from 'react'
import { HomeIcon, LiveIcon, UserIcon } from '../../../../Icons/Icons'
import MenuItem from '../../components/MenuItem/MenuItem'
import UserItem from '../../components/UserItem/UserItem'

export default function SideBar() {
  return (
    <>
      <div className='h-[156px] border-b border-[#F1F1F2]'>
        <MenuItem title={'Dành cho bạn'} icon={<HomeIcon />} router={`/`} />
        <MenuItem title={'Đang Follow'} icon={<UserIcon />} router={`/following`} />
        <MenuItem title={'LIVE'} icon={<LiveIcon />} router={`/live`} />
      </div>
      <h1 className='mt-3 px-2 py-2 text-fontSizeTitle font-medium text-tiktokColorText'>Tài khoản được đề xuất</h1>
      <div>
        <UserItem />
      </div>
    </>
  )
}
